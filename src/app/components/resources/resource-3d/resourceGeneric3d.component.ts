import { RESOURCE_TAGS } from '../resource';

import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs'
import { map, mergeWith, delay, share, repeat, switchMap, takeUntil } from 'rxjs/operators'

@Component({
    selector: 'resource-3d-generic-component',
    templateUrl: './resourceGeneric3d.component.html',
    styleUrls: ['./resourceGeneric3d.component.scss']
})
export class Resource3DGenericComponent implements OnInit {

    mouseX = 0;
    mouseY = 0;

    @Input() height!: any;
    @Input() width!: any;

    @Input() resource!: any;
    tags: any = RESOURCE_TAGS;

    get mousePX() {
        return this.mouseX / this.width;
    }

    get mousePY() {
        return this.mouseY / this.height;
    }

    @Input() cardBgImage: string = '';
    @ViewChild('card', { static: true }) card!: ElementRef;
    cardStyling = this.cardStyle();

    constructor() {

    }

    getStyle(tag: string) {
        return {
            'background-color': this.tags[tag].color,
            'color': this.tags[tag].colorfont
        }
    }

    cardStyle() {
        return this.transformStyle();
    }

    cardBgTransform() {

        return this.transformStyle();
    }

    private transformStyle() {
        const tX = this.mousePX * -20;
        const tY = this.mousePY * -20;
        return { transform: `rotateY(${tX}deg) rotateX(${tY}deg)` };
    }

    get nativeElement(): HTMLElement {
        return this.card.nativeElement;
    }

    ngOnInit() {
        const mouseMove$ = fromEvent<MouseEvent>(this.card.nativeElement, 'mousemove');
        const mouseLeave$ = fromEvent<MouseEvent>(this.card.nativeElement, 'mouseleave').pipe(
            delay(100),
            map(() => ({ mouseX: 0, mouseY: 0 })),
            share()
        )
        const mouseEnter$ = fromEvent<MouseEvent>(this.card.nativeElement, 'mouseenter').pipe(takeUntil(mouseLeave$))

        mouseEnter$.pipe(
            switchMap(() => mouseMove$),
            map(e => ({ mouseX: e.pageX - this.nativeElement.offsetLeft - this.width / 2, mouseY: e.pageY - this.nativeElement.offsetTop - this.height / 2 }))
            , mergeWith(mouseLeave$), repeat()
        ).subscribe(e => {
            this.mouseX = e.mouseX;
            this.mouseY = e.mouseY;
        })

    }
}