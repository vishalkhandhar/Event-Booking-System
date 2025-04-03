import React from 'react';
import {Platform, StatusBar, View, SafeAreaView} from 'react-native';
// Lib
import Modal from 'react-native-modal';

import {
  BottomSheetContainer,
  ModalHorizontalLine,
  styles,
} from './BottomSheetModalStyle';

import Colors from '../../../Theme/Colors';
import {ViewCommon} from '../../../Theme/commonStyle';
import {commonConstant} from '../../../Theme/Constants';
// import { Image } from 'react-native-reanimated/lib/typescript/Animated';

export default function BottomSheetModal(props: BottomSheetModalProps) {
  const {
    modalVisible = false,
    isHorizontalLine = true,
    onCancelModal,
    children,
    backdropOpacity,
    isBackdropPress = true,
    heightPercentage = 0,
    paddingForTop = 0,
    opacityColor = Colors.AppBackgroundColor,
  } = props;

  const onPressCancel = () => {
    if (isBackdropPress) {
      if (onCancelModal) {
        onCancelModal();
      }
    }
  };

  return (
    <ViewCommon>
      <Modal
        isVisible={modalVisible}
        animationIn={'slideInUp'}
        animationOut={'slideOutDown'}
        backdropColor={Colors.blackOpacity50}
        onBackdropPress={onPressCancel}
        onBackButtonPress={onPressCancel}
        style={[
          styles.modalContainerStyle,
          !heightPercentage && heightPercentage == 0
            ? {}
            : {height: heightPercentage},
        ]}
        deviceWidth={commonConstant.scrWidth}
        deviceHeight={commonConstant.scrHeight}
        animationInTiming={commonConstant.animTime300}
        animationOutTiming={commonConstant.animTime300}
        onModalHide={onPressCancel}
        avoidKeyboard={false}
        backdropOpacity={backdropOpacity}
        statusBarTranslucent={Platform.OS !== 'android'}>
        <StatusBar
          barStyle={'light-content'}
          backgroundColor={Colors.AppBackgroundColorSec}
        />
        <SafeAreaView style={styles.safeAreaViewStyle}>
          <BottomSheetContainer paddingTop={paddingForTop}>
            {isHorizontalLine && <ModalHorizontalLine />}
            {isBackdropPress && <View />}

            {children}
          </BottomSheetContainer>
        </SafeAreaView>
      </Modal>
    </ViewCommon>
  );
}

interface BottomSheetModalProps {
  isShowCloseButton?: boolean;
  modalVisible: boolean;
  backdropOpacity?: number;
  onCancelModal?: () => void;
  onPressBack?: () => void;
  onSwipeCompleteModal?: () => void;
  onPressOpenModal?: () => void;
  children?: string | JSX.Element;
  title?: string;
  isBackButton?: boolean;
  isHorizontalLine?: boolean;
  isBackdropPress?: boolean;
  isHeightFull?: boolean;
  isCloseButton?: boolean;
  heightPercentage?: number | `${number}%`;
  paddingForTop?: number;
  opacityColor?: string;
}
