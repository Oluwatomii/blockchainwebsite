import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { AboutComponent } from './components/about/about.component';
import { FaqComponent } from './components/faq/faq.component';

const routes: Routes = [
  {path : 'dashboard' , component : DashboardComponent},
  {path : 'login' , component : LoginComponent},
  {path :'signup' , component : SignupComponent},
  {path : 'curriculum', component: CurriculumComponent},
  {path : 'about', component: AboutComponent},
  {path: 'faq', component: FaqComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DashboardComponent, LoginComponent,SignupComponent,CurriculumComponent,
FaqComponent,AboutComponent]
