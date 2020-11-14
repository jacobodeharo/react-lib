import * as React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AMBER_THEME } from '../theme/variants/amberTheme';
import { ButtonStyles } from './Button.styles';
import DoneCallback = jest.DoneCallback;

describe('Button', () => {
  const clickEventHandler = (callback: DoneCallback) => callback();
  const BUTTON_LABEL = 'Button Label';

  afterEach(cleanup);

  test('has to be rendered', () => {
    render(<ButtonStyles>Button Label</ButtonStyles>);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toMatchSnapshot();
  });

  test('has to accept theming', () => {
    render(<ButtonStyles theme={AMBER_THEME}>Button Label</ButtonStyles>);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toMatchSnapshot();
  });

  test('has to handle onClick events', (done) => {
    render(
      <ButtonStyles onClick={clickEventHandler(done)}>
        {BUTTON_LABEL}
      </ButtonStyles>
    );
    userEvent.click(screen.getByText(BUTTON_LABEL));
  });
});
