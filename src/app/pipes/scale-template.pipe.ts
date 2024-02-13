import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'scaleTemplate'
})
export class ScaleTemplatePipe implements PipeTransform {

  transform(template: HTMLDivElement): number {
    console.log(template.getBoundingClientRect());
    if (template.offsetHeight > template.offsetWidth) {
      return 420 / template.offsetHeight;
    } else if (template.offsetWidth > template.offsetHeight) {
      return 260 / template.offsetWidth;
    } else 1
  }

}
