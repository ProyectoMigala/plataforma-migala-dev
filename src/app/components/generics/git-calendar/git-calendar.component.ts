import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'lib-ng-git-calendar',
    template: `
    <lib-graph
        [data] ="match"
    ></lib-graph>
  `,
    styles: []
})
export class GitCalendarComponent implements OnInit {

    match: any;
    get data(): any {
        return this.match;
    }
    @Input() set data(value: any) {
        this.match = value;
    }

    constructor() {
    }

    ngOnInit() {
    }

}