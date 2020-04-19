import { getState, setState } from '../utils/utils';

const state = getState();
let { replacements } = state;
console.log('sss', state);

const List = document.createElement('ul');

replacements.forEach(({ id, re, substitute }) => {
  const Li = document.createElement('li');
  Li.setAttribute('id', id);

  const Button = document.createElement('button');
  const textNode = document.createTextNode('X');
  Button.appendChild(textNode);
  Button.addEventListener('click', (e) => {
    // remove the li in the state
    const state = getState();

    state.replacements = state.replacements.filter(
      (replacement) => replacement.id !== e.target.parentNode.id
    );

    console.log('xxx', state);

    setState(state);

    // remove the li in the DOM
    e.target.parentNode.parentNode.removeChild(e.target.parentNode);
  });

  Li.appendChild(Button);
  const liTextNode = document.createTextNode(`${re} --> ${substitute}`);
  Li.appendChild(liTextNode);

  List.appendChild(Li);
});

export default List;
