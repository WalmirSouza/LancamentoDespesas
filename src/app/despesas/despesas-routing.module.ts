import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DespesasListComponent} from './containers/despesas-list/despesas-list.component';
import {DespesasDetailComponent} from './containers/despesas-detail/despesas-detail.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'list'},
  {path: 'list', component: DespesasListComponent},
  {path: 'detail', component: DespesasDetailComponent}   ,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DespesasRoutingModule { }
