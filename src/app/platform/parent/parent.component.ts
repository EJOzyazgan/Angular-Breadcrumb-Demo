import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.sass']
})
export class ParentComponent implements OnInit {

  constructor(
    private breadcrumbService: BreadcrumbService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.breadcrumbService.set('@Parent', 'Parent');
  }

  checkRouteUrl() {
    return this.router.url == '/platform/parent';
  }

}
