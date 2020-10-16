import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'

import { HomeComponent } from './home/home.component'
import { BeginnerComponent } from './beginner/beginner.component';
import { IntermediateComponent } from './intermediate/intermediate.component';
import { AdvancedComponent } from './advanced/advanced.component';
import { EliteComponent } from './elite/elite.component';

const appRoutes: Routes = [
  
  { path: 'home', component: HomeComponent },
  {  path:'', redirectTo: '/home', pathMatch: 'full' },

  { path: 'beginner', component: BeginnerComponent},

  { path: 'intermediate', component: IntermediateComponent },

  { path: 'advanced', component: AdvancedComponent },

  { path: 'elite', component: EliteComponent },


  
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports : [RouterModule]
})


export class AppRoutingModule { 

  
}
