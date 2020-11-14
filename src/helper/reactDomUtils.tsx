import * as React from 'react';
import { ReactNode } from 'react';

const filterChildrenOfType = (children: ReactNode, type: any): ReactNode[] =>
  React.Children.toArray(children).filter(
    (child) =>
      React.isValidElement(child) && (child as JSX.Element)?.type === type
  );

const renderChildrenOfType = (children: ReactNode, type: any): ReactNode[] =>
  filterChildrenOfType(children, type).map((item, index) => (
    <React.Fragment key={index}>{item}</React.Fragment>
  ));

export { filterChildrenOfType, renderChildrenOfType };
