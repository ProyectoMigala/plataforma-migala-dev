import { Component, OnInit, Input } from '@angular/core';
import { RESOURCE_TAGS } from '../resource';

@Component({
    selector: 'resource-generic-component',
    templateUrl: './resourceGeneric.component.html',
    styleUrls: ['./resourceGeneric.component.css']
})
export class ResourceGenericComponent implements OnInit {

    @Input() resource!: any;
    tags:any = RESOURCE_TAGS;

    constructor() {
    }

    ngOnInit() {
    }

    getStyle(tag: string) {
        return {
            'background-color': this.tags[tag].color,
            'color': this.tags[tag].colorfont
        }
    }
}
