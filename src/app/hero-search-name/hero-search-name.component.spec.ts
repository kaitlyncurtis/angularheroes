import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSearchNameComponent } from './hero-search-name.component';

describe('HeroSearchNameComponent', () => {
  let component: HeroSearchNameComponent;
  let fixture: ComponentFixture<HeroSearchNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroSearchNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSearchNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
