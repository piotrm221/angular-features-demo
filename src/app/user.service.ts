import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface User {
  name: string;
  age: number;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers(): Observable<User[]> {
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(
          this.getMockUsers()
        );
      }, 2000);
    });
  }

  private getMockUsers(): User[] {
    return Array.from(Array(15).keys()).flatMap(() => ([
      {
        name: 'John Doe',
        age: 30,
        role: 'admin'
      },
      {
        name: 'Jane Doe',
        age: 25,
        role: 'user'
      },
      {
        name: 'Jack Doe',
        age: 20,
        role: 'demoUser'
      }
    ]));

  }

}
