import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperEditorComponent } from './paper-editor.component';

describe('PaperEditorComponent', () => {
  let component: PaperEditorComponent;
  let fixture: ComponentFixture<PaperEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaperEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
