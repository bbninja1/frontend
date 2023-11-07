import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms'
import { PostsServiceService } from './posts-service.service';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(public postsservice: PostsServiceService) {}

  ngOnInit(): void {
  }
  AddPost(PostForm : NgForm)
  {
  if (PostForm.invalid)
  {
    alert('Invalid')
    return
  }
  this.postsservice.addposts_service(PostForm.value.enteredtitle,PostForm.value.entereddescription,PostForm.value.entereddepartmentcode)
  }

  
}

