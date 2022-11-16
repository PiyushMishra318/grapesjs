import { bindAll, isString, debounce, isUndefined } from 'underscore';
import { appendVNodes, append, createEl, createCustomEvent, motionsEv } from '../../utils/dom';
import { on, off, setViewEl, hasDnd, getPointerEvent } from '../../utils/mixins';
import { View } from '../../abstract';
import CssRulesView from '../../css_composer/view/CssRulesView';
import Droppable from '../../utils/Droppable';
import Frame from '../model/Frame';
import Canvas from '../model/Canvas';
import ComponentWrapper from '../../dom_components/model/ComponentWrapper';
import FrameWrapView from './FrameWrapView';

export default class FrameView extends View<Frame, HTMLIFrameElement> {
  //@ts-ignore
  get tagName() {
    return 'iframe';
  }
  //@ts-ignore
  get attributes() {
    return { allowfullscreen: 'allowfullscreen' };
  }

  dragging = false;
  droppable?: Droppable;
  rect?: DOMRect;

  lastClientY?: number;
  lastMaxHeight = 0;
  private jsContainer?: HTMLElement;
  private tools: { [key: string]: HTMLElement } = {};
  private wrapper?: any;
  private frameWrapView?: FrameWrapView;

  constructor(model: Frame, view?: FrameWrapView) {
    super({ model });
    bindAll(this, 'updateClientY', 'stopAutoscroll', 'autoscroll', '_emitUpdate');
    const { el, em } = this;
    //el = em.config.el
    //@ts-ignore
    this.module._config = {
      ...(this.config || {}),
      //@ts-ignore
      frameView: this,
      //canvasView: view?.cv
    };
    //console.log(this.config)
    this.frameWrapView = view;
    this.showGlobalTools = debounce(this.showGlobalTools.bind(this), 50);
    const cvModel = this.getCanvasModel();
    this.listenTo(model, 'change:head', this.updateHead);
    this.listenTo(cvModel, 'change:styles', this.renderStyles);
    model.view = this;
    setViewEl(el, this);
  }

  /**
   * Update `<head>` content of the frame
   */
  updateHead() {
    const { model } = this;
    const headEl = this.getHead();
    const toRemove: any[] = [];
    const toAdd: any[] = [];
    const current = model.head;
    const prev = model.previous('head');
    const attrStr = (attr: any = {}) =>
      Object.keys(attr)
        .sort()
        .map(i => `[${i}="${attr[i]}"]`)
        .join('');
    const find = (items: any[], stack: any[], res: any[]) => {
      items.forEach(item => {
        const { tag, attributes } = item;
        const has = stack.some(s => s.tag === tag && attrStr(s.attributes) === attrStr(attributes));
        !has && res.push(item);
      });
    };
    find(current, prev, toAdd);
    find(prev, current, toRemove);
    toRemove.forEach(stl => {
      const el = headEl.querySelector(`${stl.tag}${attrStr(stl.attributes)}`);
      el?.parentNode?.removeChild(el);
    });
    appendVNodes(headEl, toAdd);
  }

  getEl() {
    return this.el;
  }

  getCanvasModel(): Canvas {
    return this.em.get('Canvas').getModel();
  }

  getWindow() {
    return this.getEl().contentWindow as Window;
  }

  getDoc() {
    return this.getEl().contentDocument as Document;
  }

  getHead() {
    return this.getDoc().querySelector('head') as HTMLHeadElement;
  }

  getBody() {
    return this.getDoc().querySelector('body') as HTMLBodyElement;
  }

  getWrapper() {
    return this.getBody().querySelector('[data-gjs-type=wrapper]') as HTMLElement;
  }

  getJsContainer() {
    if (!this.jsContainer) {
      this.jsContainer = createEl('div', { class: `${this.ppfx}js-cont` });
    }

    return this.jsContainer;
  }

  getToolsEl() {
    return this.frameWrapView?.elTools as HTMLElement;
  }

