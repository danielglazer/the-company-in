import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { domainValidator } from '../domain.validator';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchForm = new FormGroup({
    domainControl: new FormControl('', [Validators.required, domainValidator()])
  })

  constructor(public dataService: DataService) { }

  searchForDomain()  {
    const domainControl = this.searchForm.get('domainControl');
    if(domainControl === null) return;
    this.dataService.getCompaniesForDomain(domainControl.value)
  }
}
