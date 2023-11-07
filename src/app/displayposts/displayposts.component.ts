import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs'
import { PostsServiceService } from '../posts/posts-service.service';

@Component({
  selector: 'app-displayposts',
  templateUrl: './displayposts.component.html',
  styleUrls: ['./displayposts.component.css']
})
export class DisplaypostsComponent implements OnInit {

  post:{_id : string, title : string, description: string, departmentCode : string, __v : string}[] = [];

  constructor(public postservices: PostsServiceService){

  }
  private postSubscription!: Subscription;

  ngOnInit(): void {
    this.postservices.getposts_service();
    this.postSubscription = this.postservices.getUpdatedListener().subscribe((post:{_id : string, title : string, 
    description: string, departmentCode : string, __v : string}[])=>{this.post = post})

  }

  ngOnDestroy()
  {
    this.postSubscription.unsubscribe()
  }

  ondelete(postid : string)
  {
    this.postservices.deleteposts_service(postid)
  }

}
