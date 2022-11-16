const options = [
  {
    dimension: '12',
    svg: `<svg
        xmlns="http://www.w3.org/2000/svg"
        width="51"
        height="17"
        fill="none"
      >
        <rect width="50.78" height="16.927" fillOpacity=".3" rx="2"></rect>
      </svg>`,
  },
  {
    dimension: '6+6',
    svg: `<svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="17"
        fill="none"
      >
        <rect width="23.79" height="16.221" fillOpacity=".3" rx="2"></rect>
        <rect width="23.79" height="16.221" fillOpacity=".7" rx="2"></rect>
        <rect
          width="23.79"
          height="16.221"
          x="25.681"
          fillOpacity=".3"
          rx="2"
        ></rect>
      </svg>`,
  },
  {
    dimension: '4+4+4',
    svg: `<svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="17"
        fill="none"
      >
        <rect width="15.139" height="16.221" fillOpacity=".3" rx="2"></rect>
        <rect
          width="15.139"
          height="16.221"
          x="17.302"
          fillOpacity=".3"
          rx="2"
        ></rect>
        <rect
          width="15.139"
          height="16.221"
          x="17.302"
          fillOpacity=".7"
          rx="2"
        ></rect>
        <rect
          width="15.139"
          height="16.221"
          x="34.605"
          fillOpacity=".3"
          rx="2"
        ></rect>
      </svg>`,
  },
  {
    dimension: '3+3+3+3',
    svg: `<svg
        xmlns="http://www.w3.org/2000/svg"
        width="51"
        height="17"
        fill="none"
      >
        <rect width="10.814" height="16.221" fillOpacity=".3" rx="2"></rect>
        <rect
          width="10.814"
          height="16.221"
          x="12.974"
          fillOpacity=".3"
          rx="2"
        ></rect>
        <rect
          width="10.814"
          height="16.221"
          x="12.974"
          fillOpacity=".7"
          rx="2"
        ></rect>
        <rect
          width="10.814"
          height="16.221"
          x="25.95"
          fillOpacity=".3"
          rx="2"
        ></rect>
        <rect
          width="11.354"
          height="16.221"
          x="38.929"
          fillOpacity=".3"
          rx="2"
        ></rect>
        <rect
          width="11.354"
          height="16.221"
          x="38.929"
          fillOpacity=".7"
          rx="2"
        ></rect>
      </svg>`,
  },
  {
    dimension: '4+8',
    svg: `<svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="17"
        fill="none"
      >
        <rect width="15.139" height="16.221" fillOpacity=".3" rx="2"></rect>
        <rect width="33" height="16" x="17" fillOpacity=".3" rx="2"></rect>
        <rect width="33" height="16" x="17" fillOpacity=".7" rx="2"></rect>
      </svg>`,
  },
  {
    dimension: '3+9',
    svg: `<svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="17"
        fill="none"
      >
        <rect width="10.814" height="16.221" fillOpacity=".7" rx="2"></rect>
        <rect width="37" height="16" x="13" fillOpacity=".3" rx="2"></rect>
      </svg>`,
  },
  {
    dimension: '3+6+3',
    svg: `<svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="17"
        fill="none"
      >
        <rect width="10.543" height="16.221" fillOpacity=".3" rx="2"></rect>
        <rect
          width="11.084"
          height="16.221"
          x="38.659"
          fillOpacity=".3"
          rx="2"
        ></rect>
        <rect
          width="23.79"
          height="16.221"
          x="12.704"
          fillOpacity=".7"
          rx="2"
        ></rect>
      </svg>`,
  },
  {
    dimension: '2+6+4',
    svg: `<svg
        xmlns="http://www.w3.org/2000/svg"
        width="51"
        height="17"
        fill="none"
      >
        <rect
          width="6.488"
          height="16.221"
          x=".143"
          fillOpacity=".7"
          rx="2"
        ></rect>
        <rect
          width="23.79"
          height="16.221"
          x="9"
          fillOpacity=".3"
          rx="2"
        ></rect>
        <rect
          width="15.139"
          height="16.221"
          x="35"
          fillOpacity=".7"
          rx="2"
        ></rect>
      </svg>`,
  },
  {
    dimension: '2+10',
    svg: `<svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="17"
        fill="none"
      >
        <rect
          width="6.488"
          height="16.221"
          x=".143"
          fillOpacity=".3"
          rx="2"
        ></rect>
        <rect width="41" height="16" x="9" fillOpacity=".7" rx="2"></rect>
      </svg>`,
  },
  {
    dimension: '2+3+7',
    svg: `<svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="17"
        fill="none"
      >
        <rect
          width="6.488"
          height="16.221"
          x=".143"
          fillOpacity=".7"
          rx="2"
        ></rect>
        <rect width="10" height="16.221" x="8.7" fillOpacity=".3" rx="2"></rect>
        <rect
          width="28.927"
          height="16.221"
          x="20.653"
          fillOpacity=".7"
          rx="2"
        ></rect>
      </svg>`,
  },
];

