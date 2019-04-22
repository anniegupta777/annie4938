import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {FormsModule } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

export interface StudentList {
  category: any;
  dob: any;
  documentsSubmitted: any;
  fatherName: any;
  lastClassScore: any;
  motherName: any;
  studentName: any;
}

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.scss']
})
export class ListStudentsComponent implements OnInit {

  studentList: Array<any> = [];
  selectedCategoryStudents: any = 'All';
  searchText: any;
  constructor() { }

  ngOnInit() {
    let i;
    for ( i = 0; i < localStorage.length; i++) {
      this.studentList.push( JSON.parse((localStorage.getItem ( localStorage.key(i) )))) ;
  }
    console.warn( this.studentList );
  }

  categoryColor(category: string): string {
    if (category === 'Domestic') {
      return '#FDF3CF';
    } else if (category === 'International') {
      return '#DBE4F2';
    }

  }

  deleteStudent(id: any): void {
    const result = confirm('Are you sure you want to delete?');
    if (result) {
      localStorage.removeItem( id );
      // tslint:disable-next-line:only-arrow-functions
      setTimeout( function() {
        window.location.reload();
    }, 500);
    }
  }

  onChange(newValue) {
    console.log(newValue);
    this.selectedCategoryStudents = newValue;
    // ... do other stuff here ...
}



}
