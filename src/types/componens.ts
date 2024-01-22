import { ReactElement } from 'react';

export type linkInfo = {
  text: string;
  link: string;
};

export type languageInfo = {
  text: string;
  value: string;
};

export type bulkAction = {
  text: string;
  icon: ReactElement;
  colorScheme?: string;
  action: (itemsID: number[]) => void;
};
