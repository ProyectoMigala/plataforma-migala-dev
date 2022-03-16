import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { RESOURCES } from './resource'

@Component({
    selector: 'resource-component',
    templateUrl: './resource.component.html',
    styleUrls: ['./resource.component.css']
})
export class ResourceComponent implements OnInit {

    resources!: any;
    resource!: any;

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