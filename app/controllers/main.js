'use strict';

// Query controller ================================================================================
angular.module('thaw').controller('MainController', ['$scope', '$location', function ($scope, $location) {

    $scope.engagements = [];

    $scope.engagements.push({
        title: 'Ask someone if they\'ve lost weight.',
        body: 'Bacon ipsum dolor sit amet strip steak meatball kielbasa pastrami ribeye. Chicken swine bresaola, ball tip corned beef rump pork frankfurter ham hock hotdog salsa.',
        tips: [
            'Tip 1 for engagement 1',
            'Tip 2 for engagement 1',
            'Tip 3 for engagement 1',
        ],
        hashtag: 'thaw1'
    })

    $scope.engagements.push({
        title: 'Engagement 2 title',
        body: 'Here\'s what you should do today for task 2.',
        tips: [
            'Tip 1 for engagement 2',
            'Tip 2 for engagement 2',
            'Tip 3 for engagement 2',
        ],
        hashtag: 'thaw2'
    })

    $scope.engagements.push({
        title: 'Engagement 3 title',
        body: 'Here\'s what you should do today for task 3.',
        tips: [
            'Tip 1 for engagement 3',
            'Tip 2 for engagement 3',
            'Tip 3 for engagement 3',
        ],
        hashtag: 'thaw3'
    })

    $scope.engagements.push({
        title: 'Engagement 4 title',
        body: 'Here\'s what you should do today for task 4.',
        tips: [
            'Tip 1 for engagement 4',
            'Tip 2 for engagement 4',
            'Tip 3 for engagement 4',
        ],
        hashtag: 'thaw4'
    })

    // Choose a random engagement
    $scope.engagementNumber = Math.floor((Math.random() * $scope.engagements.length));

}]);
