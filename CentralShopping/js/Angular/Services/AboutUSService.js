var app = angular.module('AboutUS', ['APICaller']);

//Inject service1 into service2
app.service('AboutUSService', function (APICallerService) {

    this.Test = function () {

        APICallerService.Test();
        console.log("AboutUSService Test()service2");
    };

    this.GetAll = function (success, error) {

        APICallerService.CallMethod("GET", "config.json", function (successResponse) {

            if (success) {
                success(successResponse.data.Config);
            }
        }, function (failResponse) {

            if (error) {
                error(failResponse);
            }
        });
    };
});

