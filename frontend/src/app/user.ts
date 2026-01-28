import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  api='http://127.0.0.1:8000';

  constructor(private http:HttpClient){}

  getUsers():Observable<any>{
    return this.http.get(`${this.api}/users/`);
  }

  createUser(data:any){
    return this.http.post(`${this.api}/users/`,data);
  }

  updateUser(id:number,data:any){
    return this.http.put(`${this.api}/users/${id}`,data);
  }

  deleteUser(id:number){
    return this.http.delete(`${this.api}/users/${id}`);
  }
}
