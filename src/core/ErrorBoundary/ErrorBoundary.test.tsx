import { ErrorBoundary } from './ErrorBoundary';
import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import { consoleLogSpy } from '@/helper/testHelper';

describe('ErrorBoundary', () => {
  const ThrowError = () => {
    throw new Error('Oh no!');
  };

  const CorrectComponent = () => (
    <div>This is a correctly rendered component</div>
  );

  afterEach(cleanup);

  test('should display an ErrorMessage if wrapped component throws am Error', () => {
    const spy = consoleLogSpy();
    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    );
    expect(
      screen.getByText(ErrorBoundary.DEFAULT_FALLBACK_TEXT)
    ).toBeInTheDocument();
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
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
