import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

import { ArticlePreview } from '@shared/models';
import { IArticleFormValue } from '../shared/create-article-form';
import { ArticleCategory } from '@shared/enums';

@Injectable()
export class CreateArticleService {
  private articlesCollection: AngularFirestoreCollection<ArticlePreview>;

  constructor(private firestore: AngularFirestore) {
    this.articlesCollection = firestore.collection<ArticlePreview>('articles');
  }

  addArticle(newArticle: IArticleFormValue): Promise<void> {
    const article: ArticlePreview = {
      ...newArticle,
      date: new Date(),
      authorName: '',
      authorImage: '',
      category: ArticleCategory.MEDIA,
    };

    return this.articlesCollection
      .add(article)
      .then(() => {
        console.log('Article added successfully!');
      })
      .catch(error => {
        console.error('Error adding article:', error);
      });
  }
}
