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
  map = new Map();
  ngOnInit(): void {
    let date = new Date();
    for (let i = date.getFullYear(); i > date.getFullYear() - 7; i--) {
      this.years.push(i);
      this.map.set(i, []);
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
    let obj = this.map.get(year);

    obj.push(month);
    this.map.set(year, obj);
    debugger;
    console.log(this.map);
  }
}
