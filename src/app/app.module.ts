import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SlickCarouselComponent, SlickCarouselModule } from 'ngx-slick-carousel';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './home/slider/slider.component';
import { FavplaylistComponent } from './favplaylist/favplaylist.component';
import { LoginComponent } from './login/login.component';
import { DarkmodeComponent } from './darkmode/darkmode.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GenresMainComponent } from './header/genres-main/genres-main.component';
import { RockComponent } from './header/genres-main/rock/rock.component';
import { RomanticComponent } from './header/genres-main/romantic/romantic.component';
import { SadComponent } from './header/genres-main/sad/sad.component';
import { AppRoutingModule } from './app-routing.module';
import { NewHomeComponent } from './new-home/new-home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FormsModule } from '@angular/forms';







@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SliderComponent,
    FavplaylistComponent,
    LoginComponent,
    DarkmodeComponent,
    SubscriptionComponent,
    HeaderComponent,
    FooterComponent,
    GenresMainComponent,
    RockComponent,
    RomanticComponent,
    SadComponent,
    NewHomeComponent,
    SignUpComponent,
    SubscribeComponent,
    NewsletterComponent,
    ContactUsComponent,
    
],
  imports: [
    BrowserModule,
    SlickCarouselModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
