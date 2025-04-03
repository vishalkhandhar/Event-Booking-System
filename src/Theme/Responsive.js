// packages
import {Dimensions, NativeModules, PixelRatio, Platform} from 'react-native';
import ExtraDimensions from 'react-native-extra-dimensions-android';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const {StatusBarManager} = NativeModules;
// Retrieve initial screen's width
let screenWidth = Dimensions.get('window').width;

// Retrieve initial screen's height
let screenHeight =
  Platform.OS === 'ios'
    ? Dimensions.get('window').height
    : Dimensions.get('window').height -
      ExtraDimensions.get('SOFT_MENU_BAR_HEIGHT');

/**
 * Converts provided width percentage to independent pixel (dp).
 * @param  {string} widthPercent The percentage of screen's width that UI element should cover
 *                               along with the percentage symbol (%).
 * @return {number}              The calculated dp depending on current device's screen width.
 */
const convertFontScale = fontSize => {
  // Parse fontSize convert according to screen width.
  const baseSize = Platform.select({ios: 414, android: 420});
  return fontSize * (screenWidth / baseSize);
};
const widthPercentageToDP = widthPercent => {
  // Parse string percentage input and convert it to number.
  const elemWidth = parseFloat(widthPercent);

  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that corresponds to an integer number of pixels.
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

/**
 * Converts provided height percentage to independent pixel (dp).
 * @param  {string} heightPercent  The percentage of screen's height that UI element should cover
 *                                 along with the percentage symbol (%).
 * @return {number}                The calculated dp depending on current device's screen height.
 */
const heightPercentageToDP = heightPercent => {
  // Parse string percentage input and convert it to number.
  const elemHeight = parseFloat(heightPercent);

  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that correspons to an integer number of pixels.
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

/**
 * Event listener function that detects orientation change (every time it occurs) and triggers
 * screen re rendering. It does that, by changing the state of the screen where the function is
 * called. State changing occurs for a new state variable with the name 'orientation' that will
 * always hold the current value of the orientation after the 1st orientation change.
 * Invoke it inside the screen's constructor or in componentDidMount life cycle method.
 * @param {object} that Screen's class component this variable. The function needs it to
 *                      invoke setState method and trigger screen re-render (this.setState()).
 */
const listenOrientationChange = that => {
  Dimensions.addEventListener('change', newDimensions => {
    // Retrieve and save new dimensions
    screenWidth = newDimensions.window.width;
    screenHeight = newDimensions.window.height;

    // Trigger screen's rerender with a state update of the orientation variable
    that.setState({
      orientation: screenWidth < screenHeight ? 'portrait' : 'landscape',
    });
  });
};

/**
 * Wrapper function that removes orientation change listener and should be invoked in
 * componentWillUnmount life cycle method of every class component (UI screen) that
 * listenOrientationChange function has been invoked. This should be done in order to
 * avoid adding new listeners every time the same component is re-mounted.
 */
const removeOrientationListener = () => {
  Dimensions.removeEventListener('change', () => {});
};
// const isIPhoneX = () => {
//   return Platform.OS === "ios" && Dimensions.get("window").height >= 812;
// };

const isIPhoneX = () => {
  if (Platform.OS === 'ios') {
    if (getStatusBarHeight() <= 20) {
      return 1;
    } else if (getStatusBarHeight() > 20 && getStatusBarHeight() <= 48) {
      return 2;
    } else {
      return 3;
    }
  }
};

export default {
  convertFontScale,
  widthPercentageToDP,
  heightPercentageToDP,
  listenOrientationChange,
  removeOrientationListener,
  isIPhoneX,
};
