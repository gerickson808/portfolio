app.directive('navbar', function ($rootScope, $state) {

    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'js/common/directives/navbar/navbar.html',
        link: function (scope) {

            scope.items = [
                { label: 'Home', state: 'home' },
                { label: 'Projects', state: 'projects' },
                { label: 'About', state: 'about' },
            ];

        //     scope.user = null;

        //     scope.isLoggedIn = function () {
        //         return AuthService.isAuthenticated();
        //     };

        //     scope.logout = function () {
        //         AuthService.logout().then(function () {
        //            $state.go('home');
        //         });
        //     };

        //     var setUser = function () {
        //         AuthService.getLoggedInUser().then(function (user) {
        //             scope.user = user;
        //         });
        //     };

        //     var removeUser = function () {
        //         scope.user = null;
        //     };

        //     setUser();

        //     $rootScope.$on(AUTH_EVENTS.loginSuccess, setUser);
        //     $rootScope.$on(AUTH_EVENTS.logoutSuccess, removeUser);
        //     $rootScope.$on(AUTH_EVENTS.sessionTimeout, removeUser);

        }

    };

});
