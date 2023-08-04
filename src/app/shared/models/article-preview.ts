import { IArticlePreviewBackend, IArticlePreview } from '../intefaces';
import { ArticleCategory } from '../enums';

export class ArticlePreview implements IArticlePreview {
  articleImage: string | null;
  authorImage: string | null;
  authorName: string;
  category: ArticleCategory | null;
  date: Date | null;
  descriptions: string;
  title: string;

  constructor(obj: Readonly<IArticlePreview>) {
    this.category = obj.category;
    this.date = obj.date;
    this.descriptions = obj.descriptions;
    this.title = obj.title;
    this.articleImage = obj.articleImage;
    this.authorImage = obj.authorImage;
    this.authorName = obj.authorName;
  }

  static fromBackendFactory(
    obj: Readonly<IArticlePreviewBackend>
  ): ArticlePreview {
    return new ArticlePreview({
      title: obj.title,
      date: obj.date ? new Date(obj.date) : null,
      descriptions: obj.descriptions,
      category: obj.category ? (obj.category as ArticleCategory) : null,
      articleImage: obj.articleImage,
      authorName: obj.authorName,
      authorImage: obj.authorImage,
    });
  }
}
