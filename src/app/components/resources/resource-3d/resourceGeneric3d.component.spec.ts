import { ComponentFixture, TestBed } from '@angular/core/testing';

import {  Resource3DGenericComponent } from './resourceGeneric3d.component';

describe('Resource3DGenericComponent', () => {
    let component: Resource3DGenericComponent;
    let fixture: ComponentFixture<Resource3DGenericComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [Resource3DGenericComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(Resource3DGenericComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
