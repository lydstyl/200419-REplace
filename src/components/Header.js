const Header = () => {
  const header = document.createElement('header');

  header.innerHTML = `
    <h1>REplacer</h1>
    <p>De mutliples remplacements via les expressions régulières.</p>
`;
  return header;
};

export default Header;
