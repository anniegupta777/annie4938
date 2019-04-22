import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnboardingFormComponent } from './onboarding-form/onboarding-form.component';
import { LoginComponent } from './login/login.component';
import { ListStudentsComponent } from './list-students/list-students.component';
import { ViewonboardingFormComponent } from './viewonboarding-form/viewonboarding-form.component';
import { EditonboardingFormComponent } from './editonboarding-form/editonboarding-form.component';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginComponent
  },
  { path: 'listStudents', component: ListStudentsComponent },
  { path: 'onBoardingForm', component: OnboardingFormComponent },
  { path: 'viewOnboardingForm/:id', component: ViewonboardingFormComponent },
  { path: 'editOnboardingForm/:id', component: EditonboardingFormComponent },
  { path: '**', component: OnboardingFormComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
