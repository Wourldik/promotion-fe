import {ArticleCategory} from "../enums";

export interface IArticlePreview {
  category: ArticleCategory | null;
  title: string;
  descriptions: string;
  date: Date | null;
  authorName: string;
  authorImage: string | null;
  articleImage: string | null;
  id?: string;
}
