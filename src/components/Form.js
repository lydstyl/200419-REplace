import { getState, setState } from '../utils/utils';

const Form = document.createElement('form');

const RE = document.createElement('input');
RE.setAttribute('name', 're');
Form.appendChild(RE);

const With = document.createElement('input');
RE.setAttribute('name', 'with');
Form.appendChild(With);

const Add = document.createElement('input');
Add.setAttribute('value', '+');
Add.setAttribute('type', 'button');

Add.addEventListener('click', () => {
  const id = Math.random() * 10000000000000000000 + '';
  const re = RE.value;
  const substitute = With.value;
  const replacement = {
    id,
    re,
    substitute,
  };

  const state = getState();
  state.replacements.push(replacement);

  localStorage.setItem('state', JSON.stringify(state));

  const li = document.createElement('li');
  li.setAttribute('id', id);
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

  li.appendChild(Button);
  const liTxt = document.createTextNode(`${re} --> ${substitute}`);
  li.appendChild(liTxt);

  const ul = document.querySelector('#replacements ul');
  ul.appendChild(li);
});

Form.appendChild(Add);

export default Form;
