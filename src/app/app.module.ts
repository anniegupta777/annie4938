import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DocumentService } from '../shared/document.service';
import { ListStudentsComponent } from './list-students/list-students.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../in-memoryDB/in-memory-data.service';
import { Globals } from '../global/globals';
import { RouterModule } from '@angular/router';
import { OnboardingFormComponent } from './onboarding-form/onboarding-form.component';
import { ViewonboardingFormComponent } from './viewonboarding-form/viewonboarding-form.component';
import { EditonboardingFormComponent } from './editonboarding-form/editonboarding-form.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ListStudentsComponent,
    OnboardingFormComponent,
    ViewonboardingFormComponent,
    EditonboardingFormComponent,
    LoginComponent
  ],
  imports: [
    FormsModule ,
    Ng2SearchPipeModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      [ { path: 'listStudents', component: ListStudentsComponent },
        { path: 'onBoardingForm', component: OnboardingFormComponent },
        { path: 'viewOnboardingForm/:id', component: ViewonboardingFormComponent },
        { path: 'editOnboardingForm/:id', component: EditonboardingFormComponent }
      ],
      { enableTracing: true } // <-- debugging purposes only
    ),
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
    ],
  providers: [InMemoryDataService, Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
