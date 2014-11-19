'use strict';

module.exports = function () {
  return {
    restrict: 'EA',
    scope: {
      count: '='
    },
    transclude: true,
    template: require('./template.html'),
    link: {
      pre: function (scope) {
        scope.settings = {
          '1': 'Has',
          'other': 'Have'
        };
      }
    }
  };
};
