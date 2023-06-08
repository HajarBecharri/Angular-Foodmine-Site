import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {


  loginForm!:FormGroup;
  isSabmitted=false;
  returnUrl='';
  constructor(private formBuilder:FormBuilder,
    private userService:UserService,
    private activatedRoute:ActivatedRoute,
    private router:Router){

  }
  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    });

    this.returnUrl=this.activatedRoute.snapshot.queryParams.returnUrl //reurnUrl=/checkout

    //loginForm.control.email   to access to the email
    //we made get fc method to use simply
    //fc.email
  }

  get fc() {
    return this.loginForm.controls; 
  }
   
  submit(){
    this.isSabmitted=true;
    if(this.loginForm.invalid)return;

    this.userService.login({email:this.loginForm.controls.email.value,
      password:this.loginForm.controls.password.value}).subscribe(()=>{
        this.router.navigateByUrl(this.returnUrl)
      })
  }
}
