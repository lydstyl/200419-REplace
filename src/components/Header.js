const Header = () => {
  const header = document.createElement('header');

  header.innerHTML = `
    <h1>REplacer</h1>
    <p>Permet de programmer de mutliples remplacements, avec ou sans expression régulière, d'un texte original.</p>
    <p>Cette web app est réalisé à partir d'un boilerplate utilisant le bundler Parcel pour un workflow en vanilla JS.</p>
`;
  return header;
};

export default Header;
