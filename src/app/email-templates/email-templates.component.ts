import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { templateTextArray } from '../constants/email-templates.constant';


export function unescapeQuotes(templateText: string) {
  return templateText?.replace(/\\"/g, '"') ?? '';
}

@Component({
  selector: 'app-email-templates',
  templateUrl: './email-templates.component.html',
  styleUrls: ['./email-templates.component.scss']
})
export class EmailTemplatesComponent implements OnInit {

  htmlTemplate = `
  <style>
  :root{--background-color-template-7974: #f5f8fa; --primary-color-template-6052: #da1961;}
  </style>
  <div id="template-container" style=" font-family: 'Montserrat', sans-serif; color: #262e2e; background-color: var(--background-color-template-7974); box-sizing: border-box; margin: 0; padding: 40px 0px; ">
  <table width="100%" style="width: 100%; max-width: 600px; margin: auto" align="center" cellpadding="0" cellspacing="0" > <tr> <td align="center" style="padding-top: 20px; padding-bottom: 20px"> <a href="{company_or_store_link}"> <img src="{company_or_store_logo_url}" width="120"/> </a> </td></tr><tr> <td> <table width="100%" style=" width: 100%; max-width: 600px; margin: auto; background-color: #ffffff; font-family: 'Montserrat', sans-serif; " align="center" cellpadding="0" cellspacing="0" > <tr> <td> <table width="100%"> <tr> <td align="center" style="padding: 0px 0px 20px"> <img src="https://assets.hyperinvento.com/hyperinventory_admin/assets/images/Template-images/dussehra-hero-img.png" width="400" height="400"/> </td></tr><tr> <td align="center" style="padding-bottom: 80px"> <p id="template-body-text" style=" font-family: 'Montserrat', sans-serif; font-size: 16px; font-weight: 500; color: #262e2e; line-height: 21px; padding-bottom: 60px; letter-spacing: 0.25px; margin: 0; max-width: 420px; " > Enjoy the victory of truth over evil with discount of 10% on all Products </p><a id="template-button-text" href="{festival_button_url}" style=" background-color: var(--primary-color-template-6052); font-family: 'Montserrat', sans-serif; font-size: 18px; font-weight: 500; color: #ffffff; padding: 12px 25px; border-radius: 4px; text-decoration: none; letter-spacing: 0.25px; " >SHOP NOW</a > </td></tr></table> </td></tr></table> </td></tr><tr> <td align="center"> <p id="unsubscribe_link_template" style=" font-family: 'Montserrat', sans-serif; font-size: 12px; font-weight: 500; padding-top: 20px; margin: 0; opacity: 0.5; " > Keep on missing out amazing emails from{company_or_store_name}? <br/> Please <a href="{unsubscribe_link}" style="cursor: pointer; color: #003774"> unsubscribe here</a > </p></td></tr></table></div>
  `

  templatesArray = templateTextArray.map(template => unescapeQuotes(template));

  template: SafeHtml = null;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private sanitizer: DomSanitizer
  ) {

  }

  ngOnInit(): void {
    const doc = this.document.createElement('div');
    const parsedTemplateText = unescapeQuotes(this.htmlTemplate);
    this.sanitizer.bypassSecurityTrustHtml(parsedTemplateText);
    this.template = this.sanitizer.bypassSecurityTrustHtml(parsedTemplateText);
  }

}
