import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeListComponet } from './recipe-list.component';

describe('RecipeListComponet', () => {
  let component: RecipeListComponet;
  let fixture: ComponentFixture<RecipeListComponet>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeListComponet]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeListComponet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
