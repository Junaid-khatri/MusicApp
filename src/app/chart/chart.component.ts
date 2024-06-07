import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js/auto';
import { valueOrDefault } from 'chart.js/dist/helpers/helpers.core';
import { SongServiceService } from '../song-service.service';
import { Song } from '../song';
import { Observable } from 'rxjs';
Chart.register(...registerables);

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
  constructor(private service: SongServiceService) {}



  songs: Song[] = [];
  yearCount:any = 0;
  
    ngOnInit(): void {
    this.fetchSongs();
    this.createChart('pie','myChart');
    this.createChart('bar','chart2');
    this.fetchyear();
    }

    createChart(value: any, chartName: any) {
    const ctx = document.getElementById(chartName);

    new Chart(chartName, {
      type: value,
      data: {
        labels: ['1995', '1996', '1997', '1998'], 
        datasets: [
          {
            label: '# of Votes',
            data: [2,4,5,9],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  fetchSongs() {
    this.service.getAllSongs().subscribe((data) => {
      this.songs = data;
    });
  }
  fetchyear(){
    this.service.getSongsByYear(1996).subscribe((data)=>this.yearCount=data);
  }

  add(x:number,y:number){
    console.log(x+y)
  }
  


 
}
