import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactComponent } from './components/contact/contact.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';

const routes: Routes = [
  {path: '', redirectTo: '/productos', pathMatch: 'full' },
  {path:"productos",component: MainpageComponent},
  {path:"contacto",component: ContactComponent},
  {path:"acercaDe",component: AboutusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
