'use strict';

module.exports = function () {
  return {
    restrict: 'E',
    scope: {
      count: '='
    },
    template: require('./template.html'),
    link: {
      pre: function (scope) {
        scope.settings = {
          '0': 'We',
          '1': '1 Donor',
          'other': '{} Donors'
        };
      }
    }
  };
};
