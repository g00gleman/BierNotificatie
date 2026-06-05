import { Routes } from '@angular/router';
import { CreateComponent } from './components/create-notification/create-component';

const CreateNotificationRoute = {
  path: 'notification/create',
  component: CreateComponent
}
export const routes: Routes = [
  CreateNotificationRoute
];
