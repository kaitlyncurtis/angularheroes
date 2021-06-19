import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSearchPowerComponent } from './hero-search-power.component';

describe('HeroSearchPowerComponent', () => {
  let component: HeroSearchPowerComponent;
  let fixture: ComponentFixture<HeroSearchPowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroSearchPowerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSearchPowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
