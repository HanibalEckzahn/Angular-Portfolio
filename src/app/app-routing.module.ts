import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent as Home} from './home/home.component';
import { ImpressumComponent as Impressum } from './impressum/impressum.component';
import { DatenschutzComponent as Datenschutz } from './datenschutz/datenschutz.component';

const routes: Routes = [
  {path: '', component: Home},
  {path: 'impressum', component: Impressum},
  {path: 'datenschutz', component: Datenschutz}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
