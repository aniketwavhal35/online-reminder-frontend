import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReminderinputComponent } from './reminderinput/reminderinput.component';
import { HomeComponent } from './home/home.component';
import { ReminderlistComponent } from './reminderlist/reminderlist.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"list", component: ReminderlistComponent},
  {path:"create", component: ReminderinputComponent},
  {path:"userdetail", component: UserdetailComponent},
  {path:"login", component: LoginComponent},
  {path:"register", component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
