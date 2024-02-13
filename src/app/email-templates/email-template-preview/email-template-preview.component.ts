import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { templateTextArray } from 'src/app/constants/email-templates.constant';
import { unescapeQuotes } from '../email-templates.component';
import domtoimage from 'dom-to-image';

@Component({
  selector: 'app-email-template-preview',
  templateUrl: './email-template-preview.component.html',
  styleUrls: ['./email-template-preview.component.scss']
})
export class EmailTemplatePreviewComponent implements AfterViewInit {

  @ViewChild('container') container: ElementRef<HTMLDivElement>;
  @ViewChild('displayContainer') displayContainer: ElementRef<HTMLDivElement>;

  @Input() htmlText: SafeHtml;

  ngAfterViewInit(): void {

    console.log({ d: this.container.nativeElement.getBoundingClientRect() });

    if (this.container.nativeElement.getBoundingClientRect().width > 300) {
      this.container.nativeElement.style.width = '300px';
    }
  }

  containerLog(container: HTMLIFrameElement) {
    console.log({ container });

  }


}
