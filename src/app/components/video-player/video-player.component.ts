import { MusicDataService } from 'src/app/services/music-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {Location} from '@angular/common'
@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {

  musicApiData: any = [];

  id: any;

  constructor(private _activatedRoute: ActivatedRoute, private musicData: MusicDataService,private router:Router ) { }
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
      if (!!this.id) {
        this.musicData.get().subscribe((res) => {
          this.musicApiData = res[this.id];
          console.log(this.musicApiData);
        })
      }
    })
  }
  back(){
    console.log('hello')
    this.router.navigate(['/video-list'])
  }
}
