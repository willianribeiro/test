(function() {
  'use strict';

  angular
    .module('app.components')
    .directive('menu', menu);

    function menu() {
      return {
        restrict: 'E',
        replace: true,
        templateUrl   : '/src/components/Menu/Menu.html',
        scope: {},
        controller: function ($scope, $element, $attrs) {
          console.log('It works!');
        }
      };
    }
})();
