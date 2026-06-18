# rn085ios26a11yrepro

Minimal React Native 0.85.3 repro for an iOS 26.2 XCUITest accessibility-tree regression.

## Symptom

The React Native UI is visibly rendered on screen, but XCUITest-based tools may see only a nearly-empty hierarchy:
- app root / window
- native overlays
- missing RN `Text`, `TextInput`, `Button`, and `testID` nodes

## Stack

- React Native 0.85.3
- React 19.2.3
- iOS Simulator 26.2
- Xcode 26.2

## Repro app UI

The app renders:
- `Text` with `testID="hero-title"`
- `Text` with `testID="hero-subtitle"`
- `TextInput` with `testID="email-input"`
- `Button` with title `Press me`

## Run

```bash
npm install
cd ios
bundle install
bundle exec pod install
cd ..
npx react-native start --port 8081
```

In a second terminal:

```bash
npx react-native run-ios --simulator "iPhone 17 Pro" --port 8081
```

## Expected

XCUITest-backed tools should see the visible RN elements so UI automation can target them.

## Actual

On the affected stack, the screen is visible but the hierarchy can be nearly empty.
