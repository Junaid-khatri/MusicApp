import {FlatTreeControl} from '@angular/cdk/tree';
import {Component} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import { ActivatedRoute, Router } from '@angular/router';

interface Feature {
  name: string;
  children?: Feature[];
}

const TREE_DATA: Feature[] = [
  {
    name: 'Artist',
    children: [
      {name: 'Male',
        children: [
          {name: 'Arijit Singh'},
          {name: 'Atif Aslam'},
          {name: 'All'}
        ]
      },
      {name: 'Female',
        children:[
          {name:'Shreya Ghosal'},
          {name: 'Neha Kakar' },
          {name: 'All'}
        ]
      },
      {name: 'All'},
    ]
  }, {
    name: 'Mood',
    children: [
      {name: 'Happy'},
      {name: 'Party'},
      {name: 'Sad'},
      {name: 'All'}
    ]
  },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

/**
 * @title Tree with flat nodes
 */
@Component({
  selector: 'side-bar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent  {
  private _transformer = (node: Feature, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
      node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
      this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  onClick(name:string){
    console.log("button clicked");
    if(name==='Arijit Singh'){
      this.router.navigate(['artist/male/arjit'],{relativeTo:this.activatedRoute})
    }
    else if(name==='Atif Aslam'){
      this.router.navigate(['artist/male/atif-aslam'],{relativeTo:this.activatedRoute})
    }
    else if(name==='Shreya Ghosal'){
      this.router.navigate(['artist/female/shreya-ghosal'],{relativeTo:this.activatedRoute})
    }
    else if(name==='Neha Kakar'){
      this.router.navigate(['artist/female/neha-kakar'],{relativeTo:this.activatedRoute})
    }
    else if(name==='Happy'){
      this.router.navigate(['mood/happy'],{relativeTo:this.activatedRoute})
    }
    else if(name==='Sad'){
      this.router.navigate(['mood/sad'],{relativeTo:this.activatedRoute})
    }
    else if(name==='Party'){
      this.router.navigate(['mood/party'],{relativeTo:this.activatedRoute})
    }
    else{
      this.router.navigate(['songs/all'],{relativeTo:this.activatedRoute})
    }
  }
}