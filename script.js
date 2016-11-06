// create the module and name it tolApp
	var tolApp = angular.module('scotchApp', ['ngRoute']);

	// configure our routes
	tolApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController'
			})
			
			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			})

			// route for the help page
			.when('/help', {
				templateUrl : 'pages/help.html',
				controller  : 'helpController'
			});
	});

	// create the controller and inject Angular's $scope
	tolApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
	});

	tolApp.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	tolApp.controller('contactController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});
	
		tolApp.controller('helpController', function($scope) {
		$scope.message = 'Help will be there.';
	});