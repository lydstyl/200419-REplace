import { getState } from '../utils/utils';
import Replacements from './Replacements';
import Result from './Result';

const ReplacementsBox = () => {
  const replacementsBox = document.createElement('div');
  replacementsBox.setAttribute('class', 'replacements-box');

  replacementsBox.appendChild(Replacements);
  const result = Result();
  replacementsBox.appendChild(result);

  const getResultButton = document.createElement('button');

  getResultButton.addEventListener('click', () => {
    const state = getState();
    const { originalText, replacements } = state;

    let afterReplacements = originalText;

    for (let i = 0; i < replacements.length; i++) {
      const replacement = replacements[i];

      const { re, substitute } = replacement;

      console.log(replacement, new RegExp(re, 'g'), substitute);

      afterReplacements = afterReplacements.replace(
        new RegExp(re, 'g'),
        substitute
      );
    }

    result.innerText = afterReplacements;
    console.log(afterReplacements);
  });

  getResultButton.innerText = 'Voir le résultat';
  replacementsBox.appendChild(getResultButton);

  return replacementsBox;
};

export default ReplacementsBox;
