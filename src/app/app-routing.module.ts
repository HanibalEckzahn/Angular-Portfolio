import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent as Home} from './home/home.component';
import { ImpressumComponent as Impressum } from './impressum/impressum.component';
import { DatenschutzComponent as Datenschutz } from './datenschutz/datenschutz.component';
import { FournullfourComponent as fournullfour } from './fournullfour/fournullfour.component';


const routes: Routes = [
  {path: '', component: Home},
  {path: 'impressum', component: Impressum},
  {path: 'datenschutz', component: Datenschutz},
  {path: '**', component: fournullfour}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
