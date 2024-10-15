import { Component } from '@angular/core';


function printName() {

}

(Function.prototype as any).myBind = function (...args) {
  let obj = this;
  // this will point to the method to which myBind has been called

  return function () {
    obj.call(args[0])
  }
}

@Component({
  selector: 'app-js',
  templateUrl: './js.component.html',
  styleUrls: ['./js.component.scss']
})
export class JsComponent {

  constructor() {
        const some = (printName as any).myBind(this.name);
        some();
  }

  name = {
    firstName: 'Meezan',
    lastName: 'Shaikh'
  }

}

