import * as React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';
import { DARK_THEME } from '../theme/variants/darkTheme';
import DoneCallback = jest.DoneCallback;

describe('Button', () => {
  const clickEventHandler = (callback: DoneCallback) => callback();
  const BUTTON_LABEL = 'Button Label';

  afterEach(cleanup);

  test('has to be rendered', () => {
    render(<Button>Button Label</Button>);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toMatchSnapshot();
  });

  test('has to accept theming', () => {
    render(<Button theme={DARK_THEME}>Button Label</Button>);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toMatchSnapshot();
  });

  test('has to handle onClick events', (done) => {
    render(<Button onClick={clickEventHandler(done)}>{BUTTON_LABEL}</Button>);
    userEvent.click(screen.getByText(BUTTON_LABEL));
  });
});
