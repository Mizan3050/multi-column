import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageToPdfComponent } from './image-to-pdf/image-to-pdf.component';
import { TableTreeComponent } from './table-tree/table-tree.component';

const routes: Routes = [
  {
    path: 'image-to-pdf',
    component: ImageToPdfComponent
  },
  {
    path: 'table-tree',
    component: TableTreeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
