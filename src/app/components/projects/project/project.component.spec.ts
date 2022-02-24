import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectGenericComponent } from './project.component';

describe('ProjectGenericComponent', () => {
    let component: ProjectGenericComponent;
    let fixture: ComponentFixture<ProjectGenericComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ProjectGenericComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ProjectGenericComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
