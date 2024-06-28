import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-forgot-password',  
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
  
})
export class ForgotPasswordComponent {
  resetForm =new FormGroup({
  email:new FormControl({}),
  emailPassword:new FormControl({}),
  verificationCode: new FormControl({}),
  newPassword:new FormControl({}),
  confirmPassword:new FormControl({}),
 })
email: any;
  

constructor(){}
ngOnInit(): void{

}
submitResetDetails(){

}
}
