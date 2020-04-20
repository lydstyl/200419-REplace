import { getState } from '../utils/utils';

import Form from './Form';
import List from './List';

const replacements = document.createElement('div');
replacements.setAttribute('id', 'replacements');

replacements.appendChild(Form);
replacements.appendChild(List);

const getResultButton = document.createElement('button');

getResultButton.addEventListener('click', () => {
  const state = getState();
  const { originalText, replacements } = state;

  let afterReplacements = originalText;

  for (let i = 0; i < replacements.length; i++) {
    const replacement = replacements[i];

    const { re, substitute } = replacement;

    afterReplacements = afterReplacements.replace(
      new RegExp(re, 'g'),
      substitute
    );
  }

  result.innerText = afterReplacements;
  console.log(afterReplacements);
});

getResultButton.innerText = 'Voir le résultat';
replacements.appendChild(getResultButton);

export default replacements;
