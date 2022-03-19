import { Component, OnInit } from '@angular/core';
import { RESOURCES } from './resource'

@Component({
    selector: 'resource-component',
    templateUrl: './resource.component.html',
    styleUrls: ['./resource.component.css']
})
export class ResourceComponent implements OnInit {

    resources!: any;
    resource!: any;
    searchText: string = '';
    gridColumns = 3;

    constructor() {
        this.getData();
    }

    ngOnInit() {
    }

    updateResource(resource: any) {
        this.resource = resource;
    }

    private getData() {
        this.resources = RESOURCES
        this.resource = this.resources[0];
    }
}