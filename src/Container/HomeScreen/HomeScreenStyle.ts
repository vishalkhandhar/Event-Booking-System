import {StyleSheet} from 'react-native';
import {styled} from 'styled-components/native';
import Responsive from '../../Theme/Responsive';

export const EventImageView = styled.ImageBackground`
  width: ${Responsive.widthPercentageToDP(97)};
  height: 250px;
  margin-bottom: 15px;
  border-radius: 10px;
  overflow: hidden;
  align-items: center;
  justify-content: flex-end;
  align-self: center;
`;
export const FlatlistParent = styled.View`
  margin-bottom: 40px;
`;

export const styles = StyleSheet.create({
  linearGradient: {
    height: 100,
    alignSelf: 'stretch',

    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: 'flex-start',
  },
  imageStyle: {
    borderRadius: 10,
  },
});
