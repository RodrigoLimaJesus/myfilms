import React from 'react';

import { useParams } from 'react-router-dom';

export default function Details() {
  return <div>{console.log(useParams())}</div>;
}
