import {StyleSheet} from 'react-native';
import {hasNotch} from 'react-native-device-info';
import {styled} from 'styled-components/native';
import Responsive from '../../../Theme/Responsive';
import Colors from '../../../Theme/Colors';
import {viewProps} from '../../../Theme/commonStyle';

export const BottomSheetContainer = styled.View<viewProps>`
  flex: 1;
  width: ${Responsive.widthPercentageToDP(100)}px;
  background-color: ${Colors.AppBackgroundColorSec};
  border-top-right-radius: ${Responsive.heightPercentageToDP('2.5')}px;
  border-top-left-radius: ${Responsive.heightPercentageToDP('2.5')}px;
  padding-bottom: ${hasNotch()
    ? Responsive.heightPercentageToDP('4')
    : Responsive.heightPercentageToDP('2')}px;
  padding-top: ${props => (props?.paddingTop ? props?.paddingTop : 20)}px;
`;

export const ModalHorizontalLine = styled.View`
  align-self: center;
  margin-bottom: ${Responsive.heightPercentageToDP('1')}px;
  width: ${Responsive.widthPercentageToDP('10')}px;
  height: ${Responsive.heightPercentageToDP('0.4')}px;
  border-radius: ${Responsive.widthPercentageToDP('5')}px;
  background-color: ${Colors.gray6};
  margin-left: -${Responsive.widthPercentageToDP('4')}px;
  margin-right: -${Responsive.widthPercentageToDP('4')}px;
`;

export const styles = StyleSheet.create({
  modalContainerStyle: {
    margin: 0,
    position: 'absolute',
    bottom: 0,
    justifyContent: 'flex-end',
  },
  safeAreaViewStyle: {
    flex: 1,
  },
});