  getGlobalToolsEl() {
    return this.em.get('Canvas').getGlobalToolsEl();
  }

  getHighlighter() {
    return this._getTool('[data-hl]');
  }

  getBadgeEl() {
    return this._getTool('[data-badge]');
  }

  getOffsetViewerEl() {
    return this._getTool('[data-offset]');
  }

  getRect() {
    if (!this.rect) {
      this.rect = this.el.getBoundingClientRect();
    }

    return this.rect;
  }

  /**
   * Get rect data, not affected by the canvas zoom
   */
  getOffsetRect() {
    const { el } = this;
    const { scrollTop, scrollLeft } = this.getBody();
    const height = el.offsetHeight;
    const width = el.offsetWidth;

    return {
      top: el.offsetTop,
      left: el.offsetLeft,
      height,
      width,
      scrollTop,
      scrollLeft,
      scrollBottom: scrollTop + height,
      scrollRight: scrollLeft + width,
    };
  }

  _getTool(name: string) {
    const { tools } = this;
    const toolsEl = this.getToolsEl();

    if (!tools[name]) {
      tools[name] = toolsEl.querySelector(name) as HTMLElement;
    }

    return tools[name];
  }

  remove(...args: any) {
    const wrp = this.wrapper;
    this._toggleEffects(false);
    this.tools = {};
    wrp && wrp.remove();
    View.prototype.remove.apply(this, args);
    return this;
  }

  startAutoscroll() {
    this.lastMaxHeight = this.getWrapper().offsetHeight - this.el.offsetHeight;

    // By detaching those from the stack avoid browsers lags
    // Noticeable with "fast" drag of blocks
    setTimeout(() => {
      this._toggleAutoscrollFx(true);
      requestAnimationFrame(this.autoscroll);
    }, 0);
  }

  autoscroll() {
    if (this.dragging) {
      const { lastClientY } = this;
      const canvas = this.em.get('Canvas');
      const win = this.getWindow();
      const actualTop = win.pageYOffset;
      const clientY = lastClientY || 0;
      const limitTop = canvas.getConfig().autoscrollLimit;
      const limitBottom = this.getRect().height - limitTop;
      let nextTop = actualTop;

      if (clientY < limitTop) {
        nextTop -= limitTop - clientY;
      }

      if (clientY > limitBottom) {
        nextTop += clientY - limitBottom;
      }

      if (
        !isUndefined(lastClientY) && // Fixes #3134
        nextTop !== actualTop &&
        nextTop > 0 &&
        nextTop < this.lastMaxHeight
      ) {
        const toolsEl = this.getGlobalToolsEl();
        toolsEl.style.opacity = 0;
        this.showGlobalTools();
        win.scrollTo(0, nextTop);
      }

      requestAnimationFrame(this.autoscroll);
    }
  }

  updateClientY(ev: Event) {
    ev.preventDefault();
    this.lastClientY = getPointerEvent(ev).clientY * this.em.getZoomDecimal();
  }

  showGlobalTools() {
    this.getGlobalToolsEl().style.opacity = '';
  }

  stopAutoscroll() {
    this.dragging && this._toggleAutoscrollFx(false);
  }

  _toggleAutoscrollFx(enable: boolean) {
    this.dragging = enable;
    const win = this.getWindow();
    const method = enable ? 'on' : 'off';
    const mt = { on, off };
    mt[method](win, 'mousemove dragover', this.updateClientY);
    mt[method](win, 'mouseup', this.stopAutoscroll);
  }

  render() {
    const { $el, ppfx } = this;
    $el.attr({ class: `${ppfx}frame` });
    this.renderScripts();
    return this;
  }

