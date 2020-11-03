import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavplaylistComponent } from './favplaylist.component';

describe('FavplaylistComponent', () => {
  let component: FavplaylistComponent;
  let fixture: ComponentFixture<FavplaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavplaylistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavplaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
