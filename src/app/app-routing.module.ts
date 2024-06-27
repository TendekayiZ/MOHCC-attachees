import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { SymptomsComponent } from './symptoms/symptoms.component';
import { StiComponent } from './sti/sti.component';
import { StdComponent } from './std/std.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'symptoms', component: SymptomsComponent},
  { path: 'sti', component: StiComponent},
  { path: 'std', component: StdComponent},
  { path: 'contact', component: ContactComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes,)],
  exports: [RouterModule,]
})
export class AppRoutingModule { }
