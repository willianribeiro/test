(function() {
  'use strict';

  angular
    .module('app.components')
    .directive('menuDesk', menuDesk);

    function menuDesk() {
      return {
        restrict: 'E',
        replace: true,
        templateUrl   : '/src/components/menuDesk/menuDesk.html',
        scope: {},
        controller: function ($scope, $element, $attrs) {
          console.log('It works! (menuDesk)');
        }
      };
    }
})();
