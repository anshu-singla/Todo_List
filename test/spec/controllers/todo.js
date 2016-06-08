'use strict';

describe('Controller: TodoCtrl', function () {

  // load the controller's module
  beforeEach(module('yoworkApp'));

  var TodoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TodoCtrl = $controller('TodoCtrl', {
      $scope: scope
    });
  }));

  it('should have no items to start', function () {
    expect(scope.todos.length).toBe(0);
  });

  it('should add items to the list', function () {
    scope.todo='Test 1';
    scope.addTodo();
    expect(scope.todos.length).toBe(1);
  });

  it('should add and then remove an item from the list', function () {
    scope.todo='Test 1';
    scope.addTodo();
    scope.removeTodo();
    expect(scope.todos.length).toBe(0);
  });

});
