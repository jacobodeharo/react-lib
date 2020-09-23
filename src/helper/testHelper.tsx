const consoleLogSpy = () =>
  jest.spyOn(window.console, 'error').mockImplementation(() => {});

export { consoleLogSpy };
