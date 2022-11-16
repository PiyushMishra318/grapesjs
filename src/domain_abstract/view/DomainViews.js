import { includes } from 'underscore';
import Backbone from 'backbone';

export default class DomainViews extends Backbone.View {
  // Defines the View per type
  itemsView = '';

  itemType = 'type';

  reuseView = false;

  constructor(opts = {}, config, autoAdd = false) {
    super(opts);
    this.config = config || opts.config || {};
    autoAdd && this.listenTo(this.collection, 'add', this.addTo);
    this.items = [];
  }

  /**
   * Add new model to the collection
   * @param {Model} model
   * @private
   * */
  addTo(model) {
    this.add(model);
  }

  itemViewNotFound(type) {
    const { config, ns } = this;
    const { em } = config;
    const warn = `${ns ? `[${ns}]: ` : ''}'${type}' type not found`;
    em && em.logWarning(warn);
  }

  /**
   * Render new model inside the view
   * @param {Model} model
   * @param {Object} fragment Fragment collection
   * @private
   * */
  add(model, fragment) {
    const { config, reuseView, items, itemsView = {} } = this;
    const inputTypes = [
      'button',
      'checkbox',
      'color',
      'date',
      'datetime-local',
      'email',
      'file',
      'hidden',
      'image',
      'month',
      'number',
      'password',
      'radio',
      'range',
      'reset',
      'search',
      'submit',
      'tel',
      'text',
      'time',
      'url',
      'week',
    ];
    var frag = fragment || null;
    var itemView = this.itemView;
    var typeField = model.get(this.itemType);
    let view;

    if (itemsView[typeField]) {
      itemView = itemsView[typeField];
    } else if (typeField && !itemsView[typeField] && !includes(inputTypes, typeField)) {
      this.itemViewNotFound(typeField);
    }

    if (model.view && reuseView) {
      view = model.view;
    } else {
      view = new itemView({ model, config }, config);
    }

    items && items.push(view);
    const rendered = view.render().el;

    if (frag) frag.appendChild(rendered);
    else this.$el.append(rendered);
  }

  render() {
    var frag = document.createDocumentFragment();
    this.clearItems();
    this.$el.empty();

    if (this.collection.length)
      this.collection.each(function (model) {
        this.add(model, frag);
      }, this);

    if (this.$el[0] && this.$el[0].parentNode && Array.from(this.$el[0].parentNode.classList).includes('gjs-toolbar')) {
      const toolEl = document.createElement('div');
      this.$el[0].style = 'display:flex';
      this.$el.append(toolEl);

      this.$el[0].children[0].style = 'display:none';

      this.$el[0].children[0].append(frag);

      const toggleBtn = document.createElement('div');
      toggleBtn.innerHTML =
        '<div class="gjs-toolbar-item gjs-expand-tlb"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 416c0-17.7 14.3-32 32-32l54.7 0c12.3-28.3 40.5-48 73.3-48s61 19.7 73.3 48L480 384c17.7 0 32 14.3 32 32s-14.3 32-32 32l-246.7 0c-12.3 28.3-40.5 48-73.3 48s-61-19.7-73.3-48L32 448c-17.7 0-32-14.3-32-32zm192 0c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zM384 256c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zm-32-80c32.8 0 61 19.7 73.3 48l54.7 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-54.7 0c-12.3 28.3-40.5 48-73.3 48s-61-19.7-73.3-48L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l246.7 0c12.3-28.3 40.5-48 73.3-48zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32s-14.3-32-32-32zm73.3 0L480 64c17.7 0 32 14.3 32 32s-14.3 32-32 32l-214.7 0c-12.3 28.3-40.5 48-73.3 48s-61-19.7-73.3-48L32 128C14.3 128 0 113.7 0 96S14.3 64 32 64l86.7 0C131 35.7 159.2 16 192 16s61 19.7 73.3 48z"/></svg></div>';
      this.$el.append(toggleBtn);

      let width;
      toggleBtn.querySelector('.gjs-expand-tlb').onclick = () => {
        toggleBtn.querySelector('.gjs-expand-tlb').classList.toggle('gjs-tlb-open');

        if (Array.from(toggleBtn.querySelector('.gjs-expand-tlb').classList).includes('gjs-tlb-open')) {
          this.$el[0].children[0].style.display = 'block';
          width = this.$el[0].children[0].getBoundingClientRect().width;
          this.$el.parent()[0].style.left =
            parseFloat(this.$el.parent()[0].style.left.replace('px', '')) - width + 'px';
        } else {
          this.$el[0].children[0].style.display = 'none';
          this.$el.parent()[0].style.left =
            parseFloat(this.$el.parent()[0].style.left.replace('px', '')) + width + 'px';
        }
      };
    } else this.$el.append(frag);

    this.onRender();
    return this;
  }

  onRender() {}

  onRemoveBefore() {}
  onRemove() {}

  remove(opts = {}) {
    const { items } = this;
    this.onRemoveBefore(items, opts);
    this.clearItems();
    Backbone.View.prototype.remove.apply(this, arguments);
    this.onRemove(items, opts);
  }

  clearItems() {
    const items = this.items || [];
    // TODO Traits do not update the target anymore
    // items.forEach(item => item.remove());
    // this.items = [];
  }
}

// Default view
DomainViews.prototype.itemView = '';
