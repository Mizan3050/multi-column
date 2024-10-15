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

  lol=`<a routerLink="/image-to-pdf">Image to pdf</a>
  <a routerLink="/table-tree" style="margin-left: 20px">Tree in table</a>
  <a routerLink="/rxjs" style="margin-left: 20px">Rxjs</a>
  <a routerLink="/js" style="margin-left: 20px">JS</a>
  <a routerLink="/email-templates" style="margin-left: 20px">Email Templates</a>
  <a routerLink="/dynamic-screen" style="margin-left: 20px">Dynamic Screen</a>`

}
