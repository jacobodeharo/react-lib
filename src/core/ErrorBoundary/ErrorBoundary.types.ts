import React from 'react';

export type ErrorBoundaryProps = {
  fallbackText?: string;
};

export type ErrorBoundaryState = {
  hasError: boolean;
  error?: React.ErrorInfo;
};
