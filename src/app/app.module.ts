import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';
import { AuthResolver } from './auth-resolver';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'componentone',
    component: ComponentTwoComponent,
    resolve: [AuthResolver]
  },
  {
    path: 'componenttwo',
    component: ComponentOneComponent,
    resolve: [AuthResolver]
  }];

@NgModule({
  declarations: [
    AppComponent,
    ComponentOneComponent,
    ComponentTwoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
