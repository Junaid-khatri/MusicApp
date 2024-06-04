import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SongServiceService } from '../song-service.service';
import { Song } from '../song';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public url:string = "";
  public list:Song[] = [];
  index = 0;

  constructor(private router:Router,private songService: SongServiceService){}

  ngOnInit(): void {
      this.url = this.router.url;
      if(this.url.includes('artist')){
        if(this.url.includes('arjit')){
          this.fetchData('arjit-singh');
        }
        else if(this.url.includes('atif-aslam')){
          this.fetchData('atif-aslam');
        }
        else if(this.url.includes('shreya-ghosal')){
          this.fetchData('shreya-ghosal');
        }
        else if(this.url.includes('neha-kakar')){
          this.fetchData('neha-kakar');
        }
        else{
          this.fetchData('all')
        }
      }
      else if(this.url.includes('mood')){
          if(this.url.includes('happy')){
            this.fetchData('happy');

          }
          else if(this.url.includes('sad')){
            this.fetchData('sad');
          }
          else if(this.url.includes('party')){
            this.fetchData('party');
          } 
          else{
            console.log('all');
          }

      }
      
  }
  
  fetchData(name:string){
    this.songService.getSongsOf(name).
    subscribe((data) => this.list=data );
  }

  selectedSong(num:number){
    this.index = num;
  }
  
}
