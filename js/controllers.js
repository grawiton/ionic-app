///<reference path="../typings/index.d.ts"/>
var AppCtrl = (function () {
    function AppCtrl($scope, $ionicModal, $timeout) {
        // with the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // to listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        // $scope.$on("$ionicView.enter", function(e) {
        // });
        var _this = this;
        this.$scope = $scope;
        this.$ionicModal = $ionicModal;
        this.$timeout = $timeout;
        // form data for the login modal
        this.loginData = {};
        // create the login modal that we will use later
        $ionicModal.fromTemplateUrl("templates/login.html", {
            scope: this.$scope
        }).then(function (modal) {
            _this.modal = modal;
        });
    }
    // triggered in the login modal to close it
    AppCtrl.prototype.closeLogin = function () {
        this.modal.hide();
    };
    // open the login modal
    AppCtrl.prototype.login = function () {
        this.modal.show();
    };
    // perform the login action when the user submits the login form
    AppCtrl.prototype.doLogin = function () {
        var _this = this;
        // simulate a login delay. Remove this and replace with your login
        // code if using a login system
        this.$timeout(function () {
            _this.closeLogin();
        }, 1000);
    };
    return AppCtrl;
}());
var ListController = (function () {
    function ListController($scope, $ionicLoading, Lists, $stateParams) {
        this.Lists = Lists;
        this.$stateParams = $stateParams;
        this.list = Lists.get($stateParams.listId);
        $scope.$on('$ionicView.enter', function () {
            flowplayer("#fokus", {
                splash: true,
                embed: false,
                ratio: 9 / 16,
                clip: {
                    hlsjs: {
                        // slightly better behaviour for this problem stream
                        smoothSwitching: false
                    },
                    live: true,
                    sources: [
                        {
                            type: "application/x-mpegurl",
                            src: "https://stream.smcdn.pl/fokustv-p/stream1/playlist.m3u8"
                        }
                    ]
                }
            });
            flowplayer("#nasa", {
                splash: true,
                embed: false,
                ratio: 9 / 16,
                clip: {
                    hlsjs: {
                        // slightly better behaviour for this problem stream
                        smoothSwitching: false
                    },
                    live: true,
                    sources: [
                        {
                            type: "application/x-mpegurl",
                            src: "http://nasatv-lh.akamaihd.net/i/NASA_101@319270/master.m3u8"
                        }
                    ]
                }
            });
        });
    }
    return ListController;
}());
var ListsController = (function () {
    function ListsController(Lists) {
        this.Lists = Lists;
        this.$inject = ['Lists'];
        this.lists = Lists.all();
    }
    return ListsController;
}());
angular.module('starter.controllers', [])
    .controller('AppCtrl', AppCtrl)
    .controller('ListController', ListController)
    .controller('ListsController', ListsController);

//# sourceMappingURL=controllers.js.map
