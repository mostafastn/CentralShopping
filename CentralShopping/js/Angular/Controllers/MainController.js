    var app = angular.module('CentralShopping', []);
    app.controller('MainControl', function ($scope) {


        $scope.HomeView = false;
        $scope.ProductView = false;
        $scope.StoreView = true;

        $scope.ShowingDetails = "نمایش 1-12 از 158 محصول";

        $scope.ObjectInPageCount = ["همه", 12, 24];

        $scope.SpecialTab = [
            {
                id: 1,
                Name: 'ادوتویلت مردانه',
                StoreName: 'فروشگاه میثم عطر',
                Introduction: 'ادو تویلت مردانه امپر ویواریا مدل Stylo Pour Homme حجم 80 میلی لیتر.',
                Price: 1500000,
                Discount: 10,
                FinallPrice: 1350000,
                Image: 'Images/Slids/Brands/puma_thumb.jpg',
                Options: [
                    {
                        id: 1,
                        caption: 'گارانتی اصالت و سلامت فیزیکی کالا'
                    },
                    {
                        id: 2,
                        caption: 'نوع رایحه: خوراکی خنک طبیعت شیرین'
                    },
                    {
                        id: 3,
                        caption: 'ساختار رایحه: مرکبات میوه گیاهان معطر چوب'
                    },
                ],
                Code: '#1',
                Active: true,
            },
            {
                id: 2,
                Name: 'ادوتویلت مردانه',
                StoreName: 'فروشگاه میثم عطر',
                Introduction: 'ادو تویلت مردانه امپر ویواریا مدل Stylo Pour Homme حجم 80 میلی لیتر.',
                Price: 15000000,
                Discount: 10,
                FinallPrice: 13500000,
                Image: 'Images/Slids/Brands/puma_thumb.jpg',
                Options: [
                    {
                        id: 1,
                        caption: 'گارانتی اصالت و سلامت فیزیکی کالا'
                    },
                    {
                        id: 2,
                        caption: 'نوع رایحه: خوراکی خنک طبیعت شیرین'
                    },
                    {
                        id: 3,
                        caption: 'ساختار رایحه: مرکبات میوه گیاهان معطر چوب'
                    },
                ],
                Code: '#2',
                Active: false,
            },
            {
                id: 3,
                Name: 'ادوتویلت مردانه',
                StoreName: 'فروشگاه میثم عطر',
                Introduction: 'ادو تویلت مردانه امپر ویواریا مدل Stylo Pour Homme حجم 80 میلی لیتر.',
                Price: 150000000,
                Discount: 10,
                FinallPrice: 135000000,
                Image: 'Images/Slids/Brands/puma_thumb.jpg',
                Options: [
                    {
                        id: 1,
                        caption: 'گارانتی اصالت و سلامت فیزیکی کالا'
                    },
                    {
                        id: 2,
                        caption: 'نوع رایحه: خوراکی خنک طبیعت شیرین'
                    },
                    {
                        id: 3,
                        caption: 'ساختار رایحه: مرکبات میوه گیاهان معطر چوب'
                    },
                ],
                Code: '#3',
                Active: false,
            },
            {
                id: 4,
                Name: 'ادوتویلت مردانه',
                StoreName: 'فروشگاه میثم عطر',
                Introduction: 'ادو تویلت مردانه امپر ویواریا مدل Stylo Pour Homme حجم 80 میلی لیتر.',
                Price: 1500000000,
                Discount: 10,
                FinallPrice: 1350000000,
                Image: 'Images/Slids/Brands/puma_thumb.jpg',
                Options: [
                    {
                        id: 1,
                        caption: 'گارانتی اصالت و سلامت فیزیکی کالا'
                    },
                    {
                        id: 2,
                        caption: 'نوع رایحه: خوراکی خنک طبیعت شیرین'
                    },
                    {
                        id: 3,
                        caption: 'ساختار رایحه: مرکبات میوه گیاهان معطر چوب'
                    },
                ],
                Code: '#4',
                Active: false,
            },
            {
                id: 5,
                Name: 'ادوتویلت مردانه',
                StoreName: 'فروشگاه میثم عطر',
                Introduction: 'ادو تویلت مردانه امپر ویواریا مدل Stylo Pour Homme حجم 80 میلی لیتر.',
                Price: 1500000,
                Discount: 10,
                FinallPrice: 1350000,
                Image: 'Images/Slids/Brands/puma_thumb.jpg',
                Options: [
                    {
                        id: 1,
                        caption: 'گارانتی اصالت و سلامت فیزیکی کالا'
                    },
                    {
                        id: 2,
                        caption: 'نوع رایحه: خوراکی خنک طبیعت شیرین'
                    },
                    {
                        id: 3,
                        caption: 'ساختار رایحه: مرکبات میوه گیاهان معطر چوب'
                    },
                ],
                Code: '#5',
                Active: false,
            },
            {
                id: 6,
                Name: 'ادوتویلت مردانه',
                StoreName: 'فروشگاه میثم عطر',
                Introduction: 'ادو تویلت مردانه امپر ویواریا مدل Stylo Pour Homme حجم 80 میلی لیتر.',
                Price: 15000000,
                Discount: 10,
                FinallPrice: 13500000,
                Image: 'Images/Slids/Brands/puma_thumb.jpg',
                Options: [
                    {
                        id: 1,
                        caption: 'گارانتی اصالت و سلامت فیزیکی کالا'
                    },
                    {
                        id: 2,
                        caption: 'نوع رایحه: خوراکی خنک طبیعت شیرین'
                    },
                    {
                        id: 3,
                        caption: 'ساختار رایحه: مرکبات میوه گیاهان معطر چوب'
                    },
                ],
                Code: '#6',
                Active: false,
            },
            {
                id: 7,
                Name: 'ادوتویلت مردانه',
                StoreName: 'فروشگاه میثم عطر',
                Introduction: 'ادو تویلت مردانه امپر ویواریا مدل Stylo Pour Homme حجم 80 میلی لیتر.',
                Price: 150000000,
                Discount: 10,
                FinallPrice: 135000000,
                Image: 'Images/Slids/Brands/puma_thumb.jpg',
                Options: [
                    {
                        id: 1,
                        caption: 'گارانتی اصالت و سلامت فیزیکی کالا'
                    },
                    {
                        id: 2,
                        caption: 'نوع رایحه: خوراکی خنک طبیعت شیرین'
                    },
                    {
                        id: 3,
                        caption: 'ساختار رایحه: مرکبات میوه گیاهان معطر چوب'
                    },
                ],
                Code: '#7',
                Active: false,
            },
            {
                id: 8,
                Name: 'ادوتویلت مردانه',
                StoreName: 'فروشگاه میثم عطر',
                Introduction: 'ادو تویلت مردانه امپر ویواریا مدل Stylo Pour Homme حجم 80 میلی لیتر.',
                Price: 1500000000,
                Discount: 10,
                FinallPrice: 1350000000,
                Image: 'Images/Slids/Brands/puma_thumb.jpg',
                Options: [
                    {
                        id: 1,
                        caption: 'گارانتی اصالت و سلامت فیزیکی کالا'
                    },
                    {
                        id: 2,
                        caption: 'نوع رایحه: خوراکی خنک طبیعت شیرین'
                    },
                    {
                        id: 3,
                        caption: 'ساختار رایحه: مرکبات میوه گیاهان معطر چوب'
                    },
                ],
                Code: '#8',
                Active: false,
            },
        ];

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

        $scope.SpecialTabClick = function (item) {

            $scope.SpecialTab.forEach(t => t.Active = false);

            var _item = $scope.SpecialTab.filter(function(x) {
                return x.ID == item.ID
            });
            item.Active = true;

            //$scope.SpecialTab.filter(t => t.ID == item.ID).Active = true;

            //var index = $scope.SpecialTab.indexOf(item);
            //if (index !== -1) {
            //    $scope.SpecialTab[index].Active = true;
            //}
        };
    });