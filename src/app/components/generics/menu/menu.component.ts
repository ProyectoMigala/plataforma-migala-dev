import { Component, OnInit } from '@angular/core';
import { MenuItem } from './menu'
import { LoaderService } from '../utils/loader.service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    logo_page = "Migala Dev";

    menuItems: MenuItem[] = [
        {
            label: 'Proyectos',
            showOnMobile: false,
            showOnTablet: false,
            showOnDesktop: true,
            path: 'projects',
        },
        {
            label: 'Recursos',
            showOnMobile: false,
            showOnTablet: false,
            showOnDesktop: true,
            path: 'resources',
        },
        {
            label: 'Calendario',
            showOnMobile: false,
            showOnTablet: false,
            showOnDesktop: true,
            path: 'calendar',
        }
    ];


    loading!: boolean;
    constructor(private loaderService: LoaderService) {
        this.loaderService.isLoading.subscribe((v: any) => {
            this.loading = v;
        });
    }

    ngOnInit(): void {
    }

}