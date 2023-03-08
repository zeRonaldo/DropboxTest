export const Iconography = {
  folder: require('./folder.png'),
  document: require('./document.png'),
  image: require('./image.png'),
  video: require('./video.png'),
  audio: require('./audio.png'),
  compression: require('./zip.png'),
  code: require('./coding.png'),
};

const audioExtensions = ['mp3', 'wav', 'flac', 'aac', 'ogg', 'wma'];
const videoExtensions = ['mp4', 'avi', 'mov', 'wmv', 'flv', 'mkv'];
const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'svg'];
const compressionExtensions = ['zip', 'rar', '7z', 'tar', 'gz', 'bz2'];
const codeExtensions = ['js', 'ts', 'html', 'css', 'py', 'java', 'c', 'cpp'];
const documentExtensions = [
  'doc',
  'docx',
  'pdf',
  'txt',
  'rtf',
  'odt',
  'xls',
  'xlsx',
  'ppt',
  'pptx',
];

const getFileType = (extension: string) => {
  if (audioExtensions.includes(extension)) {
    return 'audio';
  }
  if (videoExtensions.includes(extension)) {
    console.log('video');
    return 'video';
  }
  if (imageExtensions.includes(extension)) {
    return 'image';
  }
  if (compressionExtensions.includes(extension)) {
    return 'compression';
  }
  if (codeExtensions.includes(extension)) {
    return 'code';
  }
  if (documentExtensions.includes(extension)) {
    return 'document';
  }
  return 'folder';
};

export const getIcon = (extension: string) => {
  const source = Iconography[getFileType(extension)];
  return source;
};
