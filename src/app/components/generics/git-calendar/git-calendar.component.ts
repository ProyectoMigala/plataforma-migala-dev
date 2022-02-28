import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'lib-ng-git-calendar',
    template: `
    <lib-graph
        [colorLevel1]="''+colorLevel1"
        [colorLevel2]="''+colorLevel2"
        [colorLevel3]="''+colorLevel3"
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

    @Input('colorLevel1')
    colorLevel1!: any;
    @Input('colorLevel2')
    colorLevel2!: any;
    @Input('colorLevel3')
    colorLevel3!: any;

    constructor() {
    }

    ngOnInit() {
    }

}