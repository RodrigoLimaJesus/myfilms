import React, { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';

import AppContext from '../../context/AppContext';
import handleLists from '../../services/handleLists';
import Description from './components/Description';
import VideoOrThumb from './components/VideoOrThumb';

export default function Details() {
  const { id, type } = useParams();
  const { appLanguage } = useContext(AppContext);
  const [isMounted, setIsMounted] = useState(false);
  const [videoKey, setVideoKey] = useState('');
  const [details, setDetails] = useState({});

  useEffect(() => {
    async function getDetailAndVideos() {
      const options = { id, type, language: appLanguage };

      const [detailsInfo, videosInfo] = await Promise.all([
        handleLists.getDetails(options),
        handleLists.getVieos(options),
      ]);

      const officialVideosInfo = videosInfo.filter((info) => info.official);
      let firstKey;

      if (officialVideosInfo.length >= 1) {
        firstKey = officialVideosInfo[0].key;
      }

      setDetails(detailsInfo);
      setVideoKey(firstKey);
      setIsMounted(true);
    }

    if (!isMounted) {
      getDetailAndVideos();
    }
  }, [appLanguage, id, type, isMounted]);

  return (
    isMounted && (
      <div>
        <VideoOrThumb details={details} videoKey={videoKey} />
        <Description details={details} />
      </div>
    )
  );
}
