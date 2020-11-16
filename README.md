[![GitHub version](https://badge.fury.io/gh/jacobodeharo%2Freact-lib.svg)](https://badge.fury.io/gh/jacobodeharo%2Freact-lib&kill_cache=1)

This is a project created as a demo about how to create a basic React Component library supporting theme customisation.

This is the current components available in the live Storybook: https://jacobodeharo.github.io/react-lib/?path=/story/components-base-anchor--primary

## React component library

Currently implemented on this library:

- **Rollup bundler** to generate the library bundle.
- **Components** (Styled components):
  - Anchor (Link).
  - Button.
  - Tabs component container.
    - Selector.
    - Panel.
- Two basic **themes** (Gray & Amber) based on Material Design color palettes recommendation.
- **Storybook** showing those components.
- For the tests: Jest + React Testing Library.
- **Basic CI pipeline** to deploy The Storybook and the Node Package to GPR (GitHub Package Registry).

## How to run this project?

This project contains a Storybook to display the component API that it provides. To run it you have to:

1. Install dependencies:

```
npm install
```

2. Run component Storybook:

```
npm run storybook
```

## How to run unit tests?

This project comes with Jest test runner and `react-testing-library`. To tun the unit and snapshot tests,
you have to execute:

```
npm run test
```

## How to build the library?

```
npm run build
```


This command will bundle the library by using Rollup into a `build` folder.

## Contact Information

- Jacobo de Haro
- Twitter: @jacobodeharo
- Email: jacobodeharo@gmail.com
