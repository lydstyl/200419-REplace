import Form from './Form';
import List from './List';

const replacements = document.createElement('div');
replacements.setAttribute('id', 'replacements');

replacements.appendChild(Form);
replacements.appendChild(List);

export default replacements;
