/*eslint angular/function-type: [2,"named"]*/

(function() {
  'use strict';

  angular
    .module('app.components')
    .directive('menuDesk', menuDesk);

  function menuDesk($templateCache) {
    return {
      restrict: 'E',
      replace: true,
      // templateUrl   : '/src/components/menuDesk/menuDesk.html',
      templateUrl : $templateCache.get("components/menuDesk/menuDesk.html"),
      scope: {},
      controller: function ($scope, $element, $attrs) {
        console.log('It works! (menuDesk)');
      }
    };
  }
})();
