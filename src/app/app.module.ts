import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { ImageToPdfComponent } from './image-to-pdf/image-to-pdf.component';
import { TableTreeComponent } from './table-tree/table-tree.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { RxjsComponent } from './rxjs/rxjs.component';
import { JsComponent } from './js/js.component';
import { EmailTemplatesComponent } from './email-templates/email-templates.component';
import { PipesModule } from './pipes/pipes.module';

@NgModule({
  declarations: [
    AppComponent,
    ImageToPdfComponent,
    TableTreeComponent,
    RxjsComponent,
    JsComponent,
    EmailTemplatesComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    PipesModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
