import { ICollectionInfo, ICollectionsAllResp } from '@/types/api';

export default (resp: ICollectionsAllResp[]): ICollectionInfo[] => {
  return resp.map((respCollection) => {
    const { id, title, description, imgUrl, theme, user } = respCollection;
    return {
      id,
      title,
      description,
      theme: {
        en: theme.en_name,
        ru: theme.ru_name,
      },
      imgUrl,
      username: user.name,
    };
  });
};
