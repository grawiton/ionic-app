angular.module('starter.services', [])
    .factory('Lists', function () {
    // Might use a resource here that returns a JSON array
    // Some fake testing data
    var lists = [{
            id: 0,
            title: "Nasa",
            nameStation: "../img/tvp1.png",
            startDate: "12:00",
            endDate: "12:10",
            stream: 'nasa'
        }, {
            id: 1,
            title: "Fokus",
            nameStation: "../img/tvp2.png",
            startDate: "11:40",
            endDate: "12:40",
            stream: 'fokus'
        }];
    return {
        all: function () {
            return lists;
        },
        get: function (listId) {
            for (var i = 0; i < lists.length; i++) {
                if (lists[i].id === parseInt(listId)) {
                    return lists[i];
                }
            }
            return null;
        }
    };
});

//# sourceMappingURL=services.js.map
