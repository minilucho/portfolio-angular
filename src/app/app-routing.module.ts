import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { EdicionComponent } from './components/edicion/edicion.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
{path: 'index', component:IndexComponent},
{path: 'edicion', component:EdicionComponent},
{path: '', redirectTo: '/index', pathMatch: 'full'},
{path: '**', component: ErrorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
