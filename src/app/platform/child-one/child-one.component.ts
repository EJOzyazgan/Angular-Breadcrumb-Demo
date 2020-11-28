import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.sass']
})
export class ChildOneComponent implements OnInit {

  constructor(
    private breadcrumbService: BreadcrumbService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.breadcrumbService.set('@ChildOne', 'Child One');
  }

  checkRouteUrl() {
    return this.router.url == '/platform/parent/child-one';
  }

}
