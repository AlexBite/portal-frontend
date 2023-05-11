import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

interface IQuestion {
  id: number;
  content: string;
}

@Component({
  selector: 'portal-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.scss'],
  preserveWhitespaces: true
})
export class QuestionsListComponent {
  questions$ = this.http.get<IQuestion[]>('/api/questions');
  constructor(private readonly http: HttpClient) {

  }
}
