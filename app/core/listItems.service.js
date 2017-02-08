angular.module('core', []).service('ListItemsService', ['$http', '$window', function ($http, $window) {
    var vm = this;
    var data = [
        {
            "text": "A long todo text.",
            "state": "done"
        },
        {
            "text": "A longer todo text just for the sake of it.",
            "state": "todo"
        },
        {
            "text": "An even longer todo text since it's in progress.",
            "state": "inProgress"
        }
    ];
    vm.getListItems = function () {
        var data = angular.fromJson($window.localStorage.getItem('itemList'));
        return data || [];
    };

    vm.addListItem = function (item) {
        var data = angular.fromJson($window.localStorage.getItem('itemList'));
        data.push(item);
        $window.localStorage.setItem('itemList', angular.toJson(data));
    };
    vm.initListItems = function () {
        var data = angular.fromJson($window.localStorage.getItem('itemList'));
        if (!data) {
            data = [
                {
                    "text": "A long todo text.",
                    "state": "done"
                },
                {
                    "text": "A longer todo text just for the sake of it.",
                    "state": "todo"
                },
                {
                    "text": "An even longer todo text since it's in progress.",
                    "state": "inProgress"
                }
            ];
            $window.localStorage.setItem('itemList', angular.toJson(data));
        }

    };
}
]);