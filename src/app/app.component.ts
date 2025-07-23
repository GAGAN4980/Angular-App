import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserServiceService } from './user-service.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  providers: [UserServiceService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-App';
}
