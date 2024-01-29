import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'tracks',
    loadChildren: () => import('@modules/tracks/tracks.module').then(m => m.TracksModule)
  },
  {
    path: 'favorites',
    loadChildren: () => import('@modules/favorites/favorites.module').then(m => m.FavoritesModule)
  },
  {
    path: 'artists',
    loadChildren: () => import('@modules/artists/artists.module').then(m => m.ArtistsModule)
  },
  {
    path: 'history',
    loadChildren: () => import('@modules/history/history.module').then(m => m.HistoryModule)
  },
  {
    path: 'random',
    loadChildren: () => import('@modules/random/random.module.module').then(m => m.RandomModule)
  },
  {
    path: '**',//TODO 404 cuando no existe la ruta
    redirectTo: '/tracks'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
