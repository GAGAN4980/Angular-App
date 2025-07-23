import { Component, inject } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { User } from '../model/User';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-create-user',
  imports: [ReactiveFormsModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {
  userService = inject(UserServiceService);
  formbuilder = inject(FormBuilder);

   userForm = this.formbuilder.nonNullable.group<User>({
    emailId: '',
    fullName: '',
    password: ''
  });

  onSubmitClicked(){
    //    let userName = this.userForm.value.fullName;
    let user: User = {
      emailId: this.userForm.value.emailId as string,
      fullName: this.userForm.value.fullName as string,
      password: this.userForm.value.password as string
    };
    this.userService.createUser(user).subscribe({
        next(value: any) {
          if(value.result)
          { 
            console.log(value.data);
          }
          else{
            console.log(value.message);
          }
          alert(value.message);
        },
        error(err: any){
            console.log(err);
            alert(err.message);
        }
      }
    );
  }
}
