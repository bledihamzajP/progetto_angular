import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LibriListaComponent } from "./components/libri-lista/libri-lista.component";
import { LibriInfoComponent } from "./components/libri-info/libri-info.component";
import { AddLibriComponent } from "./components/add-libri/add-libri.component";
import { page404 } from "./components/page404/page404.component";

const routes: Routes = [
  { path: '', redirectTo: 'libro', pathMatch: 'full' },
  { path: 'libro', component: LibriListaComponent },
  { path: 'libro/:id', component: LibriInfoComponent },
  { path: 'aggiungi',pathMatch: 'full', component: AddLibriComponent },
  { path: '**',pathMatch: 'full', component: page404 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
