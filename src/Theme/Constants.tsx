import {Dimensions} from 'react-native';

export const commonConstant = {
  /// Screen Width And Height
  appName: 'EventBooking',
  scrWidth: Dimensions.get('screen').width,
  scrHeight: Dimensions.get('screen').height,
  //local
  defaultLanguage: 'en',
  /// Other Misc Constants

  // animation Timing
  animTime100: 100,
  animTime200: 200,
  animTime300: 300,
  animTime350: 350,
  animTime400: 400,
  animTime500: 500,
  animTime700: 700,
  animTime1000: 1000,
  animTime1500: 1500,
  animDelay5500: 5500,
};

export default {
  commonConstant,
};
