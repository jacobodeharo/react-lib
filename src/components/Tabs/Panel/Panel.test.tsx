import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import { Panel } from './Panel';
import { AMBER_THEME } from '../../theme/variants/amberTheme';
import { consoleLogSpy } from '../../../helper/testHelper';
import { ErrorBoundary } from '../../../core/ErrorBoundary/ErrorBoundary';
import { TabsContext } from '../Tabs.context';

describe('Panel', () => {
  const PANEL_CHILDREN = 'Panel Label';
  afterEach(cleanup);

  test('has to be rendered', () => {
    render(
      <TabsContext.Provider
        value={{
          activeTab: 'tabA',
          setActiveTab: (_: string) => undefined,
        }}
      >
        <Panel tabId='tabA'>{PANEL_CHILDREN}</Panel>
      </TabsContext.Provider>
    );
    const PanelElement = screen.getByText(PANEL_CHILDREN);
    expect(PanelElement).toBeInTheDocument();
    expect(PanelElement).toMatchSnapshot();
  });

  test('has to throw an error if it is not rendered in a Tabs component', () => {
    const spy = consoleLogSpy();
    render(
      <ErrorBoundary>
        <Panel tabId='tabA'>{PANEL_CHILDREN}</Panel>
      </ErrorBoundary>
    );
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });

  test('has to accept theming', () => {
    render(
      <TabsContext.Provider
        value={{
          activeTab: 'tabA',
          setActiveTab: (_: string) => undefined,
        }}
      >
        <Panel tabId='tabA' theme={AMBER_THEME}>
          {PANEL_CHILDREN}
        </Panel>
      </TabsContext.Provider>
    );
    const PanelElement = screen.getByText(PANEL_CHILDREN);
    expect(PanelElement).toBeInTheDocument();
    expect(PanelElement).toMatchSnapshot();
  });
});
