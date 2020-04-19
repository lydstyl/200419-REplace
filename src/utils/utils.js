export const getState = () => {
  let state;
  if (!localStorage.getItem('state')) {
    state = {
      originalText:
        "Salut, je suis un texte qui va être remplacé plusieurs fois et je vais t'aider à trouver le bon algo...",
      replacements: [
        { id: '1', re: 'Salut', substitute: 'Bonjour' },
        { id: '2', re: '(text)|(algo)', substitute: 'Schtroumpf' },
      ],
    };

    const initialState = JSON.stringify(state);

    localStorage.setItem('state', initialState);

    return state;
  } else {
    state = JSON.parse(localStorage.getItem('state'));

    return { ...state };
  }
};
