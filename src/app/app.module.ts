import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderNavComponent } from './components/header-nav/header-nav.component';
import { FooterBarComponent } from './components/footer-bar/footer-bar.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { FormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { UiUxPageComponent } from './components/ui-ux-page/ui-ux-page.component';
import { GraphicDesignPageComponent } from './components/graphic-design-page/graphic-design-page.component';
import { WebDesignPageComponent } from './components/web-design-page/web-design-page.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderNavComponent,
    FooterBarComponent,
    LoginComponent,
    ForgotPasswordComponent,
    UiUxPageComponent,
    GraphicDesignPageComponent,
    WebDesignPageComponent,
    RegistrationFormComponent,
    AboutUsComponent,
    ContactUsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
