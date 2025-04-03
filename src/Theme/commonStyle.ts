import type React from 'react';
import {
  Platform,
  type StyleProp,
  StyleSheet,
  type TextStyle,
  ViewStyle,
} from 'react-native';
import styled from 'styled-components/native';

import Fonts from './Fonts';
import Responsive from './Responsive';
import Colors from './Colors';

const commonStyles = StyleSheet.create({
  safeAreaViewStyle: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.AppBackgroundColorSec,
  },
  shadowContainer: {
    // Shadow properties for iOS
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      // Elevation for Android
      android: {
        elevation: 5,
      },
    }),
  },
  flex: {
    flex: 1,
  },
  centerItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatListPadding: {
    paddingTop: 10,
  },
  flatListMarginTop: {
    marginTop: 10,
  },
  flatListPaddingBottom: {
    paddingBottom: 10,
  },
});

export default commonStyles;

interface TextProp {
  color?: string;
  flex?: number;
  size?: number;
  fontFamily?: string;
  style?: StyleProp<TextStyle> | undefined;
  children: React.ReactNode;
  marginTop?: number;
  lineHeight?: number;
  letterSpacing?: number;
  textTransform?: 'uppercase' | 'capitalize' | 'lowercase';
  marginLeft?: number;
  marginRight?: number;
  paddingLeft?: number;
  paddingRight?: number;
  paddingTop?: number;
  maxWidth?: number;
  paddingBottom?: number;
  marginBottom?: number;
  textDecoration?:
    | 'dashed '
    | 'dotted'
    | 'double'
    | 'line-through'
    | 'none'
    | 'overline'
    | 'solid'
    | 'underline'
    | 'wavy';
  textAlign?: 'left' | 'center' | 'right';
}

interface HeaderTextProps {
  textTransform?: string;
  marginLeft?: number;
  textDecoration?: string;
  style?: StyleProp<TextStyle> | undefined;
  children?: React.ReactNode;
  latterSpacing?: number;
}

interface SeparatorTypes {
  val?: number;
  marginVerVal?: number;
  marginHorVal?: number;
}

export interface viewProps {
  flex?: number;
  flexDirection?: 'column' | 'row';
  height?: number | string;
  width?: number | string;
  marginLeft?: number;
  marginTop?: number;
  marginBottom?: number;
  marginRight?: number;
  paddingRight?: number;
  paddingLeft?: number;
  paddingTop?: number;
  paddingBottom?: number;
  borderRadius?: number;
  borderColor?: string;
  borderWidth?: number;
  backgroundColor?: string;
  alighSelf?:
    | ' baseline'
    | 'center'
    | 'safe'
    | 'first baseline'
    | 'flex-end'
    | 'flex-start'
    | 'normal'
    | 'last baseline'
    | 'self-end'
    | 'stretch'
    | 'unsafe'
    | 'self-start';
  justifyContent?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-around'
    | 'space-between';
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
}

export interface textProps {
  flex?: number;
  textColor?: string;
  alighSelf?: string;
  marginTop?: number;
  lineHeight?: number;
  height?: number | string;
  width?: number | string;
  marginBottom?: number;
  marginRight?: number;
  marginLeft?: number;
  paddingLeft?: number;
  paddingRight?: number;
  paddingTop?: number;
  paddingBottom?: number;
  fontStyle?: string;
  fontSize?: number;
  zIndex?: number;
  latterSpacing?: number;
  textTransform?: string;
  opacity?: boolean;
  opacityVal?: number;
  position?: 'absolute' | 'relative' | 'static' | 'fixed' | 'sticky';
  flexDirection?: 'row' | 'column';
  justifyContent?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-around'
    | 'space-between';
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
  borderRadius?: number;
  borderColor?: string;
  borderStyle?: string;
  backGroundColor?: string;
  bottom?: number;
}

export const Header = styled.View`
  padding-left: ${Responsive.widthPercentageToDP('4')}px;
  padding-right: ${Responsive.widthPercentageToDP('4')}px;
  padding-top: ${Responsive.heightPercentageToDP('1.5')}px;
  padding-bottom: ${Responsive.heightPercentageToDP('1.5')}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 0.5px;
`;

export const HorizontalLine = styled.View<textProps>`
  width: 100%;
  height: ${props => (props?.height ? props?.height : 1)}px;
  opacity: ${props => (props?.opacityVal ? props?.opacityVal : 1)};
  margin-right: ${props => (props?.marginRight ? props?.marginRight : 0)}px;
  margin-left: ${props => (props?.marginLeft ? props?.marginLeft : 0)}px;
  background-color: ${props =>
    props?.backGroundColor ? props?.backGroundColor : Colors.gray6};
`;

