import {ScrollView, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import commonStyles, {
  HeaderBackButton,
  HeaderContainer,
  HeaderIcon,
  HeaderTitle,
  IconImage,
  SafeAreaContView,
  TextView,
  VerifyTouchable,
  ViewCommon,
} from '../../Theme/commonStyle';
import {
  EventImageView,
  RegisterTouchable,
  UserDetailTextInput,
  styles,
} from './EventDetailScreenStyle';
import Images from '../../Theme/images';
import Colors from '../../Theme/Colors';
import Fonts from '../../Theme/Fonts';
import BottomSheetModal from '../Components/BottomSheetModal/BottomSheetModal';
export default function EventDetailScreen(props: {
  route: {params: any};
  navigation: any;
}) {
  const params = props?.route?.params;
  const navigation = props?.navigation;
  const [isVisibleRegisterModel, setisVisibleRegisterModel] = useState(false);
  const [isUserName, setUserName] = useState('');
  const [isUserEmail, setUserEmail] = useState('');
  const [isUserPhone, setUserPhone] = useState('');

  const onHandleRegisterEventModel = (val: boolean) => {
    if (val) {
      setisVisibleRegisterModel(true);
    } else {
      setisVisibleRegisterModel(false);
    }
  };

  const onHandleRegisterButtonPress = () => {
    onHandleRegisterEventModel(true);
  };

  const onHandleEventRegisterPress = () => {
    if (
      isUserName.trim() !== '' &&
      isUserEmail.trim() !== '' &&
      isUserPhone.trim() !== ''
    ) {
      onHandleRegisterEventModel(false);
      Alert.alert('Event Booking', 'Event Registerd successfully');
    } else if (isUserName.trim() === '') {
      Alert.alert('Event Booking', 'Please fill up your name');
    } else if (isUserEmail.trim() === '') {
      Alert.alert('Event Booking', 'Please enter your email address');
    } else if (isUserPhone.trim() === '') {
      Alert.alert('"Event Booking",Please up your phone number');
    }
  };

  const renderHeader = () => {
    return (
      <HeaderContainer marginLeft={10} marginRight={10} justifyContent="center">
        <HeaderBackButton
          marginRight={5}
          onPress={() => {
            navigation?.goBack();
          }}>
          <HeaderIcon tintColor={Colors.white} source={Images.arrow_back} />
        </HeaderBackButton>
        <HeaderTitle
          marginLeft={10}
          style={commonStyles.flex}
          textTransform={'uppercase'}
          latterSpacing={1.5}
          numberOfLines={1}>
          {params?.eventData?.item?.name}
        </HeaderTitle>
      </HeaderContainer>
    );
  };

  const registerEventBottomSheet = () => {
    return (
      <BottomSheetModal
        onCancelModal={() => onHandleRegisterEventModel(false)}
        isHorizontalLine={false}
        modalVisible={isVisibleRegisterModel}>
        <ViewCommon flex={1} marginLeft={15} marginRight={15}>
          <ViewCommon marginBottom={15} flexDirection={'row'}>
            <TextView
              size={19}
              fontFamily={Fonts.fonts.HankenGroteskMedium}
              color={Colors.white}>
              {'Fill the details'}
            </TextView>
            <TouchableOpacity onPress={() => onHandleRegisterEventModel(false)}>
              <IconImage
                resizeMode={'contain'}
                height={15}
                width={15}
                source={{uri: Images.cross}}
              />
            </TouchableOpacity>
          </ViewCommon>
          <UserDetailTextInput
            placeholder="Enter your name"
            placeholderTextColor={Colors.gray6}
            keyboardType="default"
            returnKeyType="next"
            onChangeText={setUserName}
            value={isUserName}
          />
          <UserDetailTextInput
            placeholder="Enter your email"
            placeholderTextColor={Colors.gray6}
            keyboardType="email-address"
            returnKeyType="next"
            onChangeText={setUserEmail}
            value={isUserEmail}
          />
          <UserDetailTextInput
            placeholder="Enter your phone number"
            placeholderTextColor={Colors.gray6}
            keyboardType="default"
            returnKeyType="done"
            onChangeText={setUserPhone}
            value={isUserPhone}
          />
          <VerifyTouchable
            position="static"
            onPress={onHandleEventRegisterPress}>
            <TextView size={17} letterSpacing={0.5}>
              {'Register'}
            </TextView>
          </VerifyTouchable>
        </ViewCommon>
      </BottomSheetModal>
    );
  };

  return (
    <SafeAreaContView>
      {renderHeader()}
      {registerEventBottomSheet()}
      <ScrollView style={styles.scrollViewStyle}>
        <EventImageView source={Images[params?.eventData?.item?.image]} />
        <TextView
          fontFamily={Fonts.fonts.HankenGroteskRegular}
          size={17}
          marginLeft={10}
          marginTop={10}>
          {params?.eventData?.item?.longDesc + ''}
        </TextView>
      </ScrollView>
      <RegisterTouchable onPress={onHandleRegisterButtonPress}>
        <TextView size={18} fontFamily={Fonts.fonts.HankenGroteskMedium}>
          {'Register Event'}
        </TextView>
      </RegisterTouchable>
    </SafeAreaContView>
  );
}
