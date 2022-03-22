import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import {  authReducer } from './store/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/auth.effects';
import { AuthFacade } from './store/auth.facade';


@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature("user",authReducer),
    EffectsModule.forFeature([AuthEffects]),
    CommonModule,
  ],
  providers: [AuthFacade],
})
export class AuthModule {}