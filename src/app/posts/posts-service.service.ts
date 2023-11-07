import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Subject} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class PostsServiceService {

  private postsdisplay: {
    _id: string;
    title: string;
    description: string;
    departmentCode: string;
    __v: string;
  }[] = [];

  private updatedpostsdisplay = new Subject<{
    _id: string;
    title: string;
    description: string;
    departmentCode: string;
    __v: string;
  }[]>();

  constructor(private http: HttpClient) {}

  // AddPost(title : string, description : string, departmentCode : string)
  // {
  // this.http.post('https://localhost:3000/api/post', {title: title, description: description, 
  // departmentCode: departmentCode}).subscribe( response => (console.log(response))

  // )
  // }

  addposts_service(title : string , description : string, departmentCode : string){
    this.http.post<{message: string, posts : any}> ('https://localhost:3000/api/post',{title : title, description: description, 
    departmentCode : departmentCode}).subscribe((theposts)=>{
      this.postsdisplay.push(theposts.posts)
      this.updatedpostsdisplay.next([...this.postsdisplay])
    }) 
  }
  
  getposts_service(){
  this.http.get<{message: string, posts : any}> ('https://localhost:3000/api/post').subscribe((theposts)=>{
    this.postsdisplay.push(theposts.posts)
    this.updatedpostsdisplay.next([...this.postsdisplay])
  }) 
}

deleteposts_service(postid:string){
  this.http.delete('https://localhost:3000/api/post' + postid).subscribe(()=>
  {
    const updatedpostsdisplay = this.postsdisplay.filter(post => post._id!==postid)
    this.postsdisplay = updatedpostsdisplay;
    this.updatedpostsdisplay.next([...this.postsdisplay])
  }) 
}

getUpdatedListener()
{
  return this.updatedpostsdisplay.asObservable();
}

}

