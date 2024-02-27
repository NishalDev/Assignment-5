import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-retrieve-user',
  standalone:true,
  templateUrl: './retrieve-user.component.html',
  imports: [HttpClientModule,ReactiveFormsModule,CommonModule],
  styleUrls: ['./retrieve-user.component.css']
})
export class RetrieveUserComponent  {
  Data:any=null;
  apiUrl='https://randomuser.me/api/';
  message:string='';
  error:string='';
  constructor(private http: HttpClient) {}
  getUser() {
    this.http.get<any>(this.apiUrl).subscribe({
       next:(response)=> {
        this.Data=response.results[0];
        console.log(this.Data);
        this.error='No error';
      },
      error:(error)=> {
          console.log('Error fetching user data:', error);
        }
    })
  }
  retrievedUserForm = new FormGroup({
    name:new FormControl('',Validators.required),
    photo: new FormControl(),
    gender:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    phone:new FormControl('',Validators.required),
    country: new FormControl('',Validators.required),
    city: new FormControl('',Validators.required)
  })

  
  clear(){
    this.retrievedUserForm.setValue({
      name: '',
      gender: null,
      email: null,
      city:null,
      country: null,
      phone: null,
      photo: null
    })
    this.message='';
  }

  autoFill(){
    this.retrievedUserForm.setValue({
      name: this.Data.name.title + ". " + this.Data.name.first + " " + this.Data.name.last,
      gender: this.Data.gender,
      email: this.Data.email,
      phone: this.Data.phone,
      country: this.Data.location.country,
      photo: this.Data.picture.large,
      city:this.Data.location.city
    })
  }
  submitForm(){
    this.message="Form submitted successfully"
  }
  onSubmit(event:Event) {
    event.preventDefault();
  }
}
