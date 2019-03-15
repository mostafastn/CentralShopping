var app = angular.module('CentralShopping', []);
app.controller('MainControl', function ($scope) {


    $scope.HomeView = false;
    $scope.ProductView = false;
    $scope.StoreView = true;

    $scope.ShowingDetails = "نمایش 1-12 از 158 محصول";

    $scope.ObjectInPageCount = ["همه", 12, 24];

    $scope.Products = [
        { ID: 1, Name: 'پلیس 1', Image: 'Images/Slids/Brands/puma_thumb.jpg', Category: 'عینک آفتابی', Price: 1500000 },
        { ID: 2, Name: 'پلیس 2', Image: 'Images/Slids/Brands/rolex-1024x597.jpg', Category: 'عینک آفتابی', Price: 2000000 },
        { ID: 3, Name: 'پلیس 2', Image: 'Images/Slids/Brands/samsung_circle.jpg', Category: 'عینک آفتابی', Price: 2000000 },
        { ID: 4, Name: 'پلیس 2', Image: 'Images/Slids/Brands/hugo-boss-ok-300x200.png', Category: 'عینک آفتابی', Price: 2000000 },
        { ID: 5, Name: 'پلیس 2', Image: 'Images/Slids/Brands/nike-logo.png', Category: 'عینک آفتابی', Price: 2000000 },
        { ID: 6, Name: 'پلیس 2', Image: 'Images/Slids/Brands/top-brands-and-the-meaning-of-their-logo-hermes-paris-lapolo.jpg', Category: 'عینک آفتابی', Price: 2000000 }
    ];

    $scope.Stores = [
        {
            id: 1,
            ProductCont: 10,
            Name: 'فروشگاه لوتوس',
            Introduction: 'فروشنده انواع تجهیزات آی تی با بهترین قیمت روز و ضمانت اصالت کالا و گارانتی اصلی.',
            lastUpdate: '15',
            Options: [
                {
                    id: 1,
                    caption: 'تخفیف های ویژه'
                },
                {
                    id: 2,
                    caption: 'مدت محدود'
                },
                {
                    id: 3,
                    caption: 'ارسال رایگان'
                },
            ],
            Link: 'http://centralshopping.ir'
        },
        {
            id: 2,
            ProductCont: 15,
            Name: 'فروشگاه گوشی شاپ',
            Introduction: 'اولین و معتبرترین فروشگاه آنلاین گوشی های موبایل، تبلت، گجت و لوازم جانبی.',
            lastUpdate: '19',
            Options: [
                {
                    id: 1,
                    caption: 'تخفیف های ویژه'
                },
                {
                    id: 2,
                    caption: 'مدت محدود'
                },
            ],
            Link: 'http://centralshopping.ir'
        },
        {
            id: 3,
            ProductCont: 25,
            Name: 'فروشگاه میثم عطر',
            Introduction: 'مرجع تخصصی عطر، لوازم آرایش و محصولات بهداشتی، ارائه کننده بیش از 100 برند معتبر.',
            lastUpdate: '26',
            Options: [],
            Link: 'http://centralshopping.ir'
        },
        {
            id: 4,
            ProductCont: 240,
            Name: 'فروشگاه عطر سفیر',
            Introduction: 'ارائه رایحه های اصیل و ماندگار از عطرها و برندهای معتبر جهان.',
            lastUpdate: '45',
            Options: [
                {
                    id: 1,
                    caption: '3 روز ضمانت برگشت کالا'
                },
                {
                    id: 2,
                    caption: 'ارسال رایگان'
                },
            ],
            Link: 'http://centralshopping.ir'
        },
        {
            id: 5,
            ProductCont: 9,
            Name: 'فروشگاه الماس پایتخت',
            Introduction: 'محصولات سایت اپل در ایران نمایندگی فروش ایفون اپل در ایران با گارانتی رسمی.',
            lastUpdate: '53',
            Options: [
                {
                    id: 1,
                    caption: 'گارانتی یک ساله'
                },
                {
                    id: 2,
                    caption: 'خدمات پس از فروش'
                },
                {
                    id: 3,
                    caption: 'ارسال رایگان'
                },
            ],
            Link: 'http://centralshopping.ir'
        },
    ];

    $scope.HomeMenuClick = function () {

        $scope.HomeView = true;

        $scope.ProductView = false;
        $scope.StoreView = false;
    }

    $scope.StoreMenuClick = function () {

        $scope.StoreView = true;

        $scope.HomeView = false;
        $scope.ProductView = false;
    }
});