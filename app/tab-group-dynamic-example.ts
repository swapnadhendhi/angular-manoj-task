import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/core';
import { FormControl } from '@angular/forms';

/**
 * @title Tab group with dynamically changing tabs
 */
@Component({
  selector: 'tab-group-dynamic-example',
  templateUrl: 'tab-group-dynamic-example.html',
  styleUrls: ['tab-group-dynamic-example.css']
})
export class TabGroupDynamicExample implements OnInit {
  selectedMonths = [];
  ngOnInit(): void {
    let date = new Date();
    for (let i = date.getFullYear(); i > date.getFullYear() - 7; i--) {
      this.years.push(i);
      let obj = {};
      obj[i] = [];
      this.selectedMonths.push(obj);
    }

    debugger;
  }
  years = [];
  months = [
    'Jan',
    'Feb',
    'Mar',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  change(a, month, year) {
    debugger;
    let obj = this.selectedMonths.filter(sm => sm[year] === year);

    obj.push(month);
    let x = {};
    x[year] = obj;
    console.log(obj);
  }
}
