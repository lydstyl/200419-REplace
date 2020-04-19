import { getState } from '../utils/utils';

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
  const replacement = {
    id: Math.random() * 10000000000000000000 + '',
    re: RE.value,
    substitute: With.value,
  };

  console.log(replacement);

  const state = getState();
  state.replacements.push(replacement);

  localStorage.setItem('state', JSON.stringify(state));
});

Form.appendChild(Add);

export default Form;
