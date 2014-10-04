'use strict';

// Query controller ================================================================================
angular.module('thaw').controller('MainController', ['$scope', '$location', function ($scope, $location) {

    $scope.engagementNumber = 0;

    $scope.engagements = [];

    $scope.engagements.push({
        title: 'Engagement 1 title',
        body: 'Here\'s what you should do today for task 1.',
        tips: [
            'Tip 1 for engagement 1',
            'Tip 2 for engagement 1',
            'Tip 3 for engagement 1',
        ]
    })

    $scope.engagements.push({
        title: 'Engagement 2 title',
        body: 'Here\'s what you should do today for task 2.',
        tips: [
            'Tip 1 for engagement 2',
            'Tip 2 for engagement 2',
            'Tip 3 for engagement 2',
        ]
    })

    $scope.engagements.push({
        title: 'Engagement 3 title',
        body: 'Here\'s what you should do today for task 3.',
        tips: [
            'Tip 1 for engagement 3',
            'Tip 2 for engagement 3',
            'Tip 3 for engagement 3',
        ]
    })

}]);
