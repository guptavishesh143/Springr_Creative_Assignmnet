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
  PermissionsAndroid,
} from 'react-native';
import {useState, useEffect} from 'react';
import RNFetchBlob from 'rn-fetch-blob';


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

  const REMOTE_IMAGE_PATH =
    'https://images.unsplash.com/photo-1554731617-8eafa9975365?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fG5ld3NwYXBlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';

  const checkPermission = async () => {
    // Function to check the platform
    // If iOS then start downloading
    // If Android then ask for permission

    if (Platform.OS === 'ios') {
      downloadImage();
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission Required',
            message: 'App needs access to your storage to download Photos',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          // Once user grant the permission start downloading
          console.log('Storage Permission Granted.');
          downloadImage();
        } else {
          // If permission denied then show alert
          alert('Storage Permission Not Granted');
        }
      } catch (err) {
        // To handle permission related exception
        console.warn(err);
      }
    }
  };

  const downloadImage = () => {
    // Main function to download the image

    // To add the time suffix in filename
    let date = new Date();
    // Image URL which we want to download
    let image_URL = REMOTE_IMAGE_PATH;
    // Getting the extention of the file
    let ext = getExtention(image_URL);
    ext = '.' + ext[0];
    // Get config and fs from RNFetchBlob
    // config: To pass the downloading related options
    // fs: Directory path where we want our image to download
    const {config, fs} = RNFetchBlob;
    let PictureDir = fs.dirs.PictureDir;
    let options = {
      fileCache: true,
      addAndroidDownloads: {
        // Related to the Android only
        useDownloadManager: true,
        notification: true,
        path:
          PictureDir +
          '/image_' +
          Math.floor(date.getTime() + date.getSeconds() / 2) +
          ext,
        description: 'Image',
      },
    };
    config(options)
      .fetch('GET', image_URL)
      .then(res => {
        // Showing alert after successful downloading
        console.log('res -> ', JSON.stringify(res));
        alert('Image Downloaded Successfully.');
      });
  };

  const getExtention = filename => {
    // To get the file extension
    return /[.]/.exec(filename) ? /[^.]+$/.exec(filename) : undefined;
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
                uri: REMOTE_IMAGE_PATH,
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
                onPress={checkPermission}
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
