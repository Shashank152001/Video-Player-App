import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MusicDataService } from 'src/app/services/music-data.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {

  musicsList:any = [];

  constructor(private musicData:MusicDataService,private router:Router) { }

  ngOnInit(): void {
    this.musicData.get().subscribe((res)=>{
      this.musicsList = res;
    })
  }
  routeToPlayer(index:number){
    this.router.navigate(['video-player',index]);
  }

}
