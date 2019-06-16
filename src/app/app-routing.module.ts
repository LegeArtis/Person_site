import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main/main.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {WorkComponent} from './work/work.component';
import {AboutComponent} from './about/about.component';

const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'portfolio', component: PortfolioComponent},
  { path: 'work', component: WorkComponent},
  { path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
