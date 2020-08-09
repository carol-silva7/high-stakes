import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { UsuarioComponent } from './usuario.component';

@NgModule({
  declarations: [UsuarioComponent],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [UsuarioComponent]
})
export class UsuarioModule { }
