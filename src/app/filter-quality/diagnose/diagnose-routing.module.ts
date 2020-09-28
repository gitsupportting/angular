import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiagnoseComponent } from './diagnose.component';

export const routes: Routes = [
  {
    path: '**',
    component: DiagnoseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiagnoseRoutingModule {}
