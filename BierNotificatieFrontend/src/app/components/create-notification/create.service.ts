import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NotificationCreateService {

  private apiUrl = 'http://localhost:8080/api/notification';

  constructor(private http: HttpClient) {}

  createNotification(notification: any) {
    return this.http.post(`${this.apiUrl}/create`, notification);
  }
}
