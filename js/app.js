// ionic Starter App
// angular.module is a global place for creating, registering and retrieving Angular modules
// "starter" is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of "requires"
// "starter.controllers" is found in controllers.js
angular.module("starter", ["ionic", "starter.controllers", "starter.services"])
    .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (cordova.platformId === "ios" && window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})
    .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state("app", {
        url: "/app",
        abstract: true,
        templateUrl: "templates/menu.html",
        controller: "AppCtrl as AppCtrl"
    })
        .state("app.lists", {
        url: "/lists",
        views: {
            "menuContent": {
                templateUrl: "templates/lists.html",
                controller: "ListsController as lists"
            }
        }
    })
        .state("app.list-details", {
        url: "/lists/:listId",
        views: {
            "menuContent": {
                templateUrl: "templates/list-details.html",
                controller: "ListController as list"
            }
        }
    });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise("/app/lists");
});

//# sourceMappingURL=app.js.map
