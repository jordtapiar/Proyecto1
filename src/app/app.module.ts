import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage-angular';
import { HttpClientModule } from '@angular/common/http';
import { BarcodeScanner } from
'@awesome-cordova-plugins/barcode-scanner/ngx';
import{EmailComposer} from 
'@awesome-cordova-plugins/email-composer/ngx';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeApp as initializeApp_alias, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, IonicStorageModule.forRoot(),HttpClientModule, provideFirebaseApp(() => initializeApp({"projectId":"registrapp-9cf94","appId":"1:797128012104:web:6576632bb3a7720886837d","databaseURL":"https://registrapp-9cf94-default-rtdb.firebaseio.com","storageBucket":"registrapp-9cf94.appspot.com","apiKey":"AIzaSyARBVixRyTU8TiHGkvs5CKrsi88-fwMM3U","authDomain":"registrapp-9cf94.firebaseapp.com","messagingSenderId":"797128012104","measurementId":"G-JV9DJW2PKT"})), provideAuth(() => getAuth())],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },BarcodeScanner, EmailComposer],
  bootstrap: [AppComponent],
})
export class AppModule {}
const firebaseConfig = {
  apiKey: "AIzaSyARBVixRyTU8TiHGkvs5CKrsi88-fwMM3U",
  authDomain: "registrapp-9cf94.firebaseapp.com",
  projectId: "registrapp-9cf94",
  storageBucket: "registrapp-9cf94.appspot.com",
  messagingSenderId: "797128012104",
  appId: "1:797128012104:web:6576632bb3a7720886837d",
  measurementId: "G-JV9DJW2PKT"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