export default function (addRowModal, em) {
  addRowModal.style.display = 'block';
  addRowModal.style.zIndex = 10;

  addRowModal.innerHTML = `
    <div class="add-row-modal-main">
      <div class="add-row-modal-grid-row">
      ${options
        .map(
          (item, i) => `<div class="add-row-modal-grid-col" data-gjs-dims="${item.dimension}">
          <div class="add-row-modal-grid-item">
            <div class="add-row-modal-grid-preview">
              ${item.svg}
            </div>
            <div class="add-row-modal-grid-col-item-name">${item.dimension}</div>
          </div>
        </div>`
        )
        .join('')}
      </div>
    </div>
    <div class="add-row-modal-insert-line">or, Custom Columns</div>
    <p class="add-row-form-error" style="display:none">Invalid layout format. Please follow this pattern: 4+3+4</p>
    <form class="add-row-form">
      <input class="add-row-form-field" type="text" value="">
      <button class="add-row-form-submit" type="submit">Generate</button>
    </form>
    <span class="add-row-modal-close-button">
      <span class="close-btn-icon">
        <i class="fa fa-times"></i>
      </span>
    </span>
  <style>
    .gjs-add-row-modal {
      position: absolute;
      background: #fff;
      box-shadow: 0 11px 15px rgb(0 0 0 / 20%);
      padding: 25px;
      border-radius: 5px;
      width: 450px;
      
    }
    .add-row-modal-main {
      --builder-gutter-x: 8px;
      --builder-gutter-y: 0;
      display: flex;
      flex-wrap: wrap;
      margin-top: calc(var(--builder-gutter-y) * -1);
      margin-right: calc(var(--builder-gutter-x)/ -2);
      margin-left: calc(var(--builder-gutter-x)/ -2);
    }
    .add-row-modal-close-button {
      position: absolute;
      top: 5px;
      right: 5px;
      cursor: pointer;
      color: #4e5487 !important;
      width: 16px;
      height: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(115, 119, 155, .2);
      border-radius: 20px;
      pointer-events: all;
      transition: background-color .2s ease-in;
      box-sizing: border-box;
      flex-shrink: 0;
      /* width: 100%; */
      
      padding-right: calc(var(--builder-gutter-x)/ 2);
      padding-left: calc(var(--builder-gutter-x)/ 2);
      margin-top: var(--builder-gutter-y);
    }
    .close-btn-icon {
      display: flex;
    }
    .add-row-modal-grid-row {
      display: flex;
      flex-wrap: wrap;
      margin: -8px;
      width: 100%;
    }
    .add-row-modal-grid-col {
      flex: 0 0 20%;
      max-width: 20%;
      position: relative;
      width: 100%;
      min-height: 1px;
      padding: 8px;
    }
    .add-row-modal-grid-item {
      cursor: pointer;
    }
    .add-row-modal-grid-preview {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 46px;
      background-color: #f0f0f5;
      border: 1px solid #f0f0f5;
      border-radius: 7px;
      transition: background-color .4s, border-color .4s, box-shadow .4s;
    }
    .add-row-modal-grid-col-item-name {
      font-size: 12px;
      display: block;
      margin-top: 5px;
      text-align: center;
      color: rgba(2, 17, 83, .7);
      transition: color .4s;
    }
    .add-row-modal-grid-preview svg {
      fill: rgba(2, 17, 83, .7);
      transition: fill .4s;
    }
    .add-row-modal-insert-line {
      font-size: 12px;
      line-height: 18px;
      color: #4e5487;
      padding-top: 16px !important;
      padding-bottom: 16px !important;
      text-align: center !important;
      position: relative;
    }
    .add-row-modal-insert-line:before, .add-row-modal-insert-line:after {
      content: "";
      position: absolute;
      width: 124px;
      height: 1px;
      background: #4e5487;
      top: 50%;
      transform: translateY(-50%);
      opacity: .3;
    }
    .add-row-modal-insert-line:before {
      left: -20px;
    }
    .add-row-modal-insert-line:after {
      right: -23px;
    }
    .add-row-form {
      display: flex !important;
    }
    .add-row-form-field {
      display: block !important;
      width: 100% !important;
      height: auto !important;
      padding: 5px 12px !important;
      font-size: 14px !important;
      font-weight: 400 !important;
      line-height: 1.3 !important;
      color: #021153 !important;
      background-color: #fff !important;
      background-clip: padding-box;
      border: 1px solid rgba(121, 127, 167, .3) !important;
      appearance: none;
      box-shadow: 0 1px 1px rgba(20, 50, 80, .1) !important;
      border-radius: 5px !important;
      transition: border-color 150ms ease-in, box-shadow 150ms ease-in;
      margin: 0;
    }
    .add-row-form-submit {
      display: inline-block;
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      color: #36f;
      text-align: center;
      text-decoration: none;
      vertical-align: middle;
      cursor: pointer;
      user-select: none;
      background-color: transparent;
      border: 0;
      padding: 7px 16px;
      border-radius: 7.5px;
      z-index: 0;
      transition: all 150ms ease-in-out;
      color: #fff;
      position: relative;
      margin-left: 16px !important;
      cursor: pointer;
      background: linear-gradient(180deg, #7497ff -46.87%, #688cfd -7.92%, #567dfa 49.16%, #3e69f6 127.08%)
    }
    .add-row-form-submit:before {
      background: linear-gradient(180deg, #7497ff -46.87%, #688cfd -7.92%, #567dfa 49.16%, #3e69f6 127.08%);
      box-shadow: 0 2px 4px rgb(97 135 252 / 30%);
    }
    .add-row-form-submit:after {
      background: linear-gradient(180deg, #7f9efa -46.87%, #7191fc -7.92%, #5f83f8 49.16%, #466ff7 127.08%);
      box-shadow: 0 2px 4px rgb(97 135 252 / 30%);
    }
    .add-row-form-error {
      font-size: 14px;
      line-height: 18px;
      margin-top: 0;
      margin-bottom: 1rem;
      text-align: center !important;
      color: #df0707 !important;
    }
  </style>
  `;
  addRowModal.querySelector('.add-row-modal-close-button').onclick = el => {
    addRowModal.style.display = 'none';
    addRowModal.style.zIndex = 0;
  };

  addRowModal.querySelectorAll('.add-row-modal-grid-col').forEach(elem => {
    elem.onclick = function (e) {
      const dims = elem.getAttribute('data-gjs-dims');
      Array.from(addRowModal.classList).includes('edit-curr-row')
        ? editRow(
            dims.split('+').map(item => parseInt(item)),
            em.getSelected()
          )
        : addRow(dims.split('+').map(item => parseInt(item)));
      addRowModal.style.display = 'none';
      addRowModal.style.zIndex = 0;
    };
  });

  const errMessageEl = addRowModal.querySelector('.add-row-form-error');

  addRowModal.querySelector('.add-row-form').onsubmit = e => {
    e.preventDefault();
    errMessageEl.style.display = 'none';

    const rowTemplate = addRowModal.querySelector('.add-row-form-field').value;

    if (/([0-9])*?\+([0-9])/g.test(rowTemplate)) {
      let dims = rowTemplate.split('+');
      if (dims[0] === '') dims.shift();
      if (dims[dims.length - 1] === '') dims.pop();
      dims = dims.map(dim => parseInt(dim.replace(/ /g, '')));
      Array.from(addRowModal.classList).includes('edit-curr-row') ? editRow(dims, em.getSelected()) : addRow(dims);
    } else errMessageEl.style.display = 'block';
    addRowModal.style.display = 'none';
    addRowModal.style.zIndex = 0;
  };

  const generateRowColumnsBlock = dims => {
    const container = `<div  class='gjs-row' data-gjs-droppable='.gjs-cell'  data-gjs-name='Row'>${dims
      .map(dim => {
        return `<div class='gjs-cell-${dim}' data-col-highlightable data-gjs-draggable='.gjs-row' data-gjs-resizable='{"tl":0,"tc":0,"tr":0,"cl":0,"cr":1,"bl":0,"br":0,"minDim":1,"bc":0,"currentUnit":1,"step":0.2,"unitWidth":"%","unitHeight":"%"}' data-gjs-name='Cell'></div>`;
      })
      .join('')}</div>
      <style>
        .gjs-row {
          padding-top: 20px;
          padding-bottom: 20px;
          width: 100%;
          position: relative;
          margin-right: auto;
          margin-left: auto;
          display: flex;
          flex-wrap: wrap;
          height: 100%;
          min-height:100px;
        }
        .gjs-cell-1 {
          width: ${(1 / 12) * 100}%;
          min-height:100px;
          display: flex;
          flex-wrap: wrap;
          position:relative
        }
        .gjs-cell-2 {
          width: ${(2 / 12) * 100}%;
          min-height:100px;
          display: flex;
          flex-wrap: wrap;
          position:relative
        }
        .gjs-cell-3 {
          width: ${(3 / 12) * 100}%;
          min-height:100px;
          display: flex;
          flex-wrap: wrap;
          position:relative
        }
        .gjs-cell-4 {
          width: ${(4 / 12) * 100}%;
          min-height:100px;
          display: flex;
          flex-wrap: wrap;
          position:relative
        }
        .gjs-cell-5 {
          width: ${(5 / 12) * 100}%;
          min-height:100px;
          display: flex;
          flex-wrap: wrap;
          position:relative
        }
        .gjs-cell-6 {
          width: ${(6 / 12) * 100}%;
          min-height:100px;
          display: flex;
          flex-wrap: wrap;
          position:relative
        }.gjs-cell-7 {
          width: ${(7 / 12) * 100}%;
          min-height:100px;
          display: flex;
          flex-wrap: wrap;
          position:relative
        }.gjs-cell-8 {
          width: ${(8 / 12) * 100}%;
          min-height:100px;
          display: flex;
          flex-wrap: wrap;
          position:relative
        }.gjs-cell-9 {
          width: ${(9 / 12) * 100}%;
          min-height:100px;
          display: flex;
          flex-wrap: wrap;
          position:relative
        }.gjs-cell-10 {
          width: ${(10 / 12) * 100}%;
          min-height:100px;
          display: flex;
          flex-wrap: wrap;
          position:relative
        }.gjs-cell-11 {
          width: ${(11 / 12) * 100}%;
          min-height:100px;
          display: flex;
          flex-wrap: wrap;
          position:relative
        }.gjs-cell-12 {
          width: ${(12 / 12) * 100}%;
          min-height:100px;
          display: flex;
          flex-wrap: wrap;
          position:relative
        }
      </style>
      `;
    return container;
  };

  const addRow = dims => {
    const sum = dims.reduce((prev, curr) => prev + curr, 0);
    if (sum > 12) {
      errMessageEl.innerHTML =
        'Invalid format. The total value of the sum of column sizes should be no greater than 12';
      errMessageEl.style.display = 'block';
    }

    const html = generateRowColumnsBlock(dims);

    if (em.getSelected().parent())
      em.getSelected()
        .parent()
        .append(html, { at: em.getSelected().index() + 1 });
    else em.getSelected().append(html, { at: em.getSelected().index() + 1 });
  };

  const editRow = (dims, currelem) => {
    let columns = currelem.components().models;

    const contents = columns.map(column => column.getInnerHTML());

    const html = generateRowColumnsBlock(dims);

    const elem = document.createElement('div');
    elem.innerHTML = html;

    Array.from(elem.querySelector('.gjs-row').children).map((elem, i) => {
      elem.innerHTML = contents[i] || '';
    });

    em.setSelected(currelem.replaceWith(elem.innerHTML));
    addRowModal.classList.remove('edit-curr-row');
  };
}
