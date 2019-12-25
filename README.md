# React Native Theme App

react-native-theme Provides a light/dark theme to let your users adjust the appearance of your app depending on the time of day or their preference.

![typography Screen](https://github.com/wm-madfaa-dev/react-native-theme/blob/master/doc/assets/typographyScreen.png)

![color palette Screen](https://github.com/wm-madfaa-dev/react-native-theme/blob/master/doc/assets/colorPaletteScreen.png)

![elevation Screen](https://github.com/wm-madfaa-dev/react-native-theme/blob/master/doc/assets/elevationScreen.png)

## Table of contents

- [React Native Theme App](#react-native-theme-app)
  - [Table of contents](#table-of-contents)
  - [Quick start](#quick-start)
  - [What's included](#whats-included)
  - [Bugs and feature requests](#bugs-and-feature-requests)
  - [Contributing](#contributing)
  - [Creators](#creators)
  - [Copyright and license](#copyright-and-license)

## Quick start

Install the theme module

```sh
yarn add wm-madfaa-dev/react-native-styles#v0.0.2
# or
npm i wm-madfaa-dev/react-native-styles#v0.0.2
```

Run the app on you device

```sh
git clone https://github.com/wm-madfaa-dev/react-native-theme.git
cd react-native-theme
yarn install

# ios
cd ios && pod install && cd ..
yarn ios

# android
yarn android
```
## What's included

```text
.
├── colors
│   ├── amber.ts
│   ├── blue.ts
│   ├── blueGrey.ts
│   ├── brown.ts
│   ├── common.ts
│   ├── cyan.ts
│   ├── deepOrange.ts
│   ├── deepPurple.ts
│   ├── green.ts
│   ├── grey.ts
│   ├── index.ts
│   ├── indigo.ts
│   ├── lightBlue.ts
│   ├── lightGreen.ts
│   ├── lime.ts
│   ├── orange.ts
│   ├── pink.ts
│   ├── purple.ts
│   ├── red.ts
│   ├── teal.ts
│   ├── types.ts
│   └── yellow.ts
├── index.ts
├── theme
│   ├── createColorPalette.ts
│   ├── createSpacing.ts
│   ├── createTypography.ts
│   ├── index.ts
│   └── shadows.ts
├── themeManager
│   ├── createStyleSheet.ts
│   ├── createTheme.ts
│   ├── index.ts
│   ├── themeContext.tsx
│   └── useTheme.tsx
└── utils
    ├── index.ts
    ├── utils.interface.d.ts
    └── utils.union.d.ts

4 directories, 36 files
```

## Bugs and feature requests

Have a bug or a feature request? Please first read the [issue guidelines](https://reponame/blob/master/CONTRIBUTING.md) and search for existing and closed issues. If your problem or idea is not addressed yet, [please open a new issue](https://reponame/issues/new).

## Contributing

Please read through our [contributing guidelines](https://reponame/blob/master/CONTRIBUTING.md). Included are directions for opening issues, coding standards, and notes on development.

Moreover, all HTML and CSS should conform to the [Code Guide](https://github.com/mdo/code-guide), maintained by [Main author](https://github.com/usernamemainauthor).

Editor preferences are available in the [editor config](https://reponame/blob/master/.editorconfig) for easy use in common text editors. Read more and download plugins at <https://editorconfig.org/>.

## Creators

**Creator 1**

- <https://github.com/wm-madfaa-dev>

## Copyright and license

Code and documentation copyright 2019-2020 the authors. Code released under the [MIT License](https://reponame/blob/master/LICENSE).
