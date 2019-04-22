import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';


@Component({
  selector: 'app-onboarding-form',
  templateUrl: './onboarding-form.component.html',
  styleUrls: ['./onboarding-form.component.scss'],
  providers: []
})
export class OnboardingFormComponent {
  title = 'StudentOnboarding';
  studentForm = new FormGroup({
    studentName: new FormControl(''),
    category: new FormControl(''),
    dob: new FormControl(''),
    fatherName: new FormControl(''),
    motherName: new FormControl(''),
    lastClassScore: new FormControl('')
  });
  documents: Array<string> = [];
  internationalDocuments: Array <string> = ['Domicile Certificate*', 'Birth Certificate*',
  'Previous Marksheet*', 'Police Clearance*', 'Passport*', 'Signed Declaration*'] ;
  domesticDocuments: Array <string> = ['Domicile Certificate*', 'Birth Certificate*',
  'Previous Marksheet*', 'Police Clearance', 'Passport', 'Signed Declaration*'] ;
  selectedCategory: any;
  domesticDocumentsSelected: Array<string> = [] ;
  internationalDocumentsSelected: Array<string> = [] ;
  index: any;
  errorMessage = '';
  formValue: any ;

  constructor() {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    if (this.studentForm.value.category === 'Domestic') {
      this.documents = this.domesticDocumentsSelected;
      this.formValue = '{"category":"' + this.studentForm.value.category + '",' +
      '"id":"' + (localStorage.length + 1) + '",' +
        '"dob":"' + this.studentForm.value.dob + '",' +
        '"fatherName":"' + this.studentForm.value.fatherName + '",' +
        '"lastClassScore":"' + this.studentForm.value.lastClassScore + '",' +
        '"motherName":"' + this.studentForm.value.motherName + '",' +
        '"documentsSubmitted":"' + this.domesticDocumentsSelected + '",' +
        '"studentName":"' + this.studentForm.value.studentName + '"}';
    } else {
      this.documents = this.internationalDocumentsSelected;
      this.formValue = '{"category":"' + this.studentForm.value.category + '",' +
      '"id":"' + (localStorage.length + 1) + '",' +
        '"dob":"' + this.studentForm.value.dob + '",' +
        '"fatherName":"' + this.studentForm.value.fatherName + '",' +
        '"lastClassScore":"' + this.studentForm.value.lastClassScore + '",' +
        '"motherName":"' + this.studentForm.value.motherName + '",' +
        '"documentsSubmitted":"' + this.internationalDocumentsSelected + '",' +
        '"studentName":"' + this.studentForm.value.studentName + '"}';
    }
    console.warn(this.studentForm.value);
    console.warn( 'forme value' + this.formValue);
    if (localStorage.length === 0) {
    localStorage.setItem('1', this.formValue); } else {
    localStorage.setItem( (localStorage.length + 1).toString() , this.formValue); }
    alert('Onboarding Form has been submitted successfully');
    // tslint:disable-next-line:only-arrow-functions
    setTimeout( function() {
      window.location.reload();
      }, 500);
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

/**
 *
 *
 * @param {any} event
 * @memberof OnboardingFormComponent
 */
updateDomesticDocumentList(event) {
    if (event.srcElement.checked === true) {
    console.log(event.srcElement.value);
    this.domesticDocumentsSelected.push(event.srcElement.value);
    } else if (event.srcElement.checked === false) {
      this.index = this.domesticDocumentsSelected.indexOf(event.srcElement.value);
      if (this.index > -1) {
      this.domesticDocumentsSelected.splice(this.index, 1); }
    }
    console.log(this.domesticDocumentsSelected);
  }

  updateInternationalDocumentList(event) {
    if (event.srcElement.checked === true) {
    console.log(event.srcElement.value);
    this.internationalDocumentsSelected.push(event.srcElement.value);
    } else if (event.srcElement.checked === false) {
      this.index = this.internationalDocumentsSelected.indexOf(event.srcElement.value);
      if (this.index > -1) {
      this.internationalDocumentsSelected.splice(this.index, 1); }
    }
    console.log(this.internationalDocumentsSelected);
  }

}

