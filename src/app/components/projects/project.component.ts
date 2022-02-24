import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { PROJECTS } from './project'

@Component({
    selector: 'project-component',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectComponent implements OnInit {

    projects!: any;
    project!: any;

    constructor(
        private readonly _ref: ChangeDetectorRef
    ) {
        this.getData();
    }

    ngOnInit() {
    }

    updateProject(project: any) {
        this.project = project;
    }

    private getData() {
        this.projects = PROJECTS
        this.project = this.projects[0];
    }
}