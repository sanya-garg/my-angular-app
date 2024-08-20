import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { User } from '../../Classes/user';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
//User$! : Observable<User>;
users :User[] =[];
constructor(private user :UserService, private router:Router){}

ngOnInit(){
  this.getUsers();
}
getUsers(){
  this.user.getUsers().subscribe((data)=>{
    this.users = data;
    console.log(this.users);
  })
}

// passing data from route using state
navigateToUserDetails(data:User){
this.router.navigateByUrl('/view-details/' + data.id,{state:{user:data}})
}

addUser(){
  this.router.navigate(['/add-user'],{queryParams:{user : 'sanyam'}});
}
}
