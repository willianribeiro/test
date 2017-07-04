(function() {
  'use strict';

  angular
    .module('app.components')
    .directive('movieCard', movieCard);

    function movieCard() {
      return {
        restrict: 'E',
        replace: true,
        templateUrl   : '/src/components/MovieCard/MovieCard.html',
        scope: {},
        controller: function ($scope, $element, $attrs) {
          console.log('It works! (MovieCard)');
        }
      };
    }
})();
