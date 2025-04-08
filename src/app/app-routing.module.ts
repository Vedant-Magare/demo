import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderNavComponent } from './components/header-nav/header-nav.component';
import { HomeComponent } from './components/home/home.component';
import { FooterBarComponent } from './components/footer-bar/footer-bar.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { UiUxPageComponent } from './components/ui-ux-page/ui-ux-page.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'header-nav', component: HeaderNavComponent },
  { path: 'footer-bar', component: FooterBarComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  // { path: '**', redirectTo: 'login' }, // Default route
  { path: 'ui-ux-page', component: UiUxPageComponent },
  { path: 'register', component: RegistrationFormComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
