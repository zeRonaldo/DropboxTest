import {Dropbox} from 'dropbox';
import {DROPBOX_ACCESS_TOKEN} from '@env';

const dbx = new Dropbox({
  accessToken: DROPBOX_ACCESS_TOKEN,
  fetch,
});

export const checkApp = async (testString: string) =>
  await (
    await dbx.checkUser({query: testString})
  ).result;

export const listFiles = async (url = '') => {
  const result = await (await dbx.filesListFolder({path: url})).result;
  return result;
};

export const downloadFile = async (path: string) => {
  const result = await (await dbx.filesDownload({path})).result;
  return result;
};

export const loadMoreFiles = async (cursor: string) => {
  const result = await (await dbx.filesListFolderContinue({cursor})).result;
  return result;
};
