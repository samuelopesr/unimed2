import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MfComponent } from './mf/mf.component';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireModule } from '@angular/fire/compat';

import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { FinalComponent } from './mf/final/final.component';
import { OrcamentoComponent } from './pages/orcamento/orcamento.component';
import { SecUnimedComponent } from './pages/sec-unimed/sec-unimed.component';

@NgModule({
  declarations: [
    AppComponent,
    MfComponent,
    HomeComponent,
    FinalComponent,
    OrcamentoComponent,
    SecUnimedComponent
  ],

  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyC5cApiPQDdvKXW4EqdwAsNozaWyX08KG8',
      authDomain: 'hackaton-unimed-ffff2.firebaseapp.com',
      databaseURL: 'https://hackaton-unimed-ffff2-default-rtdb.firebaseio.com',
      projectId: 'hackaton-unimed-ffff2',
      storageBucket: 'hackaton-unimed-ffff2.appspot.com',
      messagingSenderId: '762283964156',
      appId: '1:762283964156:web:61c090fead76ad73858979',
      measurementId: 'G-2SNL2NXJDC',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
