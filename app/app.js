//'use strict';
//
//var app = angular.module('myApp', []);
//
//app.filter('nameFilter', function (input) {
//    for (var i = 0; i < input.length; i++) {
//        var fullName = input.firstName + ', ' + input.lastName;
//    }
//    return fullName;
//});
//
//app.controller('personController'[function () {
//    var self = this;
//    self.person =
//            {firstName: "Peter", lastName: "Petersen"}
//}]);
//
//app.filter('checkmark', function () {
//    return function (input) {
//        return input ? '\u2713' : '\u2718';
//    };
//});
//

'use strict';

var app = angular.module('myApp', []);

app.controller('controller', ['$scope', 'StringFactory', function ($scope, StringFactory) {
        $scope.person = {firstName: 'Peter', lastName: 'Smith'};
        
        $scope.titled = StringFactory.titleCase("my example service");
        $scope.cameled = StringFactory.camelCase("my example service");
        $scope.dashed = StringFactory.dashCase("my example service");
    }]);

app.filter('checkmark', function () {
    return function (input) {
        return input ? '\u2713' : '\u2718';
    };
});

app.filter('personFilt', function () {
    return function (input) {
        var person = input;
        var fullname = person.firstName + " " + person.lastName;
        return fullname;
    };
});

app.directive('loginForm', function () {
    return {
        templateUrl: 'partials/loginForm.html'
    };
});

app.factory('StringFactory', function () {

    var titleCase = function (text) {
        return text.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    };

    var camelCase = function (text) {
        var textUpppered = text.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
        return textUpppered.replace(/\W+/g, '')
                .replace(/([a-z\d])([A-Z])/g, '$1$2');
    };

    var dashCase = function (text) {
        var textUpppered = text.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
        return textUpppered.replace(/\W+/g, '')
                .replace(/([a-z\d])([A-Z])/g, '$1-$2');
    };

    return {
        titleCase: titleCase,
        camelCase: camelCase,
        dashCase: dashCase
    };
});