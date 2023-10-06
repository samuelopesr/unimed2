import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MfComponent } from './mf/mf.component';

import { FinalComponent } from './mf/final/final.component';
import { OrcamentoComponent } from './pages/orcamento/orcamento.component';
import { SecUnimedComponent } from './pages/sec-unimed/sec-unimed.component';
OrcamentoComponent


const routes: Routes = [
  {
    path: '',
    redirectTo: '/mf-mainpage',
    pathMatch: 'full'
  },
  {
    path: 'orc',
    component: OrcamentoComponent
  },
  {
    path: 'final',
    component: FinalComponent
  },
  {
    path: 'secUni',
    component: SecUnimedComponent
  },
  {
    path:'mf-mainpage',
    component: FinalComponent
  },
  {
    path: 'mf',
    component: MfComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
