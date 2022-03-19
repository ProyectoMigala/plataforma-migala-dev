import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceGenericComponent } from './resourceGeneric.component';

describe('ResourceGenericComponent', () => {
    let component: ResourceGenericComponent;
    let fixture: ComponentFixture<ResourceGenericComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ResourceGenericComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ResourceGenericComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
