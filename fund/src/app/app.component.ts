import { Component } from '@angular/core';
import { RootService } from './root.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'fund';
  constructor(private service:RootService){
    this.service.getInfo('/user',{}).subscribe(res => {

    })
  }
}
