import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinylListComponent } from './vinyl-list.component';

describe('VinylListComponent', () => {
  let component: VinylListComponent;
  let fixture: ComponentFixture<VinylListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VinylListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VinylListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
