import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSearchHometownComponent } from './hero-search-hometown.component';

describe('HeroSearchHometownComponent', () => {
  let component: HeroSearchHometownComponent;
  let fixture: ComponentFixture<HeroSearchHometownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroSearchHometownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSearchHometownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
