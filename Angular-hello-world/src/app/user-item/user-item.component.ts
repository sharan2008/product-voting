import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})

@Component({
selector:'app-user-item',
templateUrl:'./user-item.component.html',
styleUrls:['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  name:string;
  constructor() {
    this.name = 'Phillips';
   }
    
  ngOnInit() {
  }

}
