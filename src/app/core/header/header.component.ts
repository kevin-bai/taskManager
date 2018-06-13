import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isCollapsed = false;
  @Output() toggle = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit() {
  }

  togglecollapsed() {
    this.isCollapsed = !this.isCollapsed;
    this.toggle.emit();
  }
}
