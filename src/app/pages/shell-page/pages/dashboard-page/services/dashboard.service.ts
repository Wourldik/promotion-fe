import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ArticlePreview } from '@shared/models';
import { IArticlePreviewBackend } from '../../../../../shared/intefaces';

@Injectable()
export class DashboardService {
  private articlesCollection: AngularFirestoreCollection<IArticlePreviewBackend>;

  constructor(private firestore: AngularFirestore) {
    this.articlesCollection =
      firestore.collection<IArticlePreviewBackend>('articles');
  }

  getArticles(): Observable<ArticlePreview[]> {
    return this.articlesCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          return ArticlePreview.fromBackendFactory({
            ...a.payload.doc.data(),
            id: a.payload.doc.id,
          }) as ArticlePreview;
        });
      })
    );
  }

  deleteArticle(articleId: string): Promise<void> {
    return this.articlesCollection.doc(articleId).delete()
      .then(() => {
        console.log('Article deleted successfully!');
      })
      .catch((error) => {
        console.error('Error deleting article:', error);
      });
  }
}
