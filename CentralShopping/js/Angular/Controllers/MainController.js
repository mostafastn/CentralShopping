var app = angular.module('CentralShopping', []);
app.controller('MainControl', function ($scope) {


    $scope.HomeView = false;
    $scope.StoreView = true;

    $scope.Stores = [
        { ID: 1, Name: 'پلیس 1', Image: 'puma_thumb.jpg', Category: 'عینک آفتابی', Price: 1500000 },
        { ID: 2, Name: 'پلیس 2', Image: 'rolex-1024x597.jpg', Category: 'عینک آفتابی', Price: 2000000 },
        { ID: 2, Name: 'پلیس 2', Image: 'samsung_circle.jpg', Category: 'عینک آفتابی', Price: 2000000 },
        { ID: 2, Name: 'پلیس 2', Image: 'hugo-boss-ok-300x200.', Category: 'عینک آفتابی', Price: 2000000 },
        { ID: 2, Name: 'پلیس 2', Image: 'nike-logo.png', Category: 'عینک آفتابی', Price: 2000000 },
        { ID: 2, Name: 'پلیس 2', Image: 'top-brands-and-the-meaning-of-their-logo-hermes-paris-lapolo.jpg', Category: 'عینک آفتابی', Price: 2000000 }
    ];

    $scope.HomeMenuClick = function () {

        $scope.HomeView = true;

        $scope.StoreView = false;
    }

    $scope.StoreMenuClick = function () {

        $scope.HomeView = false;

        $scope.StoreView = true;
    }
});