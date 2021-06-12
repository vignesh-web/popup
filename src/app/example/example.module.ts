import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule, MatDialogModule, MatDialogRef } from '@angular/material/';
import { RouterModule } from '@angular/router';

import { ExampleComponent } from './example.component';
import { DialogModule } from './dialog/dialog.module';
import { DialogComponent } from './dialog/dialog.component';
import { HomeComponent } from './dialog/home/home.component';
import { FoodComponent } from './dialog/food/food.component';
@NgModule({
  imports: [CommonModule, MatTabsModule, MatDialogModule, DialogModule,
    RouterModule.forChild([
      {
        path: '', component: ExampleComponent
      },
      { path: 'dialog', component: DialogComponent }
    ])
  ],
  declarations: [ExampleComponent],
  entryComponents: [
    DialogComponent
  ]
})
export class ExampleModule { }