export const SafeAreaContView = styled.SafeAreaView`
  flex: 1;
  background-color: ${Colors.AppBackgroundColorSec};
`;

export const TextView = styled.Text<TextProp>`
  flex: ${props => (props?.flex ? props?.flex : 'none')};
  text-transform: lowercase;
  text-align: ${props => (props?.textAlign ? props?.textAlign : 'left')};
  color: ${(props: any) => props?.color || Colors.white};
  font-size: ${(props: any) =>
    Responsive.convertFontScale(props?.size || 14)}px;
  font-family: ${(props: any) =>
    props?.fontFamily ? props?.fontFamily : Fonts.fonts.HankenGroteskRegular};
  max-width: ${props => (props?.maxWidth ? props?.maxWidth : 'none')}px;
  margin-top: ${(props: any) => (props?.marginTop ? props?.marginTop : 0)}px;
  margin-left: ${(props: any) => (props?.marginLeft ? props?.marginLeft : 0)}px;
  padding-left: ${props => (props?.paddingLeft ? props?.paddingLeft : 0)}px;
  padding-right: ${props => (props?.paddingRight ? props?.paddingRight : 0)}px;
  margin-bottom: ${props => (props?.marginBottom ? props?.marginBottom : 0)}px;
  margin-right: ${(props: any) =>
    props?.marginRight ? props?.marginRight : 0}px;
  letter-spacing: ${props =>
    props?.letterSpacing ? props?.letterSpacing : 0}px;
  text-transform: ${props =>
    props?.textTransform ? props?.textTransform : 'none'};
  text-decoration: ${props =>
    props?.textDecoration ? props?.textDecoration : 'none'};
`;

export const ViewCommon = styled.View<viewProps>`
  flex: ${props => (props?.flex ? props?.flex : 'none')};
  flex-direction: ${props =>
    props?.flexDirection ? props?.flexDirection : 'column'};
  height: ${props => (props?.height ? props?.height : 'auto')}px;
  width: ${props => (props?.width ? props?.width : 'auto')}px;
  align-self: ${props => (props?.alighSelf ? props?.alighSelf : 'auto')};
  margin-top: ${(props: any) => (props?.marginTop ? props?.marginTop : 0)}px;
  margin-left: ${(props: any) => (props?.marginLeft ? props?.marginLeft : 0)}px;
  margin-bottom: ${props => (props?.marginBottom ? props?.marginBottom : 0)}px;
  margin-right: ${(props: any) =>
    props?.marginRight ? props?.marginRight : 0}px;
  padding-left: ${props => (props?.paddingLeft ? props?.paddingLeft : 0)}px;
  padding-right: ${props => (props?.paddingRight ? props?.paddingRight : 0)}px;
  padding-top: ${props => (props?.paddingTop ? props?.paddingTop : 0)}px;
  border-color: ${props =>
    props?.borderColor ? props?.borderColor : Colors.transparent};
  border-radius: ${props => (props?.borderRadius ? props?.borderRadius : 0)}px;
  border-width: ${props => (props?.borderWidth ? props?.borderWidth : 0)}px;
  padding-bottom: ${props =>
    props?.paddingBottom ? props?.paddingBottom : 0}px;
  background-color: ${props =>
    props?.backgroundColor ? props?.backgroundColor : Colors.transparent};
  justify-content: ${props =>
    props?.justifyContent ? props?.justifyContent : 'center'};
  align-items: ${props => (props?.alignItems ? props?.alignItems : 'center')};
`;

