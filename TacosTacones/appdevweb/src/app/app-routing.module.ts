import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'home-view', loadChildren: () => import('./modules/components/home-view/home-view.module').then(m => m.HomeViewModule) }, { path: 'home-view', loadChildren: () => import('./modules/components/home-view/home-view.module').then(m => m.HomeViewModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
