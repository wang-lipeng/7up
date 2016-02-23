/**
 * Created by Boss on 9/10/15.
 */
/**
 * Created by Boss on 25/9/15.
 */
sac.controller('CommunityCtrl', function ($scope, $state, Communitys) {
    $scope.communitys = Communitys.query();
    $scope.status = function (i) {
        return $scope.communitys[i - 1].joined;
    };
    $scope.hasRead = function (i) {
        return $scope.communitys[i - 1].read;
    };
    $scope.read = function (i) {
        $scope.communitys[i - 1].read = true;
        $state.go('tab.community-event', {'communityId': i});
    };
    $scope.joined = function (i) {
        return $scope.communitys[i - 1].joined;
    };
    $scope.joinCom = function (i) {
        $scope.communitys[i - 1].joined = true;
    };
    $scope.quitCom = function (i) {
        $scope.communitys[i - 1].joined = false;
    };

})


    .controller('CommunityEventCtrl', function ($scope, $stateParams, Communitys) {
        $scope.community = Communitys.query()[$stateParams.communityId - 1];
        $scope.events = Communitys.get($stateParams.communityId);
        console.log($scope.events);

        $scope.joined = function (i) {
            return $scope.events[i - 1].joined;
        };

        $scope.joinEvent = function (i) {
            $scope.events[i - 1].joined = true;
        };
        $scope.cancelEvent = function (i) {
            $scope.events[i - 1].joined = false;
        };

        $scope.quitCom = function (i) {
            Communitys.query()[i - 1].joined = false;
            for (var j = 0; j < $scope.events.length; j++) {
                $scope.events[j].joined = false;
            }
        };

        $scope.joinedCom = function () {
            return $scope.community.joined;
        };

    });