  renderScripts() {
    const { el, model, em } = this;
    const evLoad = 'frame:load';
    const evOpts = { el, model, view: this };
    const canvas = this.getCanvasModel();
    const appendScript = (scripts: any[]) => {
      if (scripts.length > 0) {
        const src = scripts.shift();
        const scriptEl = createEl('script', {
          type: 'text/javascript',
          ...(isString(src) ? { src } : src),
        });
        scriptEl.onerror = scriptEl.onload = appendScript.bind(null, scripts);
        el.contentDocument?.head.appendChild(scriptEl);
      } else {
        this.renderBody();
        em && em.trigger(evLoad, evOpts);
      }
    };

    el.onload = () => {
      const { frameContent } = this.config;
      if (frameContent) {
        const doc = this.getDoc();
        doc.open();
        doc.write(frameContent);
        doc.close();
      }
      em && em.trigger(`${evLoad}:before`, evOpts);
      appendScript([...canvas.get('scripts')]);
    };
  }

  renderStyles(opts: any = {}) {
    const head = this.getHead();
    const canvas = this.getCanvasModel();
    const normalize = (stls: any[]) =>
      stls.map(href => ({
        tag: 'link',
        attributes: {
          rel: 'stylesheet',
          ...(isString(href) ? { href } : href),
        },
      }));
    const prevStyles = normalize(opts.prev || canvas.previous('styles'));
    const styles = normalize(canvas.get('styles'));
    const toRemove: any[] = [];
    const toAdd: any[] = [];
    const find = (items: any[], stack: any[], res: any[]) => {
      items.forEach(item => {
        const { href } = item.attributes;
        const has = stack.some(s => s.attributes.href === href);
        !has && res.push(item);
      });
    };
    find(styles, prevStyles, toAdd);
    find(prevStyles, styles, toRemove);
    toRemove.forEach(stl => {
      const el = head.querySelector(`link[href="${stl.attributes.href}"]`);
      el?.parentNode?.removeChild(el);
    });
    appendVNodes(head, toAdd);
  }

