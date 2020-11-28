import { RouterModule } from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PlatformComponent} from './platform.component';
import {PlatformRoutingModule} from './platform-routing.module';
import { ParentComponent } from './parent/parent.component';
import { ChildOneComponent } from './child-one/child-one.component';
import { ChildTwoComponent } from './child-two/child-two.component';
import { ChildThreeComponent } from './child-three/child-three.component';
import { MatIconModule } from '@angular/material/icon';
import { BreadcrumbModule } from "xng-breadcrumb";


@NgModule({
  declarations: [
    PlatformComponent,
    ParentComponent,
    ChildOneComponent,
    ChildTwoComponent,
    ChildThreeComponent,
  ],
  imports: [
    CommonModule,
    PlatformRoutingModule,
    BreadcrumbModule,
    RouterModule,
    MatIconModule,
  ]
})
export class PlatformModule {
}
