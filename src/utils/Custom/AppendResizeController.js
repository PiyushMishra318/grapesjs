export default (opts, container, pfx, width, prevWidth, nextWidth, elem) => {
  const rowContr = document.createElement('div');

  const addColumn = document.createElement('div');
  addColumn.className = `${pfx}add-column`;
  addColumn.style =
    'color: #3b97e3; position: absolute; top: 0; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center;';
  addColumn.innerHTML =
    '<div style="display: inline-block; font-weight: 500; font-size: 14px; line-height: 16px; color: #36f; text-align: center; text-decoration: none; vertical-align: middle; cursor: pointer; user-select: none; background-color: transparent; border: 0; padding: 7px 16px; border-radius: 7.5px; z-index: 0; transition: all 150ms ease-in-out;color: #36f; box-shadow: 0 0 0 1px rgb(51 102 255 / 15%);pointer-events:all;padding: 7px; border-radius: 30px; transition: color .2s ease-in,background-color .2s ease-in; overflow: hidden;"><i class=\'fa fa-plus\'></i></div>';

  const styleElem = document.createElement('style');
  styleElem.innerHTML = `
        .gjs-resize-controller {
              background: grey;
              pointer-events: all;
              display: flex;
              position: absolute;
              z-index: 10;
              visibility: visible;
              top: -60px;
              padding: 6px;
              left: -66px;
              align-items: center;
        }
      `;

  rowContr.className = `${pfx}resize-controller`;

  rowContr.innerHTML = `
      <div class="${pfx}resize-controller-sec">
        <input class="${pfx}resize-controller-input input-a" type="number" value="${prevWidth ? prevWidth : width}" />
    <div class="${pfx}resize-input-unit">%</div>
      </div>
       &nbsp;/&nbsp;
       <div class="${pfx}resize-controller-sec">
        <input class="${pfx}resize-controller-input input-b" type="number" value="${
    prevWidth ? width : nextWidth ? nextWidth : width
  }" />
    <div class="${pfx}resize-input-unit">%</div>

       </div>
       <style>
          .gjs-resize-input-unit {
            width: fit-content;
            top: 4px;
            color: black;
            right: 2px;
            position: absolute;
          }
          .gjs-resize-controller-sec {
              width: 60px;
              position:relative;
          }
          .gjs-resize-controller-input {
              width: 100%;
              padding-right: 10px;
          }
       </style>
       `;

  container.appendChild(rowContr);
  container.appendChild(styleElem);

  if (!(elem && elem.innerHTML)) {
    container.appendChild(addColumn);

    container.querySelector(`.${pfx}add-column > div`).onclick = () => {
      opts.editor.em.get('Commands').run('core:switch-block');
    };
  }

  const firstIn = rowContr.querySelectorAll(`.${pfx}resize-controller-input`)[0];

  const secondIn = rowContr.querySelectorAll(`.${pfx}resize-controller-input`)[1];

  firstIn.onchange = e => {
    const value = parseFloat(e.target.value);
    const update = prevWidth ? 'prev' : 'curr';
    const curr = prevWidth ? prevWidth : width;
    // const diff = curr - value;

    if (update === 'prev') {
      elem.previousSibling.style['width'] = value + '%';
      // elem.style["width"] = width + diff + "%";
      // secondIn.value = width + diff;
    } else {
      elem.style['width'] = value + '%';
      // elem.nextSibling.style["width"] = prevWidth + diff + "%";
      // secondIn.value = nextWidth + diff;
    }
  };

  secondIn.onchange = e => {
    const value = parseFloat(e.target.value);
    const update = prevWidth ? 'current' : 'next' ? 'next' : 'current';
    const curr = prevWidth ? width : nextWidth ? nextWidth : width;
    // const diff = curr - value;
    if (update === 'next') {
      elem.nextSibling.style['width'] = value + '%';
      // elem.style["width"] = width + diff + "%";
      // firstIn.value = width + diff;
    } else {
      elem.style['width'] = value + '%';
      // elem.previousSibling.style["width"] = nextWidth + diff + "%";
      // firstIn.value = nextWidth + diff;
    }
  };

  if (rowContr.getBoundingClientRect().left < 375) {
    styleElem.innerHTML = `
          .gjs-resize-controller {
              background: grey;
              pointer-events: all;
              display: flex;
              position: absolute;
              z-index: 10;
              visibility: visible;
              top: -60px;
              padding: 6px;
              left: unset;
              right: -66px;
          }
        `;
  }
};
