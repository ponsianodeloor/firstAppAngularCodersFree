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
    FormReactiveComponent
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
