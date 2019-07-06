import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DespesasRoutingModule } from './despesas-routing.module';
import { DespesasListComponent } from './containers/despesas-list/despesas-list.component';
import { DespesasDetailComponent } from './containers/despesas-detail/despesas-detail.component';


@NgModule({
  declarations: [DespesasListComponent, DespesasDetailComponent],
  imports: [
    CommonModule,
    DespesasRoutingModule
  ]
})
export class DespesasModule { }
