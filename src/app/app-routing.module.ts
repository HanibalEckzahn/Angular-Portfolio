import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent as Home} from './home/home.component';
import { ImpressumComponent as Impressum } from './impressum/impressum.component';
import { DatenschutzComponent as Datenschutz } from './datenschutz/datenschutz.component';
import { FournullfourComponent as fournullfour } from './fournullfour/fournullfour.component';
import {ProjektPostComponent as post} from './projekt-post/projekt-post.component';
import { ProjektcardComponent } from './projektcard/projektcard.component';


const routes: Routes = [
  {path: '', component: Home},
  {path: 'impressum', component: Impressum},
  {path: 'datenschutz', component: Datenschutz},
  {path: 'roomba', component: post},
  {path: '**', component: fournullfour}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false, anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

