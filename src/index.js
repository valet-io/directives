'use strict';

require('angular')
  .module('valet-io-directives', [])
  .directive('donorCount', require('./donor-count'))
  .directive('totalVerb', require('./total-verb'));

module.exports = 'valet-io-directives';
