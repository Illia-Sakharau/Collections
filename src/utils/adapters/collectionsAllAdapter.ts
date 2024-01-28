import { ICollectionInfo, ICollectionsAllResp } from '@/types/api';

export default (resp: ICollectionsAllResp[]): ICollectionInfo[] => {
  return resp.map((respCollection) => {
    const { id, title, description, image_url, theme, user } = respCollection;
    return {
      id,
      title,
      description,
      theme: {
        en: theme.en_name,
        ru: theme.ru_name,
      },
      imgUrl: image_url,
      username: user.name,
    };
  });
};
