import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyHomeComponent } from './lazy-home/lazy-home.component';
import { LazyChild2Component } from './lazy-child2/lazy-child2.component';
import { LazyChild1Component } from './lazy-child1/lazy-child1.component';

const routes: Routes = [
  {path: '', component: LazyHomeComponent, children:[
    {path: '', redirectTo: 'child1', pathMatch: 'full'},
    {path: 'child1', component: LazyChild1Component},
    {path: 'child2', component: LazyChild2Component}
  ]},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyLoadingModuleRoutingModule { }
