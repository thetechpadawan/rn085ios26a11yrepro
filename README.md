# React Native reproducer for iOS 26.2 accessibility-tree regression

This repository is based on the official React Native reproducer template.

The actual repro app lives in `ReproducerApp/`.

## Repro summary

On iOS 26.2 with React Native 0.85.3 and the New Architecture enabled, the React Native UI is visibly rendered on screen but can be largely missing from the XCUITest accessibility tree.

## App location

- `ReproducerApp/`

## Run

```bash
cd ReproducerApp
npm install
cd ios
bundle install
bundle exec pod install
cd ..
npx react-native start --port 8081
```

In a second terminal:

```bash
cd ReproducerApp
npx react-native run-ios --simulator "iPhone 17 Pro" --port 8081
```
