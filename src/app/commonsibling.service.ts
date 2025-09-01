import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonsiblingService {


public countSubject:BehaviorSubject<number>=new BehaviorSubject(0);
  constructor() { }
}
