import {FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import commonStyles, {
  HeaderContainer,
  HeaderTitle,
  SafeAreaContView,
  TextView,
} from '../../Theme/commonStyle';
import eventJson from './eventJson.json';
import {EventImageView, FlatlistParent, styles} from './HomeScreenStyle';
import LinearGradient from 'react-native-linear-gradient';
import Images from '../../Theme/images';
import Colors from '../../Theme/Colors';
import Fonts from '../../Theme/Fonts';
import ScreenName from '../../Theme/ScreenName';
export default function HomeScreen(props: {
  navigation: any;
  route: {params: any};
}) {
  const navigation = props?.navigation;
  const [arrayEventsList] = useState(eventJson);

  const renderHeader = () => {
    return (
      <HeaderContainer justifyContent="center">
        <HeaderTitle
          marginLeft={10}
          style={commonStyles.flex}
          textTransform={'uppercase'}
          latterSpacing={1.5}
          numberOfLines={1}>
          {'Upcoming Events'}
        </HeaderTitle>
      </HeaderContainer>
    );
  };

  function onHandlePressEvent(item: any) {
    navigation?.navigate(ScreenName.EventDetailScreen, {eventData: item});
  }

  function renderEventItems(item: {
    item: {
      image: string | number;
      name:
        | string
        | number
        | bigint
        | boolean
        | React.ReactElement<unknown, string | React.JSXElementConstructor<any>>
        | Iterable<React.ReactNode>
        | React.ReactPortal
        | Promise<
            | string
            | number
            | bigint
            | boolean
            | React.ReactPortal
            | React.ReactElement<
                unknown,
                string | React.JSXElementConstructor<any>
              >
            | Iterable<React.ReactNode>
            | null
            | undefined
          >
        | null
        | undefined;
      shortDesc:
        | string
        | number
        | bigint
        | boolean
        | React.ReactElement<unknown, string | React.JSXElementConstructor<any>>
        | Iterable<React.ReactNode>
        | React.ReactPortal
        | Promise<
            | string
            | number
            | bigint
            | boolean
            | React.ReactPortal
            | React.ReactElement<
                unknown,
                string | React.JSXElementConstructor<any>
              >
            | Iterable<React.ReactNode>
            | null
            | undefined
          >
        | null
        | undefined;
    };
  }) {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => onHandlePressEvent(item)}>
        <EventImageView
          imageStyle={styles.imageStyle}
          source={Images[item?.item?.image]}>
          <LinearGradient
            colors={[
              Colors.transparent,
              Colors.blackOpacity90,
              Colors.AppBackgroundColorSec,
            ]}
            style={styles.linearGradient}>
            <TextView
              fontFamily={Fonts.fonts.HankenGroteskBold}
              size={17}
              marginLeft={10}
              marginTop={10}>
              {item?.item?.name}
            </TextView>
            <TextView
              fontFamily={Fonts.fonts.HankenGroteskRegular}
              size={17}
              marginLeft={10}
              marginTop={10}>
              {item?.item?.shortDesc}
            </TextView>
          </LinearGradient>
        </EventImageView>
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaContView>
      {renderHeader()}
      <FlatlistParent>
        <FlatList
          style={commonStyles.flatListPadding}
          keyboardShouldPersistTaps={'handled'}
          showsHorizontalScrollIndicator={false}
          initialNumToRender={50}
          data={arrayEventsList}
          keyExtractor={(_item, index) => index.toString()}
          renderItem={renderEventItems}
        />
      </FlatlistParent>
    </SafeAreaContView>
  );
}
