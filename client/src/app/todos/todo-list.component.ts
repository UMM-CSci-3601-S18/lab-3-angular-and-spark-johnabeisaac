import {Component, OnInit} from '@angular/core';
import {TodoListService} from './todo-list.service';
import {Todo} from './todo';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-todo-list-component',
  templateUrl: 'todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  providers: []
})

export class TodoListComponent implements OnInit {
  // These are public so that tests can reference them (.spec.ts)
  public todos: Todo[];
  public filteredTodos: Todo[];

  public todoOwner: string;
  public todoBody: string;
  public todo_Id: string;
  public todoStatus: string;
  public todoCategory: string;
  // Inject the UserListService into this component.
  // That's what happens in the following constructor.
  //
  // We can call upon the service for interacting
  // with the server.

  constructor(private todoListService: TodoListService) {

  }

  public filterTodos(searchOwner: string, searchBody: string,searchStatus: string, searchCategory:string): Todo[] {

    this.filteredTodos = this.todos;

    // Filter by ownership
    if (searchOwner != null) {
      searchOwner = searchOwner.toLocaleLowerCase();

      this.filteredTodos = this.filteredTodos.filter(todo => {
        return !searchOwner || todo.owner.toLowerCase().indexOf(searchOwner) !== -1;
      });
    }



    // filter by body
    if (searchBody != null) {
      searchBody = searchBody.toLocaleLowerCase();

      this.filteredTodos = this.filteredTodos.filter(todo => {
        return !searchBody || todo.body.toLowerCase().indexOf(searchBody) !== -1;
      });
    }

     //Filter by status

    if (searchStatus != null) {

      let theStatus: boolean;

      if (searchStatus === "complete") {
        theStatus = true;

      } else if (searchStatus === "incomplete") {
        theStatus = false;

      } else {
        return this.filteredTodos;
      }

      this.filteredTodos = this.filteredTodos.filter(todo => {
        return !searchStatus || todo.status === Boolean(theStatus);
      });
    }




    //Filter by Category
    if (searchCategory != null) {
      searchCategory = searchCategory.toLocaleLowerCase();

      this.filteredTodos = this.filteredTodos.filter(todo => {
        return !searchCategory || todo.category.toLowerCase().indexOf(searchCategory) !== -1;
      });
    }







    return this.filteredTodos;
  }

  /**
   * Starts an asynchronous operation to update the users list
   *
   **/

  refreshTodos(): Observable<Todo[]> {
    // Get Todos returns an Observable, basically a "promise" that
    // we will get the data from the server.
    //
    // Subscribe waits until the data is fully downloaded, then
    // performs an action on it (the first lambda)
    const users: Observable<Todo[]> = this.todoListService.getTodos();
    users.subscribe(
      returnedUsers => {
        this.todos = returnedUsers;
        this.filterTodos(this.todoBody, this.todoCategory,this.todoOwner,this.todoStatus);
      },
      err => {
        console.log(err);
      });
    return users;
  }


  ngOnInit(): void {
    this.refreshTodos();
  }
}


