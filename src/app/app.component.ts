import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { DocumentService } from '../shared/document.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})
export class AppComponent {
  title = 'StudentOnboarding';

}
