import { Component, OnInit, Input } from '@angular/core';
import { GithubService } from '../../generics/utils/github.service';

@Component({
    selector: 'project-generic-component',
    templateUrl: './projectGeneric.component.html',
    styleUrls: ['./projectGeneric.component.css']
})
export class ProjectGenericComponent implements OnInit {

    @Input() Project!: any;

    issuesDisplayedColumns = ['name'];
    issuesDataSource: any;

    eventsDisplayedColumns = ['name'];
    eventsDataSource: any;

    contributors: any;

    constructor(private githubService: GithubService) {
    }

    ngOnInit() {
        this.getData();
    }

    private getData() {
        this.githubService.getIssues(this.Project)
            .subscribe(
                (data: any) => {
                    this.issuesDataSource = data.map((issue: any) => {
                        return { name: issue.title, url: issue.html_url }
                    });
                }
            );

        this.githubService.getEvents(this.Project)
            .subscribe(
                (data: any) => {
                    this.eventsDataSource = data.map((event: any) => {
                        if (event.type === "CreateEvent") {

                            if (event.payload.ref_type === 'repository') {
                                return {
                                    name: "Repositorio creado",
                                    url: this.Project.url
                                }

                            }

                            return {
                                name: `${event.payload.ref_type} Created: ${event.payload.ref}`,
                                url: this.Project.url
                            }
                        }

                        if (event.type === "DeleteEvent") {
                            return {
                                name: `${event.payload.ref_type} Deleted: ${event.payload.ref}`,
                                url: this.Project.url
                            }
                        }

                        if (event.type === "PullRequestEvent") {
                            return {
                                name: `PR ${event.payload.action}: ${event.payload.pull_request.title}`,
                                url: event.payload.pull_request.html_url
                            }
                        }

                        return undefined
                    }).filter((event: any) => event !== undefined);
                }
            );

        this.githubService.getContributors(this.Project)
            .subscribe(
                (data: any) => {
                    this.contributors = data.map((contributor: any) => {
                        return {
                            username: contributor.login,
                            url: contributor.html_url,
                            img: contributor.avatar_url
                        }
                    });
                }
            );
    }
}
