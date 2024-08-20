import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PipesComponent } from '../../../Pipes/pipes/pipes.component';
import { CommonModule } from '@angular/common';
import { gte } from '../../../Classes/gte.validator';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
profileForm1 = new FormGroup({
  firstName : new FormControl(''),
  lastName : new FormControl(''),
  address : new FormGroup({
    city : new FormControl(''),
    state :new FormControl(''),
    zip : new FormControl(''),
  })
  });

  //Use formBuilder to generate controls instead of repeating FormControl again and again 
  //More effecient way
  profileForm = this.formBuilder.group({
    firstName :['',[Validators.required,Validators.minLength(4)]],
    lastName :[''],
    address : this.formBuilder.group({
      city :[''],
      state :[''],
      zip :[''],
    }),
    number:['',[gte]] //Custom Validation
    });
constructor(private formBuilder :FormBuilder){

}
onSubmit(){
  console.log(this.profileForm.value);
}
//PatchValue or setValues is used to update the values for form inputs
updateValues(){
  this.profileForm.patchValue({
    firstName :'anu',
    address :{
      state : 'madhya Pradesh',
      zip :'788282'
    }
  })
}
}
