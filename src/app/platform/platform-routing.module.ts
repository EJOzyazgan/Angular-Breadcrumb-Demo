import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ChildOneComponent } from './child-one/child-one.component';
import { ChildThreeComponent } from './child-three/child-three.component';
import { ChildTwoComponent } from './child-two/child-two.component';
import { ParentComponent } from './parent/parent.component';
import { PlatformComponent } from "./platform.component";

const platformRoutes: Routes = [
  {
    path: "",
    component: PlatformComponent,
    children: [
      { path: "", redirectTo: "parent", pathMatch: "full" },
      {
        path: "parent",
        component: ParentComponent,
        data: { breadcrumb: {alias: 'Parent'} },
        children: [
          {
            path: "child-one",
            component: ChildOneComponent,
            data: { breadcrumb: {alias: 'ChildOne'} },
            children: [
              {
                path: "child-two",
                component: ChildTwoComponent,
                data: {breadcrumb: {alias: 'ChildTwo'} },
              },
              {
                path: "child-three",
                component: ChildThreeComponent,
                data: {breadcrumb: {alias: 'ChildThree'} },
              },
            ],
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(platformRoutes)],
  exports: [RouterModule],
})
export class PlatformRoutingModule {}
