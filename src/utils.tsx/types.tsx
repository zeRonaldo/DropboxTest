export type FileListParsed = {
  modified: string;
  name: string;
  id: string;
  path: string;
  size: string;
  extension: string;
  isFolder: boolean;
};

export type ItemEntry = {
  isDownloadable: boolean;
  isFolder: boolean;
  id: string;
  path_display: string;
  path_lower: string;
  name: string;
  server_modified: string;
  size: number;
  rev: string;
  client_modified: string;
  content_hash: string;
};
