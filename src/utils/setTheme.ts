/* eslint-disable */

function setTheme() {
  /** @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#feature-detecting_localstorage MDN} */
  function getTheme() {
    try {
      return localStorage && localStorage.theme;
    } catch (e) {
      return false;
    }
  }

  var classList = document.documentElement.classList;
  var theme = getTheme();

  if (theme) {
    if (theme === 'dark') {
      classList.add('dark');
    } else {
      classList.remove('dark');
    }
  } else if (matchMedia('(prefers-color-scheme: dark)').matches) {
    classList.add('dark');
  } else {
    classList.remove('dark');
  }
}

export default setTheme;
