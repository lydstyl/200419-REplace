const OriginalText = () => {
  let state = localStorage.getItem('state');
  state = JSON.parse(state);

  const label = document.createElement('label');
  const labelTextNode = document.createTextNode('Votre texte original:');
  label.appendChild(labelTextNode);

  const textarea = document.createElement('textarea');
  const textNode = document.createTextNode(state.originalText);
  textarea.appendChild(textNode);
  textarea.addEventListener('change', (e) => {
    let state = localStorage.getItem('state');
    state = JSON.parse(state);

    let newState = { ...state, originalText: e.target.value };
    newState = JSON.stringify(newState);

    localStorage.setItem('state', newState);
  });

  const originalText = document.createElement('div');
  originalText.setAttribute('id', 'original-text');

  originalText.appendChild(label);
  originalText.appendChild(textarea);

  return originalText;
};

export default OriginalText;
