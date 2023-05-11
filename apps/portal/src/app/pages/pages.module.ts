import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { QuestionsListComponent } from './questions-list/questions-list.component';
import { MarkdownModule } from "ngx-markdown";

@NgModule({
  declarations: [QuestionsListComponent],
  imports: [CommonModule, PagesRoutingModule, MarkdownModule],
})
export class PagesModule {
}
