'use strict';

// Query controller ================================================================================
angular.module('thaw').controller('MainController', ['$scope', '$location', '$cookies', '$firebase', function ($scope, $location, $cookies, $firebase) {
    // Setup Firebase base reference
    var ref = new Firebase('https://thaw.firebaseio.com/');

    // Create date string
    $scope.date = moment().format('MMMM Do, YYYY');

    // Choose random engagement
    $scope.engagementIndex = 0;

    // Get user
    $scope.getUser = function() {
        $scope.emailAddress = $cookies.emailAddress;
        $scope.smile = $cookies.smile;
        $scope.gossip = $cookies.gossip;
        $scope.compliment = $cookies.compliment;
        $scope.hand = $cookies.hand;
        $scope.note = $cookies.note;
        $scope.gravatarUrl = 'http://www.gravatar.com/avatar/' + CryptoJS.MD5($scope.emailAddress.toLowerCase()) + '?s=200';
    };

    // If cookie, get user
    if ($cookies.emailAddress) {
        $scope.getUser();
    }

    // Gather engagement from Firebase
    $scope.getEngagement = function() {
        // Get engagement and set to scope
        var engagement = $firebase(ref.child('engagements').child($scope.engagementIndex)).$asObject();
        $scope.engagement = engagement;

        // Get completions for loaded engagement
        engagement.$loaded().then(function() {
            var completions = $firebase(ref.child('completions').child($scope.engagement.name)).$asArray();
            $scope.completions = completions;
        });
    };

    // Log completions
    $scope.logCompletion = function(feedback) {
        // Save completion
        $firebase(ref).$ref().child('completions').child($scope.engagement.name).push(feedback);

        $cookies[$scope.engagement.name] = 'true';

        // Redirect
        if ($scope.emailAddress) {
            $scope.getUser();
            $location.path('/profile');
        } else {
            $location.path('/complete');
        }
    };

    // Do another
    $scope.doAnother = function() {
        // Advance engagement
        if ($scope.engagementIndex === 4) {
            $scope.engagementIndex = 0;
        } else {
            $scope.engagementIndex += 1;
        }

        $scope.getEngagement();

        $location.path('/task');
    };

    // Create usee
    $scope.createUser = function(emailAddress) {
        $cookies.emailAddress = emailAddress;
        $scope.getUser();

        // Redirect
        $location.path('/profile');
    };
}]);
