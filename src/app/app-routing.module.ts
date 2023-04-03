import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageToPdfComponent } from './image-to-pdf/image-to-pdf.component';

const routes: Routes = [
  {
    path: 'image-to-pdf',
    component:ImageToPdfComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
