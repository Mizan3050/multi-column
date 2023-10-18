import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeHtmlPipe } from './safe-html.pipe';
import { ScaleTemplatePipe } from './scale-template.pipe';



@NgModule({
  declarations: [SafeHtmlPipe, ScaleTemplatePipe],
  imports: [
    CommonModule
  ],
  exports: [
    SafeHtmlPipe,
    ScaleTemplatePipe
  ]
})
export class PipesModule { }
