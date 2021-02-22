import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';
import { CalendarItemComponent } from './components/calendar-item/calendar-item.component';
import { CalendarItemDialogComponent } from './components/calendar-item-dialog/calendar-item-dialog.component';

const components = [
  CalendarComponent,
  CalendarItemComponent
]

@NgModule({
  declarations: [...components, CalendarItemDialogComponent],
  imports: [
    CommonModule
  ],
  exports: [...components]
})
export class CalendarModule { }
