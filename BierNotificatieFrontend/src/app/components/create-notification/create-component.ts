import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NotificationCreateService } from './create.service';

export interface Notification {
  location: string;
  category: string;
  drink: string;
  message: string;
  time: string;
}

@Component({
  selector: 'app-create-notification',
  imports: [FormsModule],
  templateUrl: './create.html',
  styleUrls: ['./create.css'],
})
export class CreateComponent {

  constructor(private service: NotificationCreateService) {}

  notification: Notification = {
    location: '',
    category: '',
    drink: '',
    message: '',
    time: ''
  };

  categories = ['Bier', 'Wijn', 'Cocktail', 'Fris'];

  submitted = false;
  errorMessage = '';

  onSubmit() {

    this.errorMessage = '';

    this.service.createNotification(this.notification).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },

      error: (err) => {
        console.error(err);
        this.errorMessage = 'Er ging iets mis';
      }
    });
  }
}
