import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { TestLazyModule } from './test-lazy/test-lazy.module';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'lazy', 
    loadChildren: () => import('./test-lazy/test-lazy.module').then(m => m.TestLazyModule)
  },
  { path: '**', pathMatch: 'full', redirectTo: '' },
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
