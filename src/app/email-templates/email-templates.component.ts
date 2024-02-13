import { Component } from '@angular/core';
import { templateTextArray } from '../constants/email-templates.constant';


export function unescapeQuotes(templateText: string) {
  return templateText?.replace(/\\"/g, '"') ?? '';
}
@Component({
  selector: 'app-email-templates',
  templateUrl: './email-templates.component.html',
  styleUrls: ['./email-templates.component.scss']
})
export class EmailTemplatesComponent {

  templatesArray = templateTextArray.map(template => {
    return unescapeQuotes(template)
  });


}
