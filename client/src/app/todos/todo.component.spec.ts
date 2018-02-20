import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {Todo} from './todo';
import {TodoComponent} from './todo.component';
import {TodoListService} from './todo-list.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

describe('Todo component', () => {

  let todoComponent: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  let todoListServiceStub: {
    getTodoById: (todoId: string) => Observable<Todo>
  };

  beforeEach(() => {
    // stub TodoService for test purposes
    todoListServiceStub = {
      getTodoById: (todoId: string) => Observable.of([
        {
          id: "588959856601f6a77b6a2862",
          owner: "Fry",
          status: false,
          body: "Sunt esse dolore sunt Lorem velit reprehenderit incididunt minim Lorem sint Lorem sit voluptate proident. Veniam voluptate veniam aliqua ipsum cupidatat.",
          category: "homework"
        },
        {
          id: "58895985847a6c1445ec4048",
          owner: "Barry",
          status: true,
          body: "Deserunt velit reprehenderit deserunt sunt excepteur sit eu eiusmod in voluptate aute minim mollit. Esse aliqua esse officia do proident non consequat non mollit.",
          category: "homework"
        },
        {
          id: "58895985e9aaeaad6292df39",
          owner: "Dawn",
          status: true,
          body: "Magna exercitation pariatur in labore. Voluptate adipisicing reprehenderit dolor veniam dolore amet duis anim nisi.",
          category: "homework"
        }
      ].find(todo => todo.id === todoId))
    };

    TestBed.configureTestingModule({
      declarations: [TodoComponent],
      providers: [{provide: TodoListService, useValue: todoListServiceStub}]
    });
  });

  beforeEach(async(() => {
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TodoComponent);
      todoComponent = fixture.componentInstance;
    });
  }));

  it('can retrieve Pat by Fry', () => {
    todoComponent.setId('588959856601f6a77b6a2862');
    expect(todoComponent.todo).toBeDefined();
    expect(todoComponent.todo.category).toBe('homework');
    expect(todoComponent.todo.owner).toBe('Fry');
  });

  it('returns undefined for Santa', () => {
    todoComponent.setId('Santa');
    expect(todoComponent.todo).not.toBeDefined();
  });

});

