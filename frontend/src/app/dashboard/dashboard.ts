import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {

  users:any[]=[];
  name='';
  email='';
  loading=false;

  editId:number|null=null;
  editName='';
  editEmail='';

  constructor(
    private userService:UserService,
    private cd: ChangeDetectorRef
  ){}

  ngOnInit(){
    this.fetchUsers();
  }

  fetchUsers(){
    this.loading = true;

    this.userService.getUsers().subscribe({
      next:(res:any)=>{
        this.users = res;
        this.loading = false;
        this.cd.detectChanges();
      },
      error:(err)=>{
        console.error(err);
        this.loading = false;
        this.cd.detectChanges();
      }
    });
  }

  addUser(){
    if(!this.name || !this.email) return;

    this.loading=true;

    this.userService.createUser({
      name:this.name,
      email:this.email
    }).subscribe(()=>{
      this.name='';
      this.email='';
      this.fetchUsers();
    });
  }

  deleteUser(id:number){
    this.loading=true;

    this.userService.deleteUser(id).subscribe(()=>{
      this.fetchUsers();
    });
  }

  startEdit(user:any){
    this.editId=user.id;
    this.editName=user.name;
    this.editEmail=user.email;
  }

  saveEdit(id:number){
    this.loading=true;

    this.userService.updateUser(id,{
      name:this.editName,
      email:this.editEmail
    }).subscribe(()=>{
      this.editId=null;
      this.fetchUsers();
    });
  }
}
