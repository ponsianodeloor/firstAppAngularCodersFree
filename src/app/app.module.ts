import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador/contador.component';
import { BotonesComponent } from './botones/botones.component';
import { ChangeImageComponent } from './change-image/change-image.component';
import { FormularioComponent } from './formulario/formulario.component';
import { BuclesComponent } from './bucles/bucles.component';
import { SwitchComponent } from './switch/switch.component';
import { FormTemplateComponent } from './form-template/form-template.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FormReactiveComponent } from './form-reactive/form-reactive.component';
import { FormReactiveFormGroupComponent } from './form-reactive-form-group/form-reactive-form-group.component';
import { FormReactiveFormBuilderComponent } from './form-reactive-form-builder/form-reactive-form-builder.component';
import { ChildrenInputComponent } from './children-input/children-input.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    BotonesComponent,
    ChangeImageComponent,
    FormularioComponent,
    BuclesComponent,
    SwitchComponent,
    FormTemplateComponent,
    FormReactiveComponent,
    FormReactiveFormGroupComponent,
    FormReactiveFormBuilderComponent,
    ChildrenInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
