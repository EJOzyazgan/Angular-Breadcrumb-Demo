import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'platform'},
  {path: 'platform', loadChildren: () => 
   import('./platform/platform.module').then(m => m.PlatformModule), 
   data: {breadcrumb: { skip: true }}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }