import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  constructor(private route :ActivatedRoute, private router : Router){
       this.route.queryParamMap.subscribe((params) =>{
        console.log(params);
       })
  }

}
