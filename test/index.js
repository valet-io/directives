'use strict';

var angular = require('angular');

describe('directives', function () {

  var $compile, scope, element;
  beforeEach(angular.mock.module(require('../')));
  beforeEach(angular.mock.inject(function ($rootScope, _$compile_) {
    scope    = $rootScope.$new();
    $compile = _$compile_;
  }));

  function set (value) {
    scope.counted = value;
    scope.$digest();
  }

  describe('donor-count', function () {

    beforeEach(function () {
      element = $compile('<donor-count count="counted" />')(scope);
    });

    it('handles 0', function () {
      set(0);
      expect(element.text()).to.equal('We');
    });

    it('handles 1', function () {
      set(1);
      expect(element.text()).to.equal('1 Donor');
    });

    it('handles 2+', function () {
      set(2);
      expect(element.text()).to.equal('2 Donors');
    });

  });

  describe('total-verb', function () {

    beforeEach(function () {
      element = $compile('<total-verb count="counted"><span>Raised</span></total-verb>')(scope);
    });

    it('handles 0', function () {
      set(0);
      expect(element.text()).to.equal('Have Raised');
    });

    it('handles 1', function () {
      set(1);
      expect(element.text()).to.equal('Has Raised');
    });

    it('handles 2+', function () {
      set(2);
      expect(element.text()).to.equal('Have Raised');
    });

  });

});
