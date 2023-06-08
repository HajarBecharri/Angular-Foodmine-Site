import { Component, OnChanges, OnInit, SimpleChanges ,Input} from '@angular/core';
import { AbstractControl, AbstractControlOptions, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent implements OnInit,OnChanges {


  @Input()
  control!:AbstractControl;
  @Input()
  showErrorsWhen:boolean=true;
  @Input()
  label!:string;
  @Input()
  type:'text'|'password'|'email'='text';
  get formControl(){
    return this.control as FormControl;
  }
  ngOnChanges(changes: SimpleChanges): void {
    
  }
  ngOnInit(): void {
   
  }

}
