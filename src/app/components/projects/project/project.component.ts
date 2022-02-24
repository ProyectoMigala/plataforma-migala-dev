import { Component, OnInit, Input } from '@angular/core';

const ELEMENT_DATA = [
    { name: 'Hydrogen' },
    { name: 'Helium' },
    { name: 'Lithium' },
    { name: 'Beryllium' },
    { name: 'Boron' },
    { name: 'Carbon' },
    { name: 'Nitrogen' },
    { name: 'Oxygen' },
    { name: 'Fluorine' },
    { name: 'Neon' },
];


@Component({
    selector: 'project-generic-component',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.css']
})
export class ProjectGenericComponent implements OnInit {

    @Input() Project!: any;

    issuesDisplayedColumns = ['name'];
    issuesDataSource = ELEMENT_DATA;
    issuesTitle = 'Issues';

    eventsDisplayedColumns = ['name'];
    eventsDataSource = ELEMENT_DATA;
    eventsTitle = 'Events';

    contributors = [
        {
            username: 'danyael031',
            url: 'https://github.com/danyael031',
            img: 'https://avatars.githubusercontent.com/u/32922313?v=4'
        },
        {
            username: 'joshuansu0897',
            url: 'https://github.com/joshuansu0897',
            img: 'https://avatars.githubusercontent.com/u/17036872?'
        },
        {
            username: 'Sandalf',
            url: 'https://github.com/Sandalf',
            img: 'https://avatars.githubusercontent.com/u/16421088?v=4'
        },
        {
            username: 'AntonioHReyes',
            url: 'https://github.com/AntonioHReyes',
            img: 'https://avatars.githubusercontent.com/u/51680520?v=4'
        }
    ]

    constructor() {
        this.getData();
    }

    ngOnInit() {
    }

    private getData() {

    }
}
