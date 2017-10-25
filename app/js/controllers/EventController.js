'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData, $log, $routeParams) {
        $scope.sortorder = 'name',
        $scope.snippet = '<span style="color:red">Hey there</span>',
        eventData.getEvent($routeParams.eventId)
            .$promise
            .then(function (event) { $scope.event = event;})
            .catch(function (response) { console.log(response);}
);
        
        $scope.upVoteSession = function (session) {
            session.upVoteCount++; 
        }
        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        }
}

);