import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl } from '@angular/forms';
const VALIDATION_MESSAGE:any={
  required:'Should not be empty',
  email:'Email is not valid',
  minlength:'Field is too short',
  notMatch:'password and Conform does not match '
}
@Component({
  selector: 'app-input-validation',
  templateUrl: './input-validation.component.html',
  styleUrls: ['./input-validation.component.css']
})
export class InputValidationComponent implements OnInit , OnChanges{
  ngOnChanges(changes: SimpleChanges): void {
    this.checkValidation();
  }
  @Input()
  control!:AbstractControl;
  @Input()
  showErrorWhen:boolean=true;
  errorMessages:string[]=[];
  ngOnInit(): void {
    this.control.statusChanges.subscribe(()=>{
      this.checkValidation();
    })
    this.control.valueChanges.subscribe(()=>{
      this.checkValidation();
    })
  }

  checkValidation(){
    const errors=this.control.errors;
    if(!errors){
      this.errorMessages=[];
      return
    }

    const errorKeys=Object.keys(errors)
    //['required',email]
    this.errorMessages=errorKeys.map(key=>VALIDATION_MESSAGE[key]);

  }
}
