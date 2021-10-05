import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'style-guide-page',
    loadChildren: () =>
      import('./pages/style-guide-page/style-guide-page.module').then(
        m => m.StyleGuidePageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
