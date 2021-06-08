import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  FlatList,
  StatusBar,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {useState, useEffect} from 'react';
import {TODAYSNEWS} from '../utils/Config';
import GetRequest from '../apis/GetRequest';
//Redux
import {connect} from 'react-redux';
import {fetchNewsData} from '../store/action/fetchdataAction';

const HomeScreen = ({
  navigation,
  fetchNewsData,
  fetchdataReducer: {DataList, isloading},
}) => {
  const [DataRender, setDataRender] = useState([]);
  const [Loader, setLoader] = useState(true);

  useEffect(() => {
    // CallTodayNewApistartIndex();
    fetchNewsData();
    console.log('isloading', isloading);
    console.log('DataList', DataList);
  }, []);

  async function CallTodayNewApistartIndex() {
    const NewsData = await GetRequest(TODAYSNEWS, {
      // limit: `${startIndex},${endIndex}`,
    });

    var DataofNews = NewsData.sources;
    // console.log(
    //   'NewsDataNewsDataNewsDataNewsDataNewsData',
    //   JSON.stringify(DataofNews),
    // );
    var DataList = [];
    DataofNews.forEach(content => {
      DataList.push({
        id: content.id,
        description: content.description,
        url: `${content.url}`,
        category: content.category,
        language: `${content.language}`,
        country: `${content.country}`,
      });
    });
    setDataRender(DataList);
    setLoader(false);
  }

  return (
    <>
      <StatusBar animated={true} backgroundColor={'white'} />
      {Loader == true ? (
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
          }}>
          <View
            style={{
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
            }}></View>
          <View>
            <FlatList
              contentContainerStyle={{
                paddingHorizontal: 20,
                justifyContent: 'center',
                paddingBottom: 20,
              }}
              ListHeaderComponent={
                <View style={{alignSelf: 'center', paddingBottom: 22}}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 32,
                      fontWeight: 'bold',
                    }}>
                    News
                  </Text>
                </View>
              }
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              scrollEnabled={true}
              data={DataRender}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={{paddingBottom: 24}}
                  activeOpacity={0.7}
                  onPress={() => {
                    navigation.navigate('DetailScreen', {
                      Dataobj: item,
                    });
                  }}>
                  <Image
                    source={{
                      uri: 'https://images.unsplash.com/photo-1554731617-8eafa9975365?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fG5ld3NwYXBlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                    }}
                    style={{height: 200, width: '100%'}}
                  />
                  <Text style={styles.title}>{item.description}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </View>
      ) : (
        <View
          style={{
            justifyContent: 'center',
            alignContent: 'center',
            height: '100%',
            width: '100%',
            backgroundColor: 'white',
          }}>
          <Image
            source={require('../assets/loader.gif')}
            style={{
              height: '50%',
              width: '80%',
            }}
          />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
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
  },
});

const mapStatetoProps = state => ({
  fetchdataReducer: state.fetchdataReducer,
});

export default connect(mapStatetoProps, {fetchNewsData})(HomeScreen);
//export default HomeScreen;
