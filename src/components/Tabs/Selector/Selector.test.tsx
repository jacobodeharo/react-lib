import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import { Selector } from './Selector';
import { AMBER_THEME } from '../../theme/variants/amberTheme';
import { consoleLogSpy } from '../../../helper/testHelper';
import { ErrorBoundary } from '../../..';
import { TabsContext } from '../Tabs.context';

describe('Selector', () => {
  const SELECTOR_CHILDREN = 'Selector Label';
  afterEach(cleanup);

  test('has to be rendered', () => {
    render(
      <TabsContext.Provider
        value={{
          activeTab: 'tabA',
          setActiveTab: (_: string) => undefined,
        }}
      >
        <Selector tabId='tabA'>{SELECTOR_CHILDREN}</Selector>
      </TabsContext.Provider>
    );
    const SelectorElement = screen.getByText(SELECTOR_CHILDREN);
    expect(SelectorElement).toBeInTheDocument();
    expect(SelectorElement).toMatchSnapshot();
  });

  test('has to throw an error if it is not rendered in a Tabs component', () => {
    const spy = consoleLogSpy();
    render(
      <ErrorBoundary>
        <Selector tabId='tabA'>{SELECTOR_CHILDREN}</Selector>
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
        <Selector tabId='tabA' theme={AMBER_THEME}>
          {SELECTOR_CHILDREN}
        </Selector>
      </TabsContext.Provider>
    );
    const SelectorElement = screen.getByText(SELECTOR_CHILDREN);
    expect(SelectorElement).toBeInTheDocument();
    expect(SelectorElement).toMatchSnapshot();
  });

  test('has to change active tab when clicked', () => {
    const mockContext = {
      activeTab: 'tabA',
      setActiveTab: (_: string) => undefined,
    };
    const tabIdFixture = 'tabA';
    const setActiveTabSpy = jest
      .spyOn(mockContext, 'setActiveTab')
      .mockImplementation((_: string) => undefined);
    render(
      <TabsContext.Provider value={mockContext}>
        <Selector tabId={tabIdFixture} theme={AMBER_THEME}>
          {SELECTOR_CHILDREN}
        </Selector>
      </TabsContext.Provider>
    );
    const SelectorElement = screen.getByText(SELECTOR_CHILDREN);
    SelectorElement.click();
    expect(setActiveTabSpy).toHaveBeenCalledWith(tabIdFixture);
    setActiveTabSpy.mockRestore();
  });
});
