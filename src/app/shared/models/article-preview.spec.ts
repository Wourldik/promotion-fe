import { ArticlePreview } from './article-preview';
import {IArticlePreview} from "../intefaces";

describe('Article', () => {
  it('should create an instance', () => {
    expect(new ArticlePreview({} as IArticlePreview)).toBeTruthy();
  });
});
