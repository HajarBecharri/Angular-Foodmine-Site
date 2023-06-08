import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../shared/models/User';
import { IuserLogin } from '../shared/models/interfaces/IuserLogin';
import { HttpClient } from '@angular/common/http';
import { USER_LOGIN_URL, USER_REGISTER_URL } from '../shared/models/constants/urs';
import { ToastrService } from 'ngx-toastr';
import { IUserRegister } from '../shared/models/interfaces/IuserRegister';

const USER_KEY='user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject= new BehaviorSubject<User>(this.getUserFromLocalStorage());
  public userObservable:Observable<User>;

  constructor(private http:HttpClient,private toastrService:ToastrService) { 
    this.userObservable= this.userSubject.asObservable();
  }

  login(userLogin:IuserLogin):Observable<User>{
    return this.http.post<User>(USER_LOGIN_URL,userLogin).pipe(
      tap({
        next:(User)=>{
      this.setUserTolocalStorage(User);
      //we need to import Module (install ngx-toastr) , BrowserAnimationModule, and Adding style in angular.json
      this.userSubject.next(User);
      this.toastrService.success(
        `Welcome to food ${User.name}`,
        'Login Successful'
      )
        },
        error:(errorResponce)=>{
          this.toastrService.error(errorResponce.error,'Login Failed')
        }
      })
    );




  }

private setUserTolocalStorage(user:User){
  localStorage.setItem(USER_KEY,JSON.stringify(user));

}

private getUserFromLocalStorage():User{
  const userJson=localStorage.getItem(USER_KEY)
  if(userJson) return JSON.parse(userJson)as User;
  return new User();
}

register(userRegister:IUserRegister):Observable<User>{

  return this.http.post<User>(USER_REGISTER_URL,userRegister).pipe(
    tap({
      next:(User)=>{
    this.setUserTolocalStorage(User);
    //we need to import Module (install ngx-toastr) , BrowserAnimationModule, and Adding style in angular.json
    this.userSubject.next(User);
    this.toastrService.success(
      `Welcome to food ${User.name}`,
      'Register Successful'
    )
      },
      error:(errorResponce)=>{
        this.toastrService.error(errorResponce.error,'Register Failed')
      }
    })
  );


}

logout(){
  this.userSubject.next(new User());
  localStorage.removeItem(USER_KEY);
  //to refresh the page
  window.location.reload();
}


}
