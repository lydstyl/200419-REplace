const OriginalText = () => {
  const label = document.createElement('label');
  const labelTextNode = document.createTextNode('Votre texte original:');
  label.appendChild(labelTextNode);

  const textarea = document.createElement('textarea');
  const textNode = document.createTextNode(
    "Salut, je suis un texte qui va être remplacé plusieurs fois et je vais t'aider à trouver le bon algo...."
  );
  textarea.appendChild(textNode);
  textarea.addEventListener('change', (e) => {
    console.log(e.target.value);
  });

  const originalText = document.createElement('div');
  originalText.setAttribute('id', 'original-text');

  originalText.appendChild(label);
  originalText.appendChild(textarea);

  return originalText;
};

export default OriginalText;
