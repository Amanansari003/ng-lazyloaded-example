import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestLazyComponent } from './test-lazy.component';
import { RouterModule, Routes } from '@angular/router';
import { TestLibModule } from 'test-lib';

const routes: Routes = [
  { path:"", component:TestLazyComponent}
]


@NgModule({
  declarations: [
    TestLazyComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TestLibModule
  ],
  exports:[
    RouterModule
  ]
})
export class TestLazyModule { }
