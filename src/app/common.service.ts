import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {
  userName:any;
  constructor() { }

  setUserName(){
    this.userName = 'Shailendra';
  }

  getUserName(){
    return this.userName;
  }

}