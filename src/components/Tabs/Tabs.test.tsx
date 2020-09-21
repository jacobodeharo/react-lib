import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { Tabs } from './Tabs';
import { AMBER_THEME } from '../theme/variants/amberTheme';
import { Selector } from './Selector/Selector';
import { Panel } from './Panel/Panel';
import { useTabs } from './Tabs.hooks';
import { TabsContext } from './Tabs.context';

describe('Tabs', () => {
  const PANEL_CHILDREN = 'Panel Label';
  const SELECTOR_CHILDREN = 'SelectorLabel';
  afterEach(cleanup);

  test('has to be rendered', () => {
    render(
      <Tabs selectedTab='tabA'>
        <Selector tabId='tabA'>{SELECTOR_CHILDREN}</Selector>
        <Panel tabId='tabA'>{PANEL_CHILDREN}</Panel>
      </Tabs>
    );
    const PanelElement = screen.getByText(PANEL_CHILDREN);
    expect(PanelElement).toBeInTheDocument();
    const SelectorElement = screen.getByText(SELECTOR_CHILDREN);
    expect(SelectorElement).toBeInTheDocument();
    expect(SelectorElement).toMatchSnapshot();
  });

  test('has to accept theming', () => {
    render(
      <Tabs selectedTab='tabA' theme={AMBER_THEME}>
        <Selector tabId='tabA'>{SELECTOR_CHILDREN}</Selector>
        <Panel tabId='tabA'>{PANEL_CHILDREN}</Panel>
      </Tabs>
    );
    const PanelElement = screen.getByText(SELECTOR_CHILDREN);
    expect(PanelElement).toBeInTheDocument();
    expect(PanelElement).toMatchSnapshot();
  });
});

describe('useTabs hook', () => {
  test('has to create a TabsContext', () => {
    const setActiveTabMock = () => undefined;
    const context = renderHook(() => useTabs(), {
      initialProps: {
        value: { activeTab: 'TabA', setActiveTab: setActiveTabMock },
      },
      wrapper: TabsContext.Provider,
    });
    expect(context.result).toStrictEqual({
      current: {
        activeTab: 'TabA',
        setActiveTab: setActiveTabMock,
      },
      error: undefined,
    });
  });
});
