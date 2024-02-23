export type SubtitleItem = {
  title: string;
  description: string[];
};

export type LinkItem={
  label: string;
  url: string;
}

export type TitleItem = {
  title: string;
  blurbs: string[];
  subtitle: SubtitleItem;
  links?: LinkItem[];
};

export interface TitleLayoutProps {
  rootTitle: TitleItem;
  description?: string;
}
