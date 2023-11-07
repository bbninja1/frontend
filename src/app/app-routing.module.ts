import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PostsComponent } from './posts/posts.component';
import { DisplaypostsComponent } from './displayposts/displayposts.component';

const routes: Routes = [

  {path: 'app-login', component:LoginComponent},
  {path: 'app-signup', component:SignupComponent},
  {path: 'app-posts', component:PostsComponent},
  {path: 'app-displayposts', component:DisplaypostsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
