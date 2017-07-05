/*eslint angular/function-type: [2,"named"]*/
(function() {
  'use strict';

  angular
    .module('app.components')
    .directive('menu', menu);

  function menu() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '/src/components/menu/menu.html',
      scope: {},
      controller: function ($scope, $element, $attrs) {
        console.log('It works! (menu)');
      }
    };
  }
})();
