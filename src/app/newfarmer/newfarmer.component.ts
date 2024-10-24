import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-newfarmer',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './newfarmer.component.html',
  styleUrls: ['./newfarmer.component.css'],
})
export class NewfarmerComponent {
  farmerprofile: any = {
    id: '',
    hubId: '',
    createdBy: '',
    dateCreated: '',
    lastModifiedBy: '',
    dateUpdated: '',
    isDeleted: false,
    firstname: '',
    lastname: '',
    gender: '',
    levelOfEducation: '',
    nationalIdNumber: '',
    emailAddress: '',
    yearOfBirth: '',
    maritalStatus: '',
    district: '',
    subCounty: '',
    parish: '',
    village: '',
    primaryTelephone: '',
    isFarmerTelephone: '',
    alternateContactPersonName: '',
    alternateContactPersonRelationToFarmer: '',
    nextOfKin: '',
    nextOfKinName: '',
    nextOfKinTelephone: '',
    code: '',
    dateOfRegistration: '',
    dateOfContract: '',
    householdSize: 0,
    bankAccountNumber: '',
    bankName: '',
    bankAccountName: '',
    hubName: '',
    disability: '',
    isRefugee: '',
    refugeeCountryOfOrigin: '',
    agreeToTerms: '',
  };

  sendFarmerProfileUrl: string =
    'https://test.profiles.symos.asigmagroup.com/api/v1/farmers';

    captureNewFarmerProfile():void{

    }

    submitFarmerInfo(): void {
      try {
        // Check if all fields have values before displaying the SweetAlert
        if (this.farmerprofile.firstname && this.farmerprofile.lastname && this.farmerprofile.primaryTelephone) {
          Swal.fire({
            html: `
              <div class="row">
                <div class="col-2">
                  <div class="m-1 smallicon rounded-2">
                    <span class="bi bi-person-fill text-white"></span>
                  </div>
                </div>
                <div class="col-10">
                  <h3>${this.farmerprofile.firstname}</h3>
                  <p><i class="bi bi-telephone-fill me-3"></i> ${this.farmerprofile.primaryTelephone}</p>
                </div>
              </div>
              
              <div class="row my-1">
                <div class="col-6"></div>
                <div class="col-6">
                  <a class="btn asigmabutton"><i class="bi bi-pencil me-3"></i> Edit</a>
                  <a class="btn btn-danger"><i class="bi bi-trash me-3"></i> </a>
                </div>
              </div>
              
              <table class="table table-bordered">
                <tr>
                  <th>Gender</th>
                  <td>${this.farmerprofile.gender}</td>
                </tr>
                <tr>
                  <th>Age</th>
                  <td>${this.calculateAge(this.farmerprofile.yearOfBirth)}</td>
                </tr>
                <tr>
                  <th>District</th>
                  <td>${this.farmerprofile.district}</td>
                </tr>
                <tr>
                  <th>NIN</th>
                  <td>${this.farmerprofile.nationalIdNumber}</td>
                </tr>
              </table>
            `,
            confirmButtonText: 'OK',
            showCloseButton: true,
            showConfirmButton: false,
            allowOutsideClick: false,
            customClass: {
              popup: 'swal-right-position',
            },
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Missing Required Fields',
            text: 'Please fill out all required fields before submitting.',
          });
        }
    
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error Submitting Farmer Profile',
          text: `${error}`,
        });
      }
    }
    

  calculateAge(yearOfBirth: string): number {
    const currentYear = new Date().getFullYear();
    return currentYear - parseInt(yearOfBirth);
  }

  constructor(private router: Router) {}

  dashboard(): void {
    this.router.navigateByUrl('/dashboard');
  }
}