  renderBody() {
    const { config, em, model, ppfx } = this;
    const doc = this.getDoc();
    const body = this.getBody();
    const win = this.getWindow();
    const conf = em.config;
    //@ts-ignore This could be used inside component-related scripts to check if the
    // script is executed inside the editor.
    win._isEditor = true;
    this.renderStyles({ prev: [] });

    const colorWarn = '#ffca6f';

    append(
      body,
      `<style>
      ${conf.baseCss || config.frameStyle || ''}

      [data-gjs-type="wrapper"] {
        min-height: 100vh;
        padding-top: 0.001em;
      }

      .${ppfx}dashed *[data-gjs-highlightable] {
        outline: 1px dashed rgba(170,170,170,0.7);
        outline-offset: -10px;
      }

      *[data-row-highlightable] {
        outline: 1px dashed rgba(170,170,170,0.7);
        outline-offset: -10px;
      }

      *[data-col-highlightable] {
        outline: 1px dashed rgba(170,170,170,0.7);
        outline-offset: -10px;
      }

      .${ppfx}selected {
        border: 2px solid #3b97e3 !important;
        // outline-offset: -2px !important;
      }

      .${ppfx}invisible {
        background-color: transparent;
        background-image: url("data:image/svg+xml,%3Csvg width='90' height='72' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M45 56.25c-10.667 0-19.301-8.256-20.096-18.719l-14.751-11.4c-1.94 2.433-3.724 5.005-5.164 7.817a4.55 4.55 0 0 0 0 4.105C12.615 52.933 27.713 63 45 63c3.785 0 7.435-.563 10.954-1.471l-7.297-5.646A20.27 20.27 0 0 1 45 56.25Zm44.13 8.17L73.584 52.405A46.581 46.581 0 0 0 85.01 38.052a4.549 4.549 0 0 0 0-4.105C77.384 19.067 62.286 9 45 9a43.334 43.334 0 0 0-20.717 5.302L6.393.474A2.25 2.25 0 0 0 3.233.87L.474 4.423A2.25 2.25 0 0 0 .869 7.58l82.738 63.946a2.25 2.25 0 0 0 3.158-.395l2.762-3.554a2.25 2.25 0 0 0-.397-3.157ZM63.295 44.452l-5.527-4.273A13.323 13.323 0 0 0 41.44 23.033 6.701 6.701 0 0 1 42.75 27a6.558 6.558 0 0 1-.217 1.406l-10.351-8A20.013 20.013 0 0 1 45 15.75 20.239 20.239 0 0 1 65.25 36c0 3.042-.744 5.877-1.955 8.453v-.002Z' fill='%23B3B6CB'/%3E%3C/svg%3E"),repeating-linear-gradient(135deg,rgba(0,0,0,.24) 0,rgba(0,0,0,.24) 1px,transparent 0,transparent 50%);
        background-repeat: no-repeat,repeat;
        background-size: 90px 72px,10px 10px;
        background-position: 50% 50%;
        z-index: 2;
        cursor: not-allowed;
      }

      .${ppfx}selected-parent {
        outline: 2px solid ${colorWarn} !important
      }

      .${ppfx}no-select {
        user-select: none;
        -webkit-user-select:none;
        -moz-user-select: none;
      }

      .${ppfx}freezed {
        opacity: 0.5;
        pointer-events: none;
      }

      .${ppfx}no-pointer {
        pointer-events: none;
      }

      .${ppfx}plh-image {
        background: #f5f5f5;
        border: none;
        height: 100px;
        width: 100px;
        display: block;
        outline: 3px solid #ffca6f;
        cursor: pointer;
        outline-offset: -2px
      }

      .${ppfx}grabbing {
        cursor: grabbing;
        cursor: -webkit-grabbing;
      }

      .${ppfx}is__grabbing {
        overflow-x: hidden;
      }

      .${ppfx}is__grabbing,
      .${ppfx}is__grabbing * {
        cursor: grabbing !important;
      }

      ${conf.canvasCss || ''}
      ${conf.protectedCss || ''}
    </style>`
    );
    const component = model.getComponent();
    const { view } = em.get('DomComponents').getType('wrapper');
    this.wrapper = new view({
      model: component,
      config: {
        ...component.config,
        em,
        frameView: this,
      },
    }).render();
    append(body, this.wrapper?.el);
    append(
      body,
      new CssRulesView({
        collection: model.getStyles(),
        //@ts-ignore
        config: {
          ...em.get('CssComposer').getConfig(),
          frameView: this,
        },
      }).render().el
    );
    append(body, this.getJsContainer());
    // em.trigger('loaded'); // I need to manage only the first one maybe
    //this.updateOffset(); // TOFIX (check if I need it)

    // Avoid some default behaviours
    //@ts-ignore
    on(body, 'click', ev => ev && ev.target?.tagName == 'A' && ev.preventDefault());
    on(body, 'submit', ev => ev && ev.preventDefault());

    // When the iframe is focused the event dispatcher is not the same so
    // I need to delegate all events to the parent document
    [
      { event: 'keydown keyup keypress', class: 'KeyboardEvent' },
      { event: 'mousedown mousemove mouseup', class: 'MouseEvent' },
      { event: 'pointerdown pointermove pointerup', class: 'PointerEvent' },
      { event: 'wheel', class: 'WheelEvent' },
    ].forEach(obj =>
      obj.event.split(' ').forEach(event => {
        doc.addEventListener(event, ev => this.el.dispatchEvent(createCustomEvent(ev, obj.class)));
      })
    );

    this._toggleEffects(true);
    this.droppable = hasDnd(em) && new Droppable(em, this.wrapper?.el);
    model.trigger('loaded');
  }

  _toggleEffects(enable: boolean) {
    const method = enable ? on : off;
    const win = this.getWindow();
    win && method(win, `${motionsEv} resize`, this._emitUpdate);
  }

  _emitUpdate() {
    this.model._emitUpdated();
  }
}
