import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { authorsFeatureKey, authorsReducer } from './authors/authors.reducer';
import { AuthorsEffects } from './authors/authors.effects';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(authorsFeatureKey, authorsReducer),
    EffectsModule.forFeature([AuthorsEffects]),
    CommonModule,
  ],
})
export class AuthorsStoreModule {}
