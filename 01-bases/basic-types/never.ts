(() => {
  const showError = (message: string): never => {
    throw new Error(message);
  };

  showError('404');
})();
