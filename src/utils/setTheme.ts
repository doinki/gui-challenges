/* eslint-disable */

function setTheme() {
  /** @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#feature-detecting_localstorage MDN} */
  function storageAvailable(type: 'localStorage' | 'sessionStorage') {
    var storage: Storage | undefined;
    try {
      storage = window[type];
      var x = '__storage__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        (e.code === 22 ||
          e.code === 1014 ||
          e.name === 'QuotaExceededError' ||
          e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
        storage?.length !== 0
      );
    }
  }

  var classList = document.documentElement.classList;

  if (storageAvailable('localStorage') && 'theme' in localStorage) {
    if (localStorage.theme === 'dark') {
      classList.add('dark');
    } else {
      classList.remove('dark');
    }
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    classList.add('dark');
  } else {
    classList.remove('dark');
  }
}

export default setTheme;
