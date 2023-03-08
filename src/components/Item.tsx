import React from 'react';
import File from './File';
import Folder from './Folder';

const Item = ({data}) => {
  if (data.isFolder) {
    return <Folder data={data} />;
  }
  return <File data={data} />;
};

export default Item;
