const LazyAnchor = () =>
  import('../Anchor/Anchor.styles').then(({ AnchorStyles }) => ({
    default: AnchorStyles,
  }));

export { LazyAnchor };
