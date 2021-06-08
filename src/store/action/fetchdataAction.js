import {FETCHDATA} from './type';
import {TODAYSNEWS} from '../../utils/Config';
import GetRequest from '../../apis/GetRequest';

export const fetchNewsData = () => async (dispatch, getstate) => {
  try {
    const NewsData = await GetRequest(TODAYSNEWS, {
      // limit: `${startIndex},${endIndex}`,
    });

    var DataofNews = NewsData.sources;
    var ContentDataList = [];
    DataofNews.forEach(content => {
      ContentDataList.push({
        id: content.id,
        description: `${content.description}`,
        url: `${content.url}`,
        category: content.category,
        language: `${content.language}`,
        country: `${content.country}`,
      });
    });

    console.log('DataListDataListDataListDataList', ContentDataList);
    dispatch({
      type: FETCHDATA,
      payload: {
        ContentDataList,
        isloading: true,
      },
    });
  } catch (error) {
    console.log(`error`, error);
  }
};
