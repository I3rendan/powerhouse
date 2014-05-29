'use strict';

angular.module('powerhouseApp')
	.controller('NavCtrl', function ($scope, $location) {
		$scope.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
		];

		$scope.navItems = [
			{name: 'About', href: 'about'},
			{name: 'Services', href: 'services'},
			{name: 'Support Us', href: 'support'},
			{name: 'Calendar', href: 'calendar'},
			{name: 'Blog', href: 'blog'},
			{name: 'Contact', href: 'contact'}
		];

		$scope.navClass = function (page) {
			var currentRoute = $location.path().substring(1) || 'home';
			return page === currentRoute ? 'active' : '';
		};

		$scope.toggleNav = function () {

			$scope.navOn = false;
		};

		$scope.toggleNavBtn = function () {

			$scope.navOn = !$scope.navOn;
		};
	});