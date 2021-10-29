
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { 
     BrowserDynamicTestingModule, 
     platformBrowserDynamicTesting 
} 
from '@angular/platform-browser-dynamic/testing';
import { FormBuilder } from '@angular/forms';

describe('AppComponent', () => {
    beforeAll( ()=> {
         TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
    });
    beforeEach(
        waitForAsync(() => {
             TestBed.configureTestingModule({
             imports: [RouterTestingModule],
             declarations: [AppComponent],
            providers: [FormBuilder]
        }).compileComponents();
    })
  );

  it(
    'should render title \'Welcome to Form Validation\' in a h1 tag',
    waitForAsync(() => {
          const fixture = TestBed.createComponent(AppComponent);
          fixture.detectChanges();
          const compiled = fixture.debugElement.nativeElement;
          expect(compiled.querySelector('h1').textContent).toContain('Welcome to Form Validation');
      })
  );
});
