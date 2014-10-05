'use strict';

// Query controller ================================================================================
angular.module('thaw').controller('MainController', ['$scope', '$location', '$firebase', function ($scope, $location, $firebase) {

    var ref = new Firebase('https://thaw.firebaseio.com/');
    // create an AngularFire reference to the data
    var sync = $firebase(ref);
    // download the data into a local object
    $scope.fireEngagement = sync.$asObject();

    $scope.engagements = [];

    $scope.engagements.push({ title: 'Smile!  (3x)', instructions: 'Smile at three random people today.', body: 'Boost your mood. Psychologists have found that even if you\'re in bad mood, you can instantly lift your spirits by forcing yourself to smile.', tips: [ 'Think of something nice. Whatever it takes to generate a smile on your face.'] })
    $scope.engagements.push({ title: 'What I Like About You', instructions: 'Give someone a compliment.', body: 'Compliments are one of the most extraordinary components of social life. If given right they create so much positive energy, as if by magic.', tips: [ 'A true acknowledgement is a compliment that has nothing to do with you.'] })
    $scope.engagements.push({ title: 'Go Ahead, Make Their Day (with a Note)', instructions: 'Send a nice, handwritten note to someone.', body: 'Many times the smallest statements are the best way to snap us back into seeing the world in all its beauty.', tips: [ 'As simple as the gesture is, it makes you feel good when you get one, doesn\'t it?'] })
    $scope.engagements.push({ title: 'Good Gossip', instructions: 'Say nice things about someone behind their back.', body: 'Say something nice about a different person. It\'s like gossip, except you\'re complimenting the person you\'re gossiping about.', tips: [ 'Did you see how nice Carla\'s shoes were today?'] })
    $scope.engagements.push({ title: 'Helping Hand', instructions: 'Find a stranger and help them in some way.', body: 'Take a break from what you\'re doing to help someone with a task or tip.', tips: [ 'It\'s great to focus and get things done. AND take a minute out of that today to give someone a hand or advice.'] })

    // Choose a random engagement
    $scope.engagementNumber = Math.floor((Math.random() * $scope.engagements.length));

}]);
