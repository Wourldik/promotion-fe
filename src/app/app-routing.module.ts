import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login',
      },
      {
        path: 'login',
        loadChildren: () =>
          import('./pages/login-page/login-page.module').then(
            m => m.LoginPageModule
          ),
      },
      {
        path: 'password-recovery',
        loadChildren: () =>
          import(
            './pages/password-recovery-page/password-recovery-page.module'
          ).then(m => m.PasswordRecoveryPageModule),
      },
      {
        path: 'sign-up',
        loadChildren: () =>
          import('./pages/sign-up-page/sign-up-page.module').then(
            m => m.SignUpPageModule
          ),
      },
    ],
  },
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
