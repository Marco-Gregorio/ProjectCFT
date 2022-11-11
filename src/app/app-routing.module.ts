import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'menuprincipal',
    pathMatch: 'full'
  },
  {
    path: 'iniciosesion',
    loadChildren: () => import('./paginas/iniciosesion/iniciosesion.module').then( m => m.IniciosesionPageModule)
  },
  {
    path: 'menuprincipal',
    loadChildren: () => import('./paginas/menuprincipal/menuprincipal.module').then( m => m.MenuprincipalPageModule)
  },
  {
    path: 'salasylaboratorios',
    loadChildren: () => import('./paginas/salasylaboratorios/salasylaboratorios.module').then( m => m.SalasylaboratoriosPageModule)
  },
  {
    path: 'tomarsalalab',
    loadChildren: () => import('./paginas/tomarsalalab/tomarsalalab.module').then( m => m.TomarsalalabPageModule)
  },
  {
    path: 'desocuparsalalab',
    loadChildren: () => import('./paginas/desocuparsalalab/desocuparsalalab.module').then( m => m.DesocuparsalalabPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./paginas/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'configuracion',
    loadChildren: () => import('./paginas/configuracion/configuracion.module').then( m => m.ConfiguracionPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
