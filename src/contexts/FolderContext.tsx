import React, {FC, useState} from 'react';
import {
  listFiles,
  loadMoreFiles,
  downloadFile as download,
} from '../api/Dropbox';
import {parseFiles} from '../api/utils';
import RNFS from 'react-native-fs';

interface FolderContextInterface {
  hasMore: boolean;
  folder: any[];
  loadFiles: () => void;
  loadFolder: (url: string) => void;
  loadMore: () => void;
  getFile: (index: number) => any;
  downloadFile: (path: string) => void;
  count: number;
  loading: boolean;
  folderName: string;
}
export const FolderContext = React.createContext({} as FolderContextInterface);

export const FolderProvider: FC = ({children}) => {
    const [folderName, setFolderName] = useState('');
  const [folder, setFolder] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [cursor, setCursor] = useState('');
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  async function loadFiles() {
    setLoading(true);
    try {
      const {cursor, entries, has_more} = await listFiles();
      setHasMore(has_more);
      if (has_more) {
        setCursor(cursor);
      }
      setCount(entries.length);
      setFolder(parseFiles(entries));
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  async function loadFolder(url) {
    setLoading(true);
    try {
      setFolderName(url);
      const {cursor, entries, has_more} = await listFiles(url);
      setHasMore(has_more);
      if (has_more) {
        setCursor(cursor);
      }
      setCount(entries.length);
      setFolder(parseFiles(entries));
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  const loadMore = async () => {
    setLoading(true);
    try {
      const {
        cursor: newCursor,
        entries,
        has_more,
      } = await loadMoreFiles(cursor);

      setHasMore(has_more);
      if (has_more) {
        setCursor(newCursor);
      }
      setCount(count + entries.length);
      setFolder([...folder, ...parseFiles(entries)]);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const getFile = (_data, index) => {
    return folder[index];
  };

  const downloadFile = async path => {
    const pathLocal = `${RNFS.DocumentDirectoryPath}${path}`;
    setLoading(true);
    try {
      const res = await download(path);

      RNFS.writeFile(pathLocal, JSON.stringify(res.fileBlob), 'base64').then(() => {
        console.log('FILE WRITTEN!');
      });

    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <FolderContext.Provider
      value={{
        hasMore,
        folder,
        loadFiles,
        loadMore,
        getFile,
        loadFolder,
        downloadFile,
        folderName,
        count,
        loading,
      }}>
      {children}
    </FolderContext.Provider>
  );
};

export default FolderProvider;
