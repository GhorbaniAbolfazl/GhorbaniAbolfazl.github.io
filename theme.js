(() => {
  const storageKey = 'ag-cv-theme';
  const root = document.documentElement;
  let button;
  let savedTheme;

  try {
    savedTheme = localStorage.getItem(storageKey);
  } catch {
    // The toggle still works when storage is unavailable.
  }

  function applyTheme(theme) {
    root.dataset.theme = theme;
    button?.setAttribute('aria-pressed', String(theme === 'dark'));
  }

  applyTheme(savedTheme === 'dark' ? 'dark' : 'light');

  document.addEventListener('DOMContentLoaded', () => {
    button = document.querySelector('.theme-toggle');
    applyTheme(root.dataset.theme);
    button.hidden = false;

    button.addEventListener('click', () => {
      const theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      applyTheme(theme);

      try {
        localStorage.setItem(storageKey, theme);
      } catch {
        // This page keeps the selected theme until it is closed or reloaded.
      }
    });
  });
})();
