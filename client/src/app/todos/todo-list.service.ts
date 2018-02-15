import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from "rxjs";
import "rxjs/add/operator/map";

import {Todo} from './todo';
import {environment} from "../../environments/environment";

@Injectable()
export class TodoListService {
  readonly todoUrl: string = environment.API_URL + "todos";

  constructor(private httpClient: HttpClient) {
  }

  getTodos(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.todoUrl);

  }

  getTodoById(id: string): Observable<Todo> {
    return this.httpClient.get<Todo>(this.todoUrl + "/" + id);
  }
}
