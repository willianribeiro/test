/*eslint angular/function-type: [2,"named"]*/
(function() {
  'use strict';

  angular
    .module('app.components')
    .directive('movieCard', movieCard);

  function movieCard() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '/src/components/movieCard/movieCard.html',
      scope: {},
      controller: function ($scope, $element, $attrs) {
        console.log('It works! (movieCard)');
      }
    };
  }
})();
