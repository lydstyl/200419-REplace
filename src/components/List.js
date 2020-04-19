import { getState } from '../utils/utils';

const state = getState();
let { replacements } = state;
console.log('sss', state);

const List = document.createElement('ul');

replacements.forEach(({ re, substitute }) => {
  const Li = document.createElement('li');

  const Button = document.createElement('button');
  const textNode = document.createTextNode('X');
  Button.appendChild(textNode);
  Button.addEventListener('click', (e) => {
    e.target.parentNode.parentNode.removeChild(e.target.parentNode);
  });

  Li.appendChild(Button);
  const liTextNode = document.createTextNode(`${re} --> ${substitute}`);
  Li.appendChild(liTextNode);

  List.appendChild(Li);
});

export default List;
