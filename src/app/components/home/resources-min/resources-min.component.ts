import { Component, OnInit } from '@angular/core';
import { RESOURCES } from '../../resources/resource'

@Component({
  selector: 'app-resources-min',
  templateUrl: './resources-min.component.html',
  styleUrls: ['./resources-min.component.css']
})
export class ResourcesMinComponent implements OnInit {

  gridColumns = 3;
  resources: Array<any> = [];

  constructor() {
    this.getData();
  }

  ngOnInit(): void {
  }

  private getData() {
    this.resources = RESOURCES.slice(0, 3)
  }

}