export const CommonTouchable = styled.TouchableOpacity<viewProps>`
  flex: ${props => (props?.flex ? props?.flex : 'none')};
  flex-direction: ${props =>
    props?.flexDirection ? props?.flexDirection : 'column'};
  height: ${props => (props?.height ? props?.height : 'auto')}px;
  width: ${props => (props?.width ? props?.width : 'auto')}px;
  align-self: ${props => (props?.alighSelf ? props?.alighSelf : 'auto')};
  margin-top: ${(props: any) => (props?.marginTop ? props?.marginTop : 0)}px;
  margin-left: ${(props: any) => (props?.marginLeft ? props?.marginLeft : 0)}px;
  margin-bottom: ${props => (props?.marginBottom ? props?.marginBottom : 0)}px;
  border-radius: ${props => (props?.borderRadius ? props?.borderRadius : 0)}px;
  margin-right: ${(props: any) =>
    props?.marginRight ? props?.marginRight : 0}px;
  padding-left: ${props => (props?.paddingLeft ? props?.paddingLeft : 0)}px;
  padding-right: ${props => (props?.paddingRight ? props?.paddingRight : 0)}px;
  padding-top: ${props => (props?.paddingTop ? props?.paddingTop : 0)}px;
  border-color: ${props =>
    props?.borderColor ? props?.borderColor : Colors.transparent};
  border-width: ${props => (props?.borderWidth ? props?.borderWidth : 0)}px;
  padding-bottom: ${props =>
    props?.paddingBottom ? props?.paddingBottom : 0}px;
  background-color: ${props =>
    props?.backgroundColor ? props?.backgroundColor : Colors.transparent};
  justify-content: ${props =>
    props?.justifyContent ? props?.justifyContent : 'center'};
  align-items: ${props => (props?.alignItems ? props?.alignItems : 'center')};
  overflow: hidden;
`;

export const HeaderContainer = styled.View<textProps>`
  padding-top: ${props => (props?.paddingTop ? props?.paddingTop : 20)}px;
  padding-bottom: ${props =>
    props?.paddingBottom ? props?.paddingBottom : 20}px;
  flex-direction: row;
  align-items: center;
  justify-content: ${props =>
    props?.justifyContent ? props?.justifyContent : 'space-between'};
  background-color: ${Colors.transparent};
`;

export const HeaderTitle = styled.Text<HeaderTextProps>`
  font-size: ${Responsive.convertFontScale('17')}px;
  color: ${Colors.white};
  font-family: ${Fonts.fonts.MontserratSemiBold};
  margin-left: ${props => (props?.marginLeft ? props?.marginLeft : 0)}px;
  text-transform: ${props =>
    props.textTransform ? props.textTransform : 'uppercase'};
  text-decoration: ${props =>
    props.textDecoration ? props.textDecoration : 'none'};
  text-decoration-color: ${Colors.white};
  letter-spacing: ${props =>
    props?.latterSpacing ? props?.latterSpacing : 0}px;
`;

export const VerifyTouchable = styled.TouchableOpacity<textProps>`
  height: 48px;
  width: 95%;
  background-color: ${props =>
    props?.backGroundColor
      ? props?.backGroundColor
      : Colors.verifyButtonBgColor};
  border-radius: 10px;
  margin-top: ${props => (props?.marginTop ? props?.marginTop : 15)}px;
  margin-bottom: ${props => (props?.marginBottom ? props?.marginBottom : 5)}px;
  margin-left: ${props => (props?.marginLeft ? props?.marginLeft : 0)}px;
  margin-right: ${props => (props?.marginRight ? props?.marginRight : 0)}px;
  align-items: center;
  justify-content: center;
  position: ${props => (props?.position ? props?.position : 'absolute')};
  bottom: ${props => (props?.bottom ? props?.bottom : 0)}px;
`;

export const IconImage = styled.Image<textProps>`
  flex: ${props => (props?.flex ? props?.flex : 'none')};
  width: ${props => (props?.width ? props?.width : 22)}px;
  height: ${props => (props?.height ? props?.height : 22)}px;
  margin-right: ${props => (props?.marginRight ? props?.marginRight : 0)}px;
  margin-top: ${props => (props?.marginTop ? props?.marginTop : 0)}px;
  margin-bottom: ${props => (props?.marginBottom ? props?.marginBottom : 0)}px;
  margin-left: ${props => (props?.marginLeft ? props?.marginLeft : 0)}px;
`;

interface HeaderBackButtonProps {
  paddingLeft?: number;
  flex?: number;
  paddingRight?: number;
  marginLeft?: number;
  marginRight?: number;
  alignItems?: 'flex-start' | 'center' | 'flex-end';
  justifyContent?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around';
}
export const HeaderBackButton = styled.TouchableOpacity<HeaderBackButtonProps>`
  margin-left: ${props => (props?.marginLeft ? props?.marginLeft : 0)}px;
  margin-right: ${props => (props?.marginRight ? props?.marginRight : 0)}px;
`;

export const HeaderIcon = styled.Image<textProps>`
  height: ${props => (props?.height ? props?.height : 18)}px;
  width: ${props => (props?.width ? props?.width : 18)}px;
  margin-right: ${props => (props?.marginRight ? props?.marginRight : 0)}px;
  margin-left: ${props => (props?.marginLeft ? props?.marginLeft : 0)}px;
`;
