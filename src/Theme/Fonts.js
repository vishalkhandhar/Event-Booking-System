import {Platform, Dimensions} from 'react-native';
import Colors from './Colors';

const fonts = {
  MontserratBold: 'Montserrat-Bold',
  MontserratRegular: 'Montserrat-Regular',
  MontserratMedium: 'Montserrat-Medium',
  MontserratLight: 'Montserrat-Light',
  MontserratItalic: 'Montserrat-Italic',
  MontserratSemiBold: 'Montserrat-SemiBold',
  HankenGroteskRegular: 'HankenGrotesk-Regular',
  HankenGroteskMedium: 'HankenGrotesk-Medium',
  HankenGroteskLight: 'HankenGrotesk-Light',
  HankenGroteskBold: 'HankenGrotesk-Bold',
  HankenGroteskSemiBold: 'HankenGrotesk-SemiBold',
  HankenGroteskLightSemiBold: 'HankenGrotesk-SemiBold',
};

function applyRatio(pointsSize) {
  //   const pxRatio = PixelRatio.getFontScale() || 1
  //   return pointsSize / pxRatio
  return pointsSize;
}

const size = {
  h10: applyRatio(10),
  h12: applyRatio(12),
  h14: applyRatio(14),
  h16: applyRatio(16),
  h18: applyRatio(18),
  h20: applyRatio(20),
  h22: applyRatio(22),
  h24: applyRatio(24),
  h30: applyRatio(30),
  h42: applyRatio(42),
};

const fontScale = (font, factor = 0.5) => {
  const guidelineBaseWidth = Platform.select({ios: 414, android: 540});
  const scale = font =>
    (Dimensions.get('screen').width / guidelineBaseWidth) * font;
  return font + (scale(font) - font) * factor;
};

const style = {
  title: {
    fontSize: size.h24,
    color: Colors.Yellow,
    fontFamily: fonts.ProductSansBold,
  },
  mediumTitleRegular: {
    fontSize: size.h22,
    color: Colors.white,
    fontFamily: fonts.ProductSansRegular,
  },
  smallRegularText: {
    fontSize: size.h16,
    color: Colors.white,
    fontFamily: fonts.ProductSansRegular,
  },
  mediumRegularText: {
    fontSize: size.h20,
    color: Colors.white,
    fontFamily: fonts.ProductSansRegular,
  },
  MainTextStyleBold: {
    fontSize: size.h18,
    color: Colors.white,
    fontFamily: fonts.Medium,
  },
  mediumTextStyleBold: {
    fontSize: size.h20,
    color: Colors.white,
    fontFamily: fonts.ProductSansBold,
  },
  smallTextStyleBold: {
    fontSize: size.h12,
    color: Colors.black,
    fontFamily: fonts.ProductSansBold,
  },
  BoldTextStyle: {
    fontSize: size.h20,
    color: Colors.black,
    fontFamily: fonts.ProductSansBold,
  },
  textInputText: {
    fontSize: size.h16,
    color: Colors.grayBlackText,
    fontFamily: fonts.ProductSansRegular,
  },
  smallTitle: {
    fontSize: size.h14,
    color: Colors.textDescColor,
    fontFamily: fonts.ProductSansRegular,
  },
  smallItalic: {
    fontSize: size.h14,
    color: Colors.textDescColor,
    fontFamily: fonts.ProductSansItalic,
  },
  bigSmallRegular: {
    fontSize: size.h12,
    color: Colors.placeholderTextColor,
    fontFamily: fonts.ProductSansRegular,
  },
  smallRegularTime: {
    fontSize: size.h10,
    color: Colors.timeBlue,
    fontFamily: fonts.ProductSansRegular,
  },
};

export default {
  fonts,
  fontScale,
  applyRatio,
  size,
  style,
};
