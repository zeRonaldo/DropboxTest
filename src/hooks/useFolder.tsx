import {useContext} from 'react';
import {FolderContext} from '../contexts/FolderContext';

const useFolder = () => {
  return useContext(FolderContext);
};

export default useFolder;
