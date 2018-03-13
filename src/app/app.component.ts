import { Component } from '@angular/core';

import { EmitBefore, OnEvent } from 'ng5-decorators';
import { BaseComponent } from './base.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends BaseComponent {
  title = 'app';

  @EmitBefore('triggerEvent')
  test(arg:string){
    console.log(arg);
  }

  @OnEvent('triggerEvent')
  test1(arg:string){
    console.log(arg," in test1");
  }
}
