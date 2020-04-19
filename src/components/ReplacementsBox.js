import Replacements from './Replacements';
import Result from './Result';

const ReplacementsBox = () => {
  const replacementsBox = document.createElement('div');
  replacementsBox.setAttribute('class', 'replacements-box');

  replacementsBox.appendChild(Replacements);
  replacementsBox.appendChild(Result());

  return replacementsBox;
};

export default ReplacementsBox;
