import {StyleSheet} from 'react-native';
import {styled} from 'styled-components/native';
import Colors from '../../Theme/Colors';
import Responsive from '../../Theme/Responsive';
import Fonts from '../../Theme/Fonts';

export const EventImageView = styled.Image`
  width: ${Responsive.widthPercentageToDP(97)}px;
  height: 400;
  margin-bottom: 15px;
  border-radius: 10px;
  overflow: hidden;
  justify-content: flex-end;
  align-self: center;
`;
export const FlatlistParent = styled.View`
  margin-bottom: 40px;
`;

export const UserDetailTextInput = styled.TextInput`
  height: 48px;
  width: 97%;
  color: ${Colors.white};
  background-color: ${Colors.countryPickerBg};
  border-radius: 10px;
  font-size: 15px;
  font-family: ${Fonts.fonts.HankenGroteskRegular};
  margin-top: 15px;
  margin-bottom: 5px;
  margin-left: 10px;
  margin-right: 10px;
  padding-left: 15px;
  align-items: center;
  justify-content: center;
  align-self: center;
`;

export const RegisterTouchable = styled.TouchableOpacity`
  height: 48px;
  width: 97%;
  background-color: ${Colors.verifyButtonBgColor};
  border-radius: 10px;
  margin-top: 15px;
  margin-bottom: 5px;
  margin-left: 10px;
  margin-right: 10px;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 15px;
  align-self: center;
`;

export const styles = StyleSheet.create({
  linearGradient: {
    justifyContent: 'flex-start',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  imageStyle: {
    height: 400,
    borderRadius: 10,
  },
  scrollViewStyle: {
    marginBottom: 45,
  },
});
