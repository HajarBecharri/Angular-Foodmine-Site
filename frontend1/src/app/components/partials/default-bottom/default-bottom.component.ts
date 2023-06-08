import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-default-bottom',
  templateUrl: './default-bottom.component.html',
  styleUrls: ['./default-bottom.component.css']
})
export class DefaultBottomComponent implements OnInit {

  @Input()
  type:'submit'|'button'='submit';
  @Input()
  text:string='Submit';
  @Input()
  bgColor='#e72929';
  @Input()
  color='white';
  @Input()
  fontSizeRem=1.3;
  @Input()
  widthRem=12;
  @Output()
  onclick=new EventEmitter();


ngOnInit() {
  
}

}