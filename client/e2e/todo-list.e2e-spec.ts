import {TodoPage} from './todo-list.po';
import {browser, protractor} from 'protractor';

let origFn = browser.driver.controlFlow().execute;

//https://hassantariqblog.wordpress.com/2015/11/09/reduce-speed-of-angular-e2e-protractor-tests/
browser.driver.controlFlow().execute = function () {
  let args = arguments;

  // // queue 100ms wait between test
  // //This delay is only put here so that you can watch the browser do its' thing.
  // //If you're tired of it taking long you can remove this call
  // origFn.call(browser.driver.controlFlow(), function () {
  //   return protractor.promise.delayed(100);
  // });

  return origFn.apply(browser.driver.controlFlow(), args);
};

describe('Todo list', () => {
  let page: TodoPage;

  beforeEach(() => {
    page = new TodoPage();
  });

  it('should get and highlight Todo Name attribute ', () => {
    page.navigateTo();
    expect(page.getTodoTitle()).toEqual('Todos');
  });

  it('should type something in filter name box and check that it returned correct element', () => {
    page.navigateTo();
    page.typeAnOwner("barry");
    expect(page.getUniqueTodo("588959856f0b82ee93cd93eb")).toEqual("Barry");
    page.backspace();

  });

  it('should type something in filter name box and check that it returned correct element', () => {
    page.navigateTo();
    page.typeACategory("home");
    expect(page.getUniqueTodo("58895985ea08e3fe6f31e42e")).toEqual("Barry");
    page.backspace();
  });



  it('should type something in filter name box and check that it returned correct element', () => {
    page.navigateTo();
    page.typeAStatus("incomplete")
    expect(page.getUniqueTodo("58895985ee4964bdc668bd9e")).toEqual("Fry");
    page.backspace();
  });

  it('should type something in filter name box and check that it returned correct element', () => {
    page.navigateTo();
    page.typeABody("Incididunt enim ea sit qui")
    expect(page.getUniqueTodo("58895985186754887e0381f5")).toEqual("Blanche");
    page.backspace();
  });





  });



