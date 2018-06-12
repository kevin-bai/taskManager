import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {CoreModule} from './core/core.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgZorroAntdModule,
    BrowserAnimationsModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
