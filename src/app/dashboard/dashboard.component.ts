import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  constructor(private router: Router) {}

  newfarmer(): void {
    this.router.navigateByUrl('/newfarmer');
  }

  searchQuery: string = '';

  farmerList = [
    {
      firstname: 'Samuel',
      lastname: 'Nantale',
      district: 'Wakiso',
      gender: 'Male',
      yearOfBirth: '1990',
      primaryTelephone: '0771234567',
      nationalIdNumber: '1234567890',
      code: 'F001',
    },
    {
      firstname: 'Sarah',
      lastname: 'Kyeyune',
      district: 'Kampala',
      gender: 'Female',
      yearOfBirth: '1985',
      primaryTelephone: '0771234568',
      nationalIdNumber: '1234567891',
      code: 'F002',
    },
    {
      firstname: 'John',
      lastname: 'Mukasa',
      district: 'Mbarara',
      gender: 'Male',
      yearOfBirth: '1982',
      primaryTelephone: '0789123456',
      nationalIdNumber: '1234567892',
      code: 'F003',
    }
  
  ];

  filteredFarmers() {
    if (!this.searchQuery) {
      return this.farmerList;
    }
    const query = this.searchQuery.toLowerCase();
    return this.farmerList.filter((farmer) =>
      farmer.firstname.toLowerCase().includes(query) ||
      farmer.lastname.toLowerCase().includes(query) ||
      farmer.district.toLowerCase().includes(query) ||
      farmer.primaryTelephone.includes(query) ||
      farmer.nationalIdNumber.includes(query)
    );
  }

  calculateAge(yearOfBirth: string): number {
    const currentYear = new Date().getFullYear();
    return currentYear - parseInt(yearOfBirth, 10); 
  }

  getFarmersWithAges() {
    return this.filteredFarmers().map(farmer => ({
      ...farmer,
      age: this.calculateAge(farmer.yearOfBirth),
    }));
  }
}
