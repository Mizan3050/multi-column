import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailTemplatesComponent } from './email-templates/email-templates.component';
import { ImageToPdfComponent } from './image-to-pdf/image-to-pdf.component';
import { JsComponent } from './js/js.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { TableTreeComponent } from './table-tree/table-tree.component';

const routes: Routes = [
  {
    path: 'image-to-pdf',
    component: ImageToPdfComponent
  },
  {
    path: 'table-tree',
    component: TableTreeComponent
  },
  {
    path: 'rxjs',
    component: RxjsComponent
  },
  {
    path: 'js',
    component: JsComponent
  },
  {
    path: 'email-templates',
    component: EmailTemplatesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
