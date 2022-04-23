import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  selector: boolean = false;
  selectorDropdown() {
    this.selector = !this.selector;
  }
  selected: string = "";
  isToggle: number = 1;
  constructor() {}

  ngOnInit(): void {}

}
