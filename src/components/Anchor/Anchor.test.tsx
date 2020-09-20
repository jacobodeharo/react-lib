import * as React from 'react';
import 'jest-styled-components';
import { render, cleanup, screen } from '@testing-library/react';
import { Anchor } from './Anchor';
import { DARK_THEME } from '../theme/variants/darkTheme';

describe('Anchor', () => {
  const ANCHOR_LABEL = 'Anchor Label';

  afterEach(cleanup);

  test('has to be rendered', () => {
    render(
      <Anchor
        href='https://www.test.com'
        rel='noopener noreferer'
        target='_blank'
      >
        {ANCHOR_LABEL}
      </Anchor>
    );
    const anchorElement = screen.getByText(ANCHOR_LABEL).closest('a');
    expect(anchorElement).toMatchSnapshot();
    expect(anchorElement).toHaveAttribute('href', 'https://www.test.com');
    expect(anchorElement).toHaveAttribute('rel', 'noopener noreferer');
    expect(anchorElement).toHaveAttribute('target', '_blank');
  });

  test('has to be rendered with proper styles by using a theme', () => {
    render(
      <Anchor
        href='https://www.test.com'
        rel='noopener noreferer'
        target='_blank'
        theme={DARK_THEME}
      >
        {ANCHOR_LABEL}
      </Anchor>
    );
    const anchorElement = screen.getByText(ANCHOR_LABEL).closest('a');
    expect(anchorElement).toMatchSnapshot();
  });
});
