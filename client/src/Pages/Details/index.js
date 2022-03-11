import React, { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';

import AppContext from '../../context/AppContext';
import handleLists from '../../services/handleLists';

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

      setDetails(detailsInfo);
      console.log(detailsInfo);
      const officialVideosInfo = videosInfo.filter((info) => info.official);
      let firstKey;

      if (officialVideosInfo.length >= 1) {
        firstKey = officialVideosInfo[0].key;
      }
      setVideoKey(firstKey);
    }

    if (!isMounted) {
      getDetailAndVideos();
      setIsMounted(true);
    }
  }, [appLanguage, id, type, isMounted]);

  return (
    isMounted && (
      <div>
        <iframe
          width="320"
          height="240"
          src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1&loop=1`}
          title={details.title}
        >
          Your browser does not support iframes.
        </iframe>
      </div>
    )
  );
}
