import {TodoPage} from './todo-list.po';
import {browser, protractor} from 'protractor';

let origFn = browser.driver.controlFlow().execute;

//https://hassantariqblog.wordpress.com/2015/11/09/reduce-speed-of-angular-e2e-protractor-tests/
browser.driver.controlFlow().execute = function () {
  let args = arguments;

  // queue 100ms wait between test
  //This delay is only put here so that you can watch the browser do its' thing.
  //If you're tired of it taking long you can remove this call
  origFn.call(browser.driver.controlFlow(), function () {
    return protractor.promise.delayed(100);
  });

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
    expect(page.getUniqueTodo("Homework")).toEqual("Barry");
    page.backspace();
    page.typeAStatus("f")
    expect(page.getUniqueTodo("Video games")).toEqual("Fry");
  });

  it('should type something in filter name box and check that it returned correct element', () => {
    page.navigateTo();
    page.typeACategory("home");
    expect(page.getUniqueTodo("Homework")).toEqual("Barry");
    page.backspace();
    page.typeABody("Proident cupidatat")
    expect(page.getUniqueTodo("Proident cupidatat exercitation id ullamco magna do qui aliquip id. Eiusmod labore non nostrud culpa duis incididunt incididunt esse occaecat amet officia.")).toEqual("Workman");
  });




    expect(page.getUniqueTodo("stokesclayton@momentia.com")).toEqual("Stokes Clayton");

    expect(page.getUniqueTodo("merrillparker@escenta.com")).toEqual("Merrill Parker");

  });
//});


