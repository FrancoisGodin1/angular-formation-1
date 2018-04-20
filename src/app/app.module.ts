import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { ClientListComponent } from './client-list/client-list.component';

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { ConfidentialPipe } from './confidential.pipe';
import { CurrencyPipe } from '@angular/common';
import { ClientListRowComponent } from './client-list-row/client-list-row.component';
import { ClientViewComponent } from './client-view/client-view.component';

import { ClientService } from './client.service';
import { ClientAddComponent } from './client-add/client-add.component';
import { ReactiveFormsModule } from '@angular/forms';
registerLocaleData(localeFr, 'fr');
//import { registerLocaleData } from '@angular/common/src/i18n/locale_data';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    ClientListComponent,
    ConfidentialPipe,
    ClientListRowComponent,
    ClientViewComponent,
    ClientAddComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'fr-FR'}, CurrencyPipe, ClientService],
  bootstrap: [AppComponent]

})
export class AppModule { }
