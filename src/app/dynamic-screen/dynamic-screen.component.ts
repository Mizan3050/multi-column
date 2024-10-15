import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dynamic-screen',
  templateUrl: './dynamic-screen.component.html',
  styleUrls: ['./dynamic-screen.component.scss']
})
export class DynamicScreenComponent implements AfterViewInit {
  @ViewChild('displayScreen') displayScreen: ElementRef<HTMLDivElement>;

  template = `
  <h2>This is h2</h2><p class="clickable" id="p-tag">Hello there</p>`;
  templateTwo = `
  <section>
  <div class="main">
    <div class="sub-main and-some with-some" id="lol-1">
      <span>
        <p id="p-tag-2" class="clickable">LOL</p>
      </span>
    </div>
  </div>
</section>`

  target = null;

  colorText = '';

  isMobile = false;

  constructor(
    private renderer: Renderer2
  ) {

  }

  ngAfterViewInit(): void {
    this.populateTemplate();
  }

  populateTemplate() {
    this.displayScreen.nativeElement.innerHTML = this.templateTwo;
    document.getElementById('p-tag-2').addEventListener(('click'), (e => {
      this.target = e.target;
    }));
  }

  mobileView() {
    this.isMobile = true;
    this.displayScreen.nativeElement.style.width = '375px'
    const ele = document.createElement('body');
    ele.innerHTML = this.displayScreen.nativeElement.innerHTML;
  }

  desktopView() {
    this.isMobile = false;
    this.displayScreen.nativeElement.style.width = '100%';
  }

  updateCss() {
    let element1 = this.target as any
    let parentNodes = [];  // Array to store parent elements
    // Break the loop as soon as we reach the body node
    while (element1.parentNode != document.body) {
      // Push the current parent node to array
      parentNodes.push(element1);
      // Go one level up in the DOM tree
      element1 = element1.parentNode;
    }
    const sectionIndex = parentNodes.findIndex((c) => { return c.tagName === 'SECTION' });

    const domHierarchy = parentNodes.splice(0, sectionIndex > 0 ? sectionIndex : parentNodes.length).reverse();
    const lolArray = domHierarchy.map((dom) => {
      return dom.localName + (dom.id.length ? `#${dom.id}` : '') + (dom.classList.length > 0 ? '.' : '') + dom.classList.value.split(' ').join('.');
    })
    const cssSelector = lolArray.join('>');

    let styleToUpdate = cssSelector + `{
      color: ${this.colorText};
    }`

    if (this.isMobile) {
      styleToUpdate = `@media screen and (min-width: 480px) {
        ${cssSelector + `{
          color: ${this.colorText};
        }`
        }
      }`
    }
    
    if (!document.getElementById('new-class-dynamic')?.id) {
      const style = this.renderer.createElement('style');
      style.id = 'new-class-dynamic'
      this.renderer.appendChild(style, this.renderer.createText(styleToUpdate));
      this.renderer.appendChild(this.displayScreen.nativeElement, style);
    } else {
      document.getElementById('new-class-dynamic').innerHTML = styleToUpdate;
    }
  }
}
