import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const RemoteDetail = ({route}) => {
  const {itemData, itemStatus} = route.params;
  return (
    <>
      <View style={styles.mainView}>
        <FontAwesome5
          name="clipboard-list"
          size={200}
          color={'tomato'}
          style={{paddingTop: 90}}
        />
        <View style={styles.dataStyle}>
          <Text
            style={{
              padding: 10,
              fontSize: 30,
              fontFamily: 'RobotoMono-Bold',
              color: 'tomato',
            }}>
            Title: {itemData}
          </Text>
          <Text
            style={{
              padding: 10,
              fontSize: 30,
              fontFamily: 'RobotoMono-Bold',
              color: 'tomato',
            }}>
            Status: {itemStatus}
          </Text>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  dataStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});
export default RemoteDetail;
