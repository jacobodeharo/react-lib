import { ErrorBoundary } from './ErrorBoundary';
import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';

describe('ErrorBoundary', () => {
  const consoleLogSpy = jest
    .spyOn(window.console, 'error')
    .mockImplementation(() => {});

  const ThrowError = () => {
    throw new Error('Oh no!');
  };

  const CorrectComponent = () => (
    <div>This is a correctly rendered component</div>
  );

  afterEach(cleanup);
  afterAll(consoleLogSpy.mockRestore);

  test('should display an ErrorMessage if wrapped component throws am Error', () => {
    const spy = jest.spyOn(console, 'error');
    spy.mockImplementation(() => {});
    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    );
    expect(
      screen.getByText(ErrorBoundary.DEFAULT_FALLBACK_TEXT)
    ).toBeInTheDocument();
  });

  test('should not display an ErrorMessage if wrapped component throws am Error', () => {
    render(
      <ErrorBoundary>
        <CorrectComponent />
      </ErrorBoundary>
    );
    expect(
      screen.getByText('This is a correctly rendered component')
    ).toBeInTheDocument();
  });
});
