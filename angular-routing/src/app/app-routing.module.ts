import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
{path:"", redirectTo:"/login", pathMatch:"full"},
{path:"login", component:LoginComponent},
{path:"signup", component:SignUpComponent},
{path:"**", component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
