import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Button,
  FlatList,
  StatusBar,
  Platform,
  TouchableOpacity,
  Share,
  Linking,
  ScrollView,
} from 'react-native';
import {useState, useEffect} from 'react';

function DetailScreen({navigation, route}) {
  const Data = route.params.Dataobj;
  const Desp = Data.description;
  const NewUrl = Data.url;

  useEffect(() => {}, []);

  const onShareAfterPlantation = async () => {
    try {
      const result = await Share.share({
        Title: 'Springlr Assignmnet News App',
        message: `Check out this Awesome News on ${NewUrl}`,
      });
      if (result.action === Share.sharedAction) {
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <View style={styles.MainContiner}></View>

      <View style={styles.container}>
        <ScrollView>
          <View style={{alignSelf: 'center', paddingBottom: 22}}>
            <Text
              style={{textAlign: 'center', fontSize: 32, fontWeight: 'bold'}}>
              News
            </Text>
          </View>
          <View style={{paddingHorizontal: 12}} activeOpacity={0.7}>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1554731617-8eafa9975365?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fG5ld3NwYXBlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
              }}
              style={{height: 200, width: '100%'}}
            />
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 10,
              }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('DetailScreen', {
                    Dataobj: item,
                  });
                }}
                activeOpacity={0.8}
                style={{alignContent: 'center', borderWidth: 1, width: 100}}>
                <Text style={styles.title}>Save Image</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.Desp}>{Desp}</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 10,
            }}>
            <View>
              <Text>Billy Bambrough</Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  onShareAfterPlantation();
                }}
                activeOpacity={0.7}>
                <Text>Billy Bambrough</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text>6 July 2020</Text>
            </View>
          </View>
          <View>
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
            <Text style={{paddingVertical: 6}}>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Text>
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  MainContiner: {
    ...Platform.select({
      ios: {
        height: 20,
      },
      android: {
        height: 0,
      },
    }),
    backgroundColor: 'transparent',
    width: '100%',
  },
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    paddingHorizontal: 12,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 4,
    textAlign: 'center',
  },
  Desp: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});
export default DetailScreen;
