import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FavplaylistComponent } from './favplaylist/favplaylist.component';
import { GenresMainComponent } from './header/genres-main/genres-main.component';
import { RockComponent } from './header/genres-main/rock/rock.component';
import { RomanticComponent } from './header/genres-main/romantic/romantic.component';
import { SadComponent } from './header/genres-main/sad/sad.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewHomeComponent } from './new-home/new-home.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SubscribeComponent } from './subscribe/subscribe.component';

const appRoutes: Routes=[
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'home',component:NewHomeComponent,children:[

    ]},
    {path:'myfav',component:FavplaylistComponent},
    {path:'genres',component:GenresMainComponent},
    {path:'romantic',component:RomanticComponent},
    {path:'sad',component:SadComponent},
    {path:'rock',component:RockComponent},
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignUpComponent},
    {path:'subscribe',component:SubscribeComponent},
    {path:'newsletter',component:NewsletterComponent},
    {path:'contact-us',component:ContactUsComponent}
    

];
@NgModule({
    imports:
    [RouterModule.forRoot(appRoutes)],
    exports:
    [RouterModule]
})
export class AppRoutingModule{

}