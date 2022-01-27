import { Component, Input, OnInit } from '@angular/core';
import { Company } from '../dto/company.dto';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {
  @Input() company: Company;
  constructor() { }

  ngOnInit(): void {
  }

}
