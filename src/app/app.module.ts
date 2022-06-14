import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { KontaktComponent } from './kontakt/kontakt.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';
import { HomeComponent } from './home/home.component';
import { FournullfourComponent } from './fournullfour/fournullfour.component';
import { ProjektcardComponent } from './projektcard/projektcard.component';
import { ProjektPostComponent } from './projekt-post/projekt-post.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    KontaktComponent,
    AboutmeComponent,
    PortfolioComponent,
    ImpressumComponent,
    DatenschutzComponent,
    HomeComponent,
    FournullfourComponent,
    ProjektcardComponent,
    ProjektPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
