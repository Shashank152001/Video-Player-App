import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoListComponent } from './components/video-list/video-list.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';

const routes: Routes = [
  {
    path: 'video-list',
    component: VideoListComponent
  },
  {
    path : '',
    redirectTo: 'video-list',
    pathMatch: 'full'
  },
  {
    path: 'video-player/:id',
    component:VideoPlayerComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
