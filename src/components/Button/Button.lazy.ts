const LazyButton = () =>
  import('../Button/Button.styles').then(({ ButtonStyles }) => ({
    default: ButtonStyles,
  }));

export { LazyButton };
