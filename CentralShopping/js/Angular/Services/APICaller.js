var app = angular.module('APICaller', []);

app.service('APICallerService', function ($http) {

    this.Test = function () {
        console.log("APICallerService Test()");
    };

    this.GetConfig = function (success, error) {

        this.CallMethod("GET", "config.json", function (successResponse) {

            if (success) {
                success(successResponse.data.Config);
            }
        }, function (failResponse) {

            if (error) {
                error(failResponse);
            }
        });
    };

    this.CallMethod = function (method, url, success, error) {

        $http({
            method: method,
            url: url
        }).then(success, error);
    };
});
