import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { QuestionsListComponent } from './questions-list/questions-list.component';

@NgModule({
  declarations: [QuestionsListComponent],
  imports: [CommonModule, PagesRoutingModule],
})
export class PagesModule {
}
