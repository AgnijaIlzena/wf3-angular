import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BeerComponent } from './beer/beer.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent, },
  { path: 'home', component: HomeComponent, },
  { path: 'beer', component: BeerComponent, },
  { path: 'contact', component: ContactComponent, },
  { path: '404', component: NotFoundComponent, },
  { path: '**', component: NotFoundComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
