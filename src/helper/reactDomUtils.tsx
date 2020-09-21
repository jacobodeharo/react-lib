import * as React from 'react';

const filterChildrenOfType = (children, T) =>
  React.Children.toArray(children).filter(
    (child) =>
      React.isValidElement(child) && (child as React.ReactElement).type === T
  );

const renderChildrenOfType = (children, T) =>
  filterChildrenOfType(children, T).map((item, index) => (
    <React.Fragment key={index}>{item}</React.Fragment>
  ));

export { filterChildrenOfType, renderChildrenOfType };
