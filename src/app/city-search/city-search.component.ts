import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators'

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css']
})
export class CitySearchComponent implements OnInit {

  search = new FormControl();

  constructor() { }

  ngOnInit(): void {
    this.search.valueChanges
    .pipe(debounceTime(1000)).subscribe (data => {
      console.log(data)
    })
  }

}
