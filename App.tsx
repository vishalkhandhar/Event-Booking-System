import {StatusBar, StyleSheet, Platform, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Colors from './src/Theme/Colors';
import RouterComponent from './src/Router/Router';
// import KeyboardManager from 'react-native-keyboard-manager';

// import {SafeAreaContView} from './src/Theme/commonStyle';

import ScreenName from './src/Theme/ScreenName';

const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    // if (Platform.OS === 'ios') {
    //   keyboardSetting();
    // }

    return () => {};
  }, []);

  // function keyboardSetting() {
  //   KeyboardManager.setEnable(true);
  //   KeyboardManager.setEnableDebugging(true);
  //   KeyboardManager.setKeyboardDistanceFromTextField(15);
  //   KeyboardManager.setLayoutIfNeededOnUpdate(true);
  //   KeyboardManager.setEnableAutoToolbar(true);
  //   KeyboardManager.setToolbarDoneBarButtonItemText('Done');
  //   KeyboardManager.setShouldToolbarUsesTextFieldTintColor(false);

  //   KeyboardManager.setToolbarManageBehaviourBy('position'); // "subviews" | "tag" | "position"
  //   KeyboardManager.setToolbarPreviousNextButtonEnable(true);

  //   KeyboardManager.setToolbarTintColor(Colors.AppBackgroundColorSec); // Only #000000 format is supported
  //   KeyboardManager.setToolbarBarTintColor(Colors.background); // Only #000000 format is supported
  //   KeyboardManager.setShouldShowToolbarPlaceholder(false);
  //   KeyboardManager.setOverrideKeyboardAppearance(true);
  //   KeyboardManager.setShouldResignOnTouchOutside(true);
  //   KeyboardManager.setKeyboardAppearance('light'); // "default" | "light" | "dark"
  //   KeyboardManager.resignFirstResponder();
  //   KeyboardManager.setShouldPlayInputClicks(true);
  //   KeyboardManager.reloadLayoutIfNeeded();
  // }

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={Colors.AppBackgroundColorSec}
        barStyle="light-content"
      />

      <RouterComponent />
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.AppBackgroundColorSec,
  },
});

export default App;
