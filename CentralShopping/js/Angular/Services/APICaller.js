var app = angular.module('APIColler', []);

app.service('Hexafy', function () {
    this.Convert = function (input) {

        return input.toString(16);
    };
});