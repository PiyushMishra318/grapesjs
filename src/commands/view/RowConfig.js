import { isArray } from 'underscore';

export default {
  run(ed, s, opts = {}) {
    // if (!ed.Canvas.hasFocus()) return;

    let components = opts.component || ed.getSelectedAll();
    components = isArray(components) ? [...components] : [components];
    const dims = Array.from(components[0].view.$el[0].children).map(child => {
      return (Math.round((child.computedStyleMap().get('width').value / 100) * 12) * 10) / 10;
    });

    activateRowModal(dims, ed.Canvas.canvasView);

    return components;
  },
};

const activateRowModal = (dims, canvasView) => {
  const { addLayout, addRowModal } = canvasView;
  addRowModal.classList.add('edit-curr-row');
  addLayout.click(dims);
  addRowModal.querySelector('.add-row-form-field').value = dims.join('+');
};
