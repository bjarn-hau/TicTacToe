import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaytileComponent } from './playtile.component';

describe('PlaytileComponent', () => {
  let component: PlaytileComponent;
  let fixture: ComponentFixture<PlaytileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaytileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaytileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
