import { TestBed } from '@angular/core/testing';
import { CreateComponent, Notification } from '../../src/app/components/create-notification/create-component';
import { NotificationCreateService } from '../../src/app/components/create-notification/create.service';
import { of, throwError } from 'rxjs';
import { jest } from '@jest/globals';

describe('CreateComponent', () => {
  let component: CreateComponent;
  let serviceMock: any;

  beforeEach(() => {
    serviceMock = {
      createNotification: jest.fn()
    };

    TestBed.configureTestingModule({
      imports: [CreateComponent],
      providers: [
        { provide: NotificationCreateService, useValue: serviceMock }
      ]
    });

    const fixture = TestBed.createComponent(CreateComponent);
    component = fixture.componentInstance;
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should call service and set submitted true on success', () => {
    serviceMock.createNotification.mockReturnValue(of({ success: true }));

    component.notification = {
      location: 'Amsterdam',
      category: 'Bier',
      drink: 'Heineken',
      message: 'Test',
      time: '2026-01-01T12:00'
    };

    component.onSubmit();

    expect(serviceMock.createNotification).toHaveBeenCalled();
    expect(component.submitted).toBe(true);
    expect(component.errorMessage).toBe('');
  });

  it('should set errorMessage on error', () => {
    serviceMock.createNotification.mockReturnValue(
      throwError(() => new Error('fail'))
    );

    component.onSubmit();

    expect(component.submitted).toBe(false);
    expect(component.errorMessage).toBe('Er ging iets mis');
  });
});
