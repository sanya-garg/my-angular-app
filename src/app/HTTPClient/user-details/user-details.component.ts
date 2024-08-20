import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../Classes/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  id: string ='';
  userDetail :User | undefined;
  userData;
  constructor(private user: UserService, private route: ActivatedRoute, private router :Router) { 
    this.userData = this.router.getCurrentNavigation()?.extras.state;
    console.log(this.userData);
  }
  

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.id = data['id'];
      console.log(this.id);
    });

    this.user.getUsersById(this.id).subscribe(data =>{
      this.userDetail = data;
      console.log(this.userDetail);
    })
  }

}
