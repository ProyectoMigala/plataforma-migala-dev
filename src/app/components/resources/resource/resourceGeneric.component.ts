import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'resource-generic-component',
    templateUrl: './resourceGeneric.component.html',
    styleUrls: ['./resourceGeneric.component.css']
})
export class ResourceGenericComponent implements OnInit {

    @Input() resource!: any;

    collapsed = true;

    constructor() {

    }

    ngOnInit() {
    }

    collapCard() {
        this.collapsed = !this.collapsed;
    }
}
