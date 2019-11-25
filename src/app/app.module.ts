import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnComponentsComponent } from './un-components/un-components.component';
import { TagComponentComponent } from './un-components/tag-component/tag-component.component';
import { ClassComponentComponent } from './un-components/class-component/class-component.component';
import { AttributComponentComponent } from './un-components/attribut-component/attribut-component.component';
import { CssExterneComponentComponent } from './un-components/css-externe-component/css-externe-component.component';
import { CssInterneComponentComponent } from './un-components/css-interne-component/css-interne-component.component';
import { HtmlInterneComponentComponent } from './un-components/html-interne-component/html-interne-component.component';
import { HtmlExterneComponentComponent } from './un-components/html-externe-component/html-externe-component.component';
import { DeuxInterpolationComponent } from './deux-interpolation/deux-interpolation.component';
import { TroisBindingProprieteComponent } from './trois-binding-propriete/trois-binding-propriete.component';

@NgModule({
  declarations: [
    AppComponent,
    UnComponentsComponent,
    TagComponentComponent,
    ClassComponentComponent,
    AttributComponentComponent,
    CssExterneComponentComponent,
    CssInterneComponentComponent,
    HtmlInterneComponentComponent,
    HtmlExterneComponentComponent,
    DeuxInterpolationComponent,
    TroisBindingProprieteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
