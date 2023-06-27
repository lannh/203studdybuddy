import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  @Output() sidenavClose = new EventEmitter();

  @ViewChild('sidenav')
  sidenav!: MatSidenav; 

  open = false;

  constructor() 
  {}

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }
}
