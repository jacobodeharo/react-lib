import React from 'react';
import { ErrorBoundaryProps, ErrorBoundaryState } from './ErrorBoundary.types';

export class ErrorBoundary extends React.PureComponent<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  static readonly DEFAULT_FALLBACK_TEXT = 'Something went wrong.';

  constructor(props: Readonly<ErrorBoundaryProps>) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  componentDidCatch(error: any) {
    this.setState({ hasError: true, error: error });
  }

  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
      error,
    };
  }

  render() {
    const { fallbackText } = this.props;
    if (this.state.hasError) {
      return <div>{fallbackText || ErrorBoundary.DEFAULT_FALLBACK_TEXT}</div>;
    }
    return this.props.children;
  }
}
