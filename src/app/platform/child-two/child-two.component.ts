import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.sass']
})
export class ChildTwoComponent implements OnInit {

  constructor(
    private breadcrumbService: BreadcrumbService,
  ) { }

  ngOnInit(): void {
    this.breadcrumbService.set('@ChildTwo', 'Child Two');
  }

}
