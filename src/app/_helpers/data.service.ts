import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    let users: User[] = [
      { id: 1, title: 'Mr', firstname: 'Raj', lastname: 'Bhatt', email: 'raj@test.com',dob: '15/05/2003', password: '123456', acceptTerms: true },
      { id: 2, title: 'Ms', firstname: 'Sakshi', lastname: 'Soni', email: 'sakshi@test.com', dob: '27/04/2003', password: '1234567', acceptTerms: true }

    ];

    return { users };
  }



}
