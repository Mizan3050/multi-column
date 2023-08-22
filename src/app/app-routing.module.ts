import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageToPdfComponent } from './image-to-pdf/image-to-pdf.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
