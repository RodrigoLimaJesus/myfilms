import React, { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';

import Loading from '../../components/Loading';
import AppContext from '../../context/AppContext';
import handleLists from '../../services/handleLists';
import Description from './components/Description';
import VideoOrThumb from './components/VideoOrThumb';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import List from '../../components/List';

export default function Details() {
  const { id, type } = useParams();
  const { appLanguage } = useContext(AppContext);
  const [isMounted, setIsMounted] = useState(false);
  const [videoKey, setVideoKey] = useState('');
  const [details, setDetails] = useState({});
  const [similar, setSimilar] = useState([]);

  useEffect(() => {
    async function getDetailAndVideos() {
      const options = { id, type, language: appLanguage, page: 1 };

      const [detailsInfo, videosInfo, similarInfo] = await Promise.all([
        handleLists.getDetails(options),
        handleLists.getVieos(options),
        handleLists.getSimilar(options),
      ]);

      const officialVideosInfo = videosInfo.filter((info) => info.official);
      let firstKey;

      if (officialVideosInfo.length >= 1) {
        firstKey = officialVideosInfo[0].key;
      }

      setDetails(detailsInfo);
      setVideoKey(firstKey);
      setSimilar(similarInfo);
      setIsMounted(true);
    }

    if (!isMounted) {
      getDetailAndVideos();
    }
  }, [appLanguage, id, type, isMounted]);

  useEffect(() => setIsMounted(false), [id]);

  return isMounted ? (
    <div>
      <Header />
      <VideoOrThumb details={details} videoKey={videoKey} />
      <Description details={details} />
      <List
        listContent={similar}
        type={type}
        listName="Talvez você também goste"
        onClickInDetails={() => setIsMounted(false)}
      />
      <Footer />
    </div>
  ) : (
    <Loading />
  );
}
