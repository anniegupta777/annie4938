import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-viewonboarding-form',
  templateUrl: './viewonboarding-form.component.html',
  styleUrls: ['./viewonboarding-form.component.scss']
})
export class ViewonboardingFormComponent implements OnInit {
  studentForm = new FormGroup({
    studentName: new FormControl(''),
    category: new FormControl(''),
    dob: new FormControl(''),
    fatherName: new FormControl(''),
    motherName: new FormControl(''),
    lastClassScore: new FormControl('')
  });
  internationalDocuments: Array <string> = ['Domicile Certificate*', 'Birth Certificate*',
  'Previous Marksheet*', 'Police Clearance*', 'Passport*', 'Signed Declaration*'] ;
  domesticDocuments: Array <string> = ['Domicile Certificate*', 'Birth Certificate*',
  'Previous Marksheet*', 'Police Clearance', 'Passport', 'Signed Declaration*'] ;
  splitted: any[];
  domesticDocumentsSelected: Array<string> = [] ;
  internationalDocumentsSelected: Array<string> = [] ;
  formValue: any ;
  documents: Array<string> = [];
  studentDetails: any;
  documentsSubmitted: any[];
  constructor(private route: ActivatedRoute,
              private router: Router) { }

  isMandatory(domesticDocuments): boolean {
      if (domesticDocuments === 'Domicile Certificate*' ||
          domesticDocuments === 'Birth Certificate*' ||
          domesticDocuments === 'Previous Marksheet*' ||
          domesticDocuments === 'Signed Declaration*'
        ) {
        return true;
          } else {
            return false;
          }
      }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.studentDetails = (JSON.parse(localStorage.getItem( localStorage.key( +id - 1 ))));
    this.splitted = this.studentDetails.documentsSubmitted.split(',');
    let i ;
    for (i = 0; i <= this.splitted.length; i++) {
      console.warn(i + ' ' + this.splitted[i]);
    }
  }

  isDomestic(category: string ): boolean {
    if (category === 'Domestic') {
      return true;
    } else if ( category === 'International') {
      return false;
    }

  }

}
