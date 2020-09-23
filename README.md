# react-lib

This is a project created as demo about how to create a React component library supporting theme customisation.

## React component library

This prerelease **0.0.2** includes the following:

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
