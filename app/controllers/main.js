'use strict';

// Query controller ================================================================================
angular.module('thaw').controller('MainController', ['$scope', '$location', '$firebase', function ($scope, $location, $firebase) {

    $scope.date = moment().format('MMMM Do, YYYY');

    var ref = new Firebase('https://thaw.firebaseio.com/');
    // create an AngularFire reference to the data
    var sync = $firebase(ref);
    // download the data into a local object
    $scope.fireEngagement = sync.$asObject();

    $scope.engagements = [];

    $scope.engagements.push({ title: 'Smile!', instructions: 'Smile at three random people today.', body: 'Boost your mood. Psychologists have found that even if you\'re in bad mood, you can instantly lift your spirits by forcing yourself to smile.', tips: [ 'When they\'re 10 feet away, look at them.  When they\'re 4 feet away smile.'] })
    $scope.engagements.push({ title: 'What I Like About You', instructions: 'Give someone a compliment.', body: 'Compliments are one of the most extraordinary components of social life. A genuine compliment creates so much positive energy, as if by magic.', tips: [ 'Keep it short & sweet.','Say something real and specific.','Compliment anyone: a stranger, your friend, a co-worker.'] })
    $scope.engagements.push({ title: 'Go Ahead, Make Their Day', instructions: 'Send a nice, handwritten note to someone.', body: 'Many times the smallest statements are the best way to snap us back into seeing the world in all its beauty.', tips: [ 'Today everything is digital, handwritten notes are special.','Simple, short, and sweet.','Acknowledge something they did.'] })
    $scope.engagements.push({ title: 'Good Gossip', instructions: 'Say nice things about someone behind their back.', body: 'It\'s like gossip, except you\'re complimenting the person you\'re gossiping about.', tips: [ 'Tell their boss about something they did well at work.','Post a compliment about them on your Facebook wall.'] })
    $scope.engagements.push({ title: 'Helping Hand', instructions: 'Find a stranger and help them in some way.', body: 'Take a break from your daily grind and spend a moment to help someone out.', tips: [ 'If someone looks lost, offer to help them find their way.','Jump in if someone looks like they could use a hand.'] })

    // Choose a random engagement
    $scope.engagementNumber = Math.floor((Math.random() * $scope.engagements.length));

}]);
