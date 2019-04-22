import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl, FormsModule  } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-editonboarding-form',
  templateUrl: './editonboarding-form.component.html',
  styleUrls: ['./editonboarding-form.component.scss']
})
export class EditonboardingFormComponent implements OnInit {
  studentForm = new FormGroup({
    studentName: new FormControl(''),
    category: new FormControl(''),
    dob: new FormControl(''),
    fatherName: new FormControl(''),
    motherName: new FormControl(''),
    lastClassScore: new FormControl('')
  });
  studentName: any;
  category: any;
  dob: any;
  fatherName: any;
  motherName: any;
  lastClassScore: any;

  selectedCategory: any;
  documentsSubmitted: any[];
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
  constructor(private route: ActivatedRoute,
              private router: Router) { }
  id: any;

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.studentDetails = (JSON.parse(localStorage.getItem( localStorage.key( +this.id - 1))));
    this.splitted = this.studentDetails.documentsSubmitted.split(',');
    let i ;
    for (i = 0; i <= this.splitted.length; i++) {
      console.warn(i + ' ' + this.splitted[i]);
    }
    this.studentName = this.studentDetails.studentName;
    this.category = this.studentDetails.category;
    this.dob = this.studentDetails.dob;
    this.fatherName = this.studentDetails.fatherName;
    this.motherName = this.studentDetails.motherName;
    this.lastClassScore = this.studentDetails.lastClassScore;

  }

  isDomestic(category: string ): boolean {
    if (category === 'Domestic') {
      return true;
    } else if ( category === 'International') {
      return false;
    }

  }

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

  onSubmit() {
    // TODO: Use EventEmitter with form value
    if (this.studentForm.value.category === 'Domestic') {
      this.documents = this.domesticDocumentsSelected;
      this.formValue = '{"category":"' + this.studentForm.value.category + '",' +
      '"id":"' + (+this.id + 1) + '",' +
        '"dob":"' + this.studentForm.value.dob + '",' +
        '"fatherName":"' + this.studentForm.value.fatherName + '",' +
        '"lastClassScore":"' + this.studentForm.value.lastClassScore + '",' +
        '"motherName":"' + this.studentForm.value.motherName + '",' +
        '"documentsSubmitted":"' + this.domesticDocumentsSelected + '",' +
        '"studentName":"' + this.studentForm.value.studentName + '"}';
    } else {
      this.documents = this.internationalDocumentsSelected;
      this.formValue = '{"category":"' + this.studentForm.value.category + '",' +
      '"id":"' + (+this.id ) + '",' +
        '"dob":"' + this.studentForm.value.dob + '",' +
        '"fatherName":"' + this.studentForm.value.fatherName + '",' +
        '"lastClassScore":"' + this.studentForm.value.lastClassScore + '",' +
        '"motherName":"' + this.studentForm.value.motherName + '",' +
        '"documentsSubmitted":"' + this.internationalDocumentsSelected + '",' +
        '"studentName":"' + this.studentForm.value.studentName + '"}';
    }
    console.warn(this.studentForm.value);
    console.warn( 'forme value' + this.formValue);
    localStorage.setItem(this.id, this.formValue);
    alert.call('Successfully editted');
    }


}

