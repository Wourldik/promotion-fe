import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/shell-page/shell-page.module').then(
        m => m.ShellPageModule
      ),
    runGuardsAndResolvers: 'always',
  },
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
      {
        path: 'terms-and-conditions',
        loadChildren: () =>
          import(
            './pages/terms-and-conditions-page/terms-and-conditions-page.module'
          ).then(m => m.TermsAndConditionsPageModule),
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
