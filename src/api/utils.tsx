import {ItemEntry} from '../utils.tsx/types';

export const formatBytes = (bytes: number, decimals = 2): string => {
  if (bytes === 0) {
    return '0 Bytes';
  }

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

export const formatDate = (date: string): string => {
  const d = new Date(date);
  return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
};

export const parseFiles = (files: ItemEntry[]): any => {
  return files.map(file => ({
    modified: formatDate(file.client_modified),
    name: file.name,
    id: file.id,
    path: file.path_display,
    size: formatBytes(file.size),
    isFolder: file['.tag'] === 'folder',
    extension: file.name.split('.').pop(),
  }));
};
