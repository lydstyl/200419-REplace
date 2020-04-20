import Replacements from './Replacements';
import Result from './Result';

const ReplacementsBox = () => {
  const replacementsBox = document.createElement('div');
  replacementsBox.setAttribute('class', 'replacements-box');

  replacementsBox.appendChild(Replacements);

  const result = Result();
  replacementsBox.appendChild(result);

  return replacementsBox;
};

export default ReplacementsBox;
