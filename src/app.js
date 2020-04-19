// import User from './components/User';
import Header from './components/Header';
import OriginalText from './components/OriginalText';
import ReplacementsBox from './components/ReplacementsBox';
import './scss/app.scss';

const app = () => {
  const appParts = [Header, OriginalText, ReplacementsBox];

  const container = document.querySelector('.container');

  appParts.forEach((part) => {
    container.appendChild(part());
  });
};

// Load app
app();

window.addEventListener('storage', function (e) {
  console.log(e.key, e.oldValue, e.newValue, e.url, e.storageArea);
});
