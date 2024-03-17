import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUrl: string = 'http://localhost:8000/user';
  adminUrl: string = 'http://localhost:8000/proprietaire';

 httpOptions = {
 headers: new HttpHeaders({ 'Content-Type': 'application/json' })
 };
 constructor(private http: HttpClient) { }
  //read
  getUsers(): Observable<any> { 
    return this.http.get(this.userUrl);
  } 
  //get par id
  getUser(id: any): Observable<any> {
    return this.http.get(this.userUrl+'/'+ id);
  }
  checkEmailExists(email: string): Observable<boolean> {
    return this.http.get<boolean>(this.userUrl + '/check-email/' + email );
  }
  //create
  createUser(newUser:any): Observable<any> {
    return this.http.post(this.userUrl , newUser);
  }
  createAdmin(newUser:any): Observable<any> {
    return this.http.post(this.adminUrl , newUser);
  }
  //detete  
  deleteUser(id: any): Observable<any> {
    return this.http.delete(this.userUrl+'/'+id);
  }
  //update
  updateUser(data :any,id: number): Observable<any> {
    return this.http.put(this.userUrl+'/'+id, data);
  }
}