import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SQLite } from '@ionic-native/sqlite';


import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { PalestraPage } from '../pages/palestra/palestra';
import { PalestrasPage } from '../pages/palestras/palestras';
import { PalestrantePage } from '../pages/palestrante/palestrante';
import { PalestrantesPage } from '../pages/palestrantes/palestrantes';

import { ServiceProvider } from '../providers/service/service';
import { SqliteHelperService } from '../providers/sqlite-helper/sqlite-helper.service';
import { PalestranteService } from '../providers/palestrante/palestrante.service';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PalestraPage,
    PalestrasPage,
    PalestrantePage,
    PalestrantesPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
      ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PalestraPage,
    PalestrasPage,
    PalestrantePage,
    PalestrantesPage    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PalestranteService,      
    SQLite,
    SqliteHelperService,
    ServiceProvider
  ]
  
  
})
export class AppModule {}
