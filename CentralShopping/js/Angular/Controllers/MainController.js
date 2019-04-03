var app = angular.module('CentralShopping', []);
app.controller('MainControl', function ($scope) {

    // Class Object

    function Button(caption, _class, click) {

        this.Caption = caption;
        this.Class = _class;
        this.Click = click;
    };

    function Alert(id, caption, body, _class, timeout) {

        this.ID = id;
        this.Caption = caption;
        this.Body = body;
        this.Class = _class;

        if (timeout > 0) {

            setTimeout(function () {
                $scope.Alerts.splice(0, 1);
                var itemID = '#' + id
                $(itemID).fadeTo(500, 0).slideUp(500, function () {
                    $(this).remove();
                });
            }, timeout * 1000);

        }
    };

    function AlertWithHandler(id, caption, body, _class, handler) {

        this.ID = id;
        this.Caption = caption;
        this.Body = body;
        this.Class = _class;
        this.Handler = handler;
    };

    // Class Object

    $scope.HomeView = true;
    $scope.StoresView = false;

    $scope.StoreView = false;
    $scope.StoreProductListView = true;
    $scope.StoreAboutCompanyView = false;
    $scope.StoreContactCompanyView = false;
    $scope.StoreProductView = false;

    $scope.CartView = false;
    $scope.RegisterView = false;
    $scope.PaymentView = false;

    $scope.ObjectInPageCount = [9, 18, "همه"];

    $scope.SortTypes = [
        {
            ID: 1,
            Caption: "محبوب ترین",
            Value: "VisitsCount"
        },
        {
            ID: 2,
            Caption: "جدیدترین",
            Value: "LastUpdate"
        },
        {
            ID: 3,
            Caption: "کمترین قیمت",
            Value: "FinallPrice"
        },
        {
            ID: 4,
            Caption: "بیشترین قیمت",
            Value: "-FinallPrice "
        }
    ];

    $scope.SortType = $scope.SortTypes[0];

    $scope.ModalContent =
    {
        ModalTitle: 'ModalTitle',
        ModalBody: 'ModalBody',
        Buttons: [
            {
                Caption: 'Caption',
                Class: 'btn-success',
                Show: true,
                Click: function () { },
            },
            {
                Caption: 'Caption',
                Class: 'btn-danger',
                Show: true,
                Click: function () { },
            },
        ]
    };

    $scope.Alerts = [
        //{
        //    ID: 1,
        //    Caption: 'Caption',
        //    Body: 'Body',
        //    Class: 'alert-success',
        //    Timeout: 3,
        //},
        //{
        //    ID: 2,
        //    Caption: 'Caption',
        //    Body: 'Body',
        //    Class: 'alert-danger',
        //    Timeout: 3,
        //}
    ];

    $scope.CarouselSlide = [
        {
            ID: 1,
            AlternateText: "Alternate Text",
            Source: 'Images/Slids/Brands/1_500.png',
            Active: true
        },
        {
            ID: 2,
            AlternateText: "Alternate Text",
            Source: 'Images/Slids/Brands/Ray-Ban-RB3581N-001E4-1.jpg',
            Active: false
        },
        {
            ID: 3,
            AlternateText: "Alternate Text",
            Source: 'Images/Slids/Brands/9_500.png',
            Active: false
        },
        {
            ID: 4,
            AlternateText: "Alternate Text",
            Source: 'Images/Slids/Brands/Adidas-Company-Logo.jpg',
            Active: false
        },
        {
            ID: 5,
            AlternateText: "Alternate Text",
            Source: 'Images/Slids/Brands/hugo-boss-ok-300x200.png',
            Active: false
        },
        {
            ID: 6,
            AlternateText: "Alternate Text",
            Source: 'Images/Slids/Brands/logo_social_sharing.jpg',
            Active: false
        },
        {
            ID: 7,
            AlternateText: "Alternate Text",
            Source: 'Images/Slids/Brands/nike-logo.png',
            Active: false
        },
        {
            ID: 8,
            AlternateText: "Alternate Text",
            Source: 'Images/Slids/Brands/puma_thumb.jpg',
            Active: false
        },
        {
            ID: 9,
            AlternateText: "Alternate Text",
            Source: 'Images/Slids/Brands/rolex-1024x597.jpg',
            Active: false
        },
        {
            ID: 10,
            AlternateText: "Alternate Text",
            Source: 'Images/Slids/Brands/samsung_circle.jpg',
            Active: false
        },
        {
            ID: 11,
            AlternateText: "Alternate Text",
            Source: 'Images/Slids/Brands/the-inspirations-behind-20-of-the-most-well-known-logos-in-high-fashion-16.jpg',
            Active: false
        },
        {
            ID: 12,
            AlternateText: "Alternate Text",
            Source: 'Images/Slids/Brands/top-brands-and-the-meaning-of-their-logo-hermes-paris-lapolo.jpg',
            Active: false
        },
    ];

    $scope.SpecialTab = [
        {
            ID: 1,
            Name: 'ادوتویلت مردانه',
            StoreName: 'فروشگاه میثم عطر',
            Introduction: 'ادو تویلت مردانه امپر ویواریا مدل Stylo Pour Homme حجم 80 میلی لیتر.',
            Price: 1500000,
            Discount: 10,
            FinallPrice: 1350000,
            Image: 'Images/Slids/Brands/1_500.png',
            Options: [
                {
                    ID: 1,
                    Caption: 'گارانتی اصالت و سلامت فیزیکی کالا'
                },
                {
                    ID: 2,
                    Caption: 'نوع رایحه: خوراکی خنک طبیعت شیرین'
                },
                {
                    ID: 3,
                    Caption: 'ساختار رایحه: مرکبات میوه گیاهان معطر چوب'
                },
            ],
            Code: '#1',
            Active: true,
        },
        {
            ID: 2,
            Name: 'ادوتویلت مردانه',
            StoreName: 'فروشگاه میثم عطر',
            Introduction: 'ادو تویلت مردانه امپر ویواریا مدل Stylo Pour Homme حجم 80 میلی لیتر.',
            Price: 15000000,
            Discount: 10,
            FinallPrice: 13500000,
            Image: 'Images/Slids/Brands/5_500.png',
            Options: [
                {
                    ID: 1,
                    Caption: 'گارانتی اصالت و سلامت فیزیکی کالا'
                },
                {
                    ID: 2,
                    Caption: 'نوع رایحه: خوراکی خنک طبیعت شیرین'
                },
                {
                    ID: 3,
                    Caption: 'ساختار رایحه: مرکبات میوه گیاهان معطر چوب'
                },
            ],
            Code: '#2',
            Active: false,
        },
        {
            ID: 3,
            Name: 'ادوتویلت مردانه',
            StoreName: 'فروشگاه میثم عطر',
            Introduction: 'ادو تویلت مردانه امپر ویواریا مدل Stylo Pour Homme حجم 80 میلی لیتر.',
            Price: 150000000,
            Discount: 10,
            FinallPrice: 135000000,
            Image: 'Images/Slids/Brands/Adidas-Company-Logo.jpg',
            Options: [
                {
                    ID: 1,
                    Caption: 'گارانتی اصالت و سلامت فیزیکی کالا'
                },
                {
                    ID: 2,
                    Caption: 'نوع رایحه: خوراکی خنک طبیعت شیرین'
                },
                {
                    ID: 3,
                    Caption: 'ساختار رایحه: مرکبات میوه گیاهان معطر چوب'
                },
            ],
            Code: '#3',
            Active: false,
        },
        {
            ID: 4,
            Name: 'ادوتویلت مردانه',
            StoreName: 'فروشگاه میثم عطر',
            Introduction: 'ادو تویلت مردانه امپر ویواریا مدل Stylo Pour Homme حجم 80 میلی لیتر.',
            Price: 1500000000,
            Discount: 10,
            FinallPrice: 1350000000,
            Image: 'Images/Slids/Brands/puma_thumb.jpg',
            Options: [
                {
                    ID: 1,
                    Caption: 'گارانتی اصالت و سلامت فیزیکی کالا'
                },
                {
                    ID: 2,
                    Caption: 'نوع رایحه: خوراکی خنک طبیعت شیرین'
                },
                {
                    ID: 3,
                    Caption: 'ساختار رایحه: مرکبات میوه گیاهان معطر چوب'
                },
            ],
            Code: '#4',
            Active: false,
        },
        {
            ID: 5,
            Name: 'ادوتویلت مردانه',
            StoreName: 'فروشگاه میثم عطر',
            Introduction: 'ادو تویلت مردانه امپر ویواریا مدل Stylo Pour Homme حجم 80 میلی لیتر.',
            Price: 1500000,
            Discount: 10,
            FinallPrice: 1350000,
            Image: 'Images/Slids/Brands/puma_thumb.jpg',
            Options: [
                {
                    ID: 1,
                    Caption: 'گارانتی اصالت و سلامت فیزیکی کالا'
                },
                {
                    ID: 2,
                    Caption: 'نوع رایحه: خوراکی خنک طبیعت شیرین'
                },
                {
                    ID: 3,
                    Caption: 'ساختار رایحه: مرکبات میوه گیاهان معطر چوب'
                },
            ],
            Code: '#5',
            Active: false,
        },
        {
            ID: 6,
            Name: 'ادوتویلت مردانه',
            StoreName: 'فروشگاه میثم عطر',
            Introduction: 'ادو تویلت مردانه امپر ویواریا مدل Stylo Pour Homme حجم 80 میلی لیتر.',
            Price: 15000000,
            Discount: 10,
            FinallPrice: 13500000,
            Image: 'Images/Slids/Brands/puma_thumb.jpg',
            Options: [
                {
                    ID: 1,
                    Caption: 'گارانتی اصالت و سلامت فیزیکی کالا'
                },
                {
                    ID: 2,
                    Caption: 'نوع رایحه: خوراکی خنک طبیعت شیرین'
                },
                {
                    ID: 3,
                    Caption: 'ساختار رایحه: مرکبات میوه گیاهان معطر چوب'
                },
            ],
            Code: '#6',
            Active: false,
        },
        {
            ID: 7,
            Name: 'ادوتویلت مردانه',
            StoreName: 'فروشگاه میثم عطر',
            Introduction: 'ادو تویلت مردانه امپر ویواریا مدل Stylo Pour Homme حجم 80 میلی لیتر.',
            Price: 150000000,
            Discount: 10,
            FinallPrice: 135000000,
            Image: 'Images/Slids/Brands/puma_thumb.jpg',
            Options: [
                {
                    ID: 1,
                    Caption: 'گارانتی اصالت و سلامت فیزیکی کالا'
                },
                {
                    ID: 2,
                    Caption: 'نوع رایحه: خوراکی خنک طبیعت شیرین'
                },
                {
                    ID: 3,
                    Caption: 'ساختار رایحه: مرکبات میوه گیاهان معطر چوب'
                },
            ],
            Code: '#7',
            Active: false,
        },
        {
            ID: 8,
            Name: 'ادوتویلت مردانه',
            StoreName: 'فروشگاه میثم عطر',
            Introduction: 'ادو تویلت مردانه امپر ویواریا مدل Stylo Pour Homme حجم 80 میلی لیتر.',
            Price: 1500000000,
            Discount: 10,
            FinallPrice: 1350000000,
            Image: 'Images/Slids/Brands/puma_thumb.jpg',
            Options: [
                {
                    ID: 1,
                    Caption: 'گارانتی اصالت و سلامت فیزیکی کالا'
                },
                {
                    ID: 2,
                    Caption: 'نوع رایحه: خوراکی خنک طبیعت شیرین'
                },
                {
                    ID: 3,
                    Caption: 'ساختار رایحه: مرکبات میوه گیاهان معطر چوب'
                },
            ],
            Code: '#8',
            Active: false,
        },
    ];

    $scope.Stores = [
         {
             ID: 1,
             ProductCount: 10,
             Name: 'فروشگاه لوتوس',
             Introduction: 'فروشنده انواع تجهیزات آی تی با بهترین قیمت روز و ضمانت اصالت کالا و گارانتی اصلی.',
             lastUpdate: '15',
             Options: [
                 {
                     ID: 1,
                     Caption: 'تخفیف های ویژه'
                 },
                 {
                     ID: 2,
                     Caption: 'مدت محدود'
                 },
                 {
                     ID: 3,
                     Caption: 'ارسال رایگان'
                 },
             ],
             Link: 'http://centralshopping.ir'
         },
         {
             ID: 2,
             ProductCount: 15,
             Name: 'فروشگاه گوشی شاپ',
             Introduction: 'اولین و معتبرترین فروشگاه آنلاین گوشی های موبایل، تبلت، گجت و لوازم جانبی.',
             lastUpdate: '19',
             Options: [
                 {
                     ID: 1,
                     Caption: 'تخفیف های ویژه'
                 },
                 {
                     ID: 2,
                     Caption: 'مدت محدود'
                 },
             ],
             Link: 'http://centralshopping.ir'
         },
         {
             ID: 3,
             ProductCount: 25,
             Name: 'فروشگاه میثم عطر',
             Introduction: 'مرجع تخصصی عطر، لوازم آرایش و محصولات بهداشتی، ارائه کننده بیش از 100 برند معتبر.',
             lastUpdate: '26',
             Options: [],
             Link: 'http://centralshopping.ir'
         },
         {
             ID: 4,
             ProductCount: 240,
             Name: 'فروشگاه عطر سفیر',
             Introduction: 'ارائه رایحه های اصیل و ماندگار از عطرها و برندهای معتبر جهان.',
             lastUpdate: '45',
             Options: [
                 {
                     ID: 1,
                     Caption: '3 روز ضمانت برگشت کالا'
                 },
                 {
                     ID: 2,
                     Caption: 'ارسال رایگان'
                 },
             ],
             Link: 'http://centralshopping.ir'
         },
         {
             ID: 5,
             ProductCount: 9,
             Name: 'فروشگاه الماس پایتخت',
             Introduction: 'محصولات سایت اپل در ایران نمایندگی فروش ایفون اپل در ایران با گارانتی رسمی.',
             lastUpdate: '53',
             Options: [
                 {
                     ID: 1,
                     Caption: 'گارانتی یک ساله'
                 },
                 {
                     ID: 2,
                     Caption: 'خدمات پس از فروش'
                 },
                 {
                     ID: 3,
                     Caption: 'ارسال رایگان'
                 },
             ],
             Link: 'http://centralshopping.ir'
         },
    ];

    $scope.Store = {
        ID: 1,
        Name: 'فروشگاه اینترنتی لوناتو',
        Introduction: 'مرجع تخصصی عینک طبی، عینک آفتابی، لنز چشم.',
        lastUpdate: '55',
        ProductMenu: [
            {
                ID: 1,
                Caption: 'انواع لنز',
                ProductList: [
                    {
                        ID: 2,
                        Name: 'عینک آفتابی RayBan 3576N 1537V',
                        Price: 25790000,
                        Discount: 25,
                        FinallPrice: 19342500,
                        Image: 'Images/Slids/Brands/Ray-Ban-RB3581N-001E4-1.jpg',
                        Options: [
                            {
                                ID: 1,
                                Caption: 'ساخت کشور ایتالیا'
                            },
                            {
                                ID: 2,
                                Caption: 'سبک کلاسیک، با معرفی Blaze'
                            },
                            {
                                ID: 3,
                                Caption: 'لنز Sharp Onesie! Ray-Ban'
                            },
                            {
                                ID: 4,
                                Caption: 'مناسب برای صورت های بیضی و گرد شکل'
                            },
                        ],
                        LastUpdate: '2017-12-01',
                        VisitsCount: 150,
                        Available: true,
                        AvailableCount: 5,
                    },
                    {
                        ID: 1,
                        Name: 'عینک آفتابی RayBan 3581N 90387J',
                        Price: 25790000,
                        Discount: 10,
                        FinallPrice: 23211000,
                        Image: 'Images/Slids/Brands/9_500.png',
                        Options: [
                            {
                                ID: 1,
                                Caption: 'ساخت کشور ایتالیا'
                            },
                            {
                                ID: 2,
                                Caption: 'لنزهای تمام تخت با تکنولوژی جدید Blaze'
                            },
                            {
                                ID: 3,
                                Caption: 'زیبایی و ترکیبی فراتر از انتظار'
                            },
                            {
                                ID: 4,
                                Caption: 'مناسب صورت های بیضی قلبی، گرد و مربع شکل'
                            },
                        ],
                        LastUpdate: '2018-01-20',
                        VisitsCount: 70,
                        Available: false,
                        AvailableCount: 0,

                    },
                    {
                        ID: 3,
                        Name: 'عینک آفتابی RayBan RB3540 9002A6 56',
                        Price: 23460000,
                        Discount: 20,
                        FinallPrice: 18768000,
                        Image: 'Images/Slids/Brands/samsung_circle.jpg',
                        Options: [
                            {
                                ID: 1,
                                Caption: 'ساخت کشور ایتالیا'
                            },
                            {
                                ID: 2,
                                Caption: 'مناسب برای صورت‌های مربع و بیضی‌شکل'
                            },
                            {
                                ID: 3,
                                Caption: 'بسیار بادوام و مستحکم'
                            },
                        ],
                        LastUpdate: '2017-12-05',
                        VisitsCount: 15,
                        Available: true,
                        AvailableCount: 5,
                    },
                    {
                        ID: 6,
                        Name: 'عینک آفتابی RayBan RB3540 9002A6 56',
                        Price: 23460000,
                        Discount: 0,
                        FinallPrice: 23460000,
                        Image:
                            'Images/Slids/Brands/top-brands-and-the-meaning-of-their-logo-hermes-paris-lapolo.jpg',
                        Options: [
                            {
                                ID: 1,
                                Caption: 'ساخت کشور ایتالیا'
                            },
                            {
                                ID: 2,
                                Caption: 'مناسب برای صورت‌های مربع و بیضی‌شکل'
                            },
                            {
                                ID: 3,
                                Caption: 'بسیار بادوام و مستحکم'
                            },
                        ],
                        LastUpdate: '2018-10-15',
                        VisitsCount: 51,
                        Available: false,
                        AvailableCount: 0,
                    },
                    {
                        ID: 7,
                        Name: 'عینک آفتابی RayBan 3581N 90387J',
                        Price: 25790000,
                        Discount: 0,
                        FinallPrice: 25790000,
                        Image: 'Images/Slids/Brands/puma_thumb.jpg',
                        Options: [
                            {
                                ID: 1,
                                Caption: 'ساخت کشور ایتالیا'
                            },
                            {
                                ID: 2,
                                Caption: 'لنزهای تمام تخت با تکنولوژی جدید Blaze'
                            },
                            {
                                ID: 3,
                                Caption: 'زیبایی و ترکیبی فراتر از انتظار'
                            },
                            {
                                ID: 4,
                                Caption: 'مناسب صورت های بیضی قلبی، گرد و مربع شکل'
                            },
                        ],
                        LastUpdate: '2019-02-08',
                        VisitsCount: 7,
                        Available: false,
                        AvailableCount: 0,
                    },
                    {
                        ID: 5,
                        Name: 'عینک آفتابی RayBan 3576N 1537V',
                        Price: 25790000,
                        Discount: 0,
                        FinallPrice: 25790000,
                        Image: 'Images/Slids/Brands/nike-logo.png',
                        Options: [
                            {
                                ID: 1,
                                Caption: 'ساخت کشور ایتالیا'
                            },
                            {
                                ID: 2,
                                Caption: 'سبک کلاسیک، با معرفی Blaze'
                            },
                            {
                                ID: 3,
                                Caption: 'لنز Sharp Onesie! Ray-Ban'
                            },
                            {
                                ID: 4,
                                Caption: 'مناسب برای صورت های بیضی و گرد شکل'
                            },
                        ],
                        LastUpdate: '2018-09-11',
                        VisitsCount: 201,
                        Available: true,
                        AvailableCount: 5,
                    },
                    {
                        ID: 9,
                        Name: 'عینک آفتابی RayBan RB3540 9002A6 56',
                        Price: 23460000,
                        Discount: 0,
                        FinallPrice: 23460000,
                        Image: 'Images/Slids/Brands/1_500.png',
                        Options: [
                            {
                                ID: 1,
                                Caption: 'ساخت کشور ایتالیا'
                            },
                            {
                                ID: 2,
                                Caption: 'مناسب برای صورت‌های مربع و بیضی‌شکل'
                            },
                            {
                                ID: 3,
                                Caption: 'بسیار بادوام و مستحکم'
                            },
                        ],
                        LastUpdate: '2018-11-27',
                        VisitsCount: 71,
                        Available: true,
                        AvailableCount: 5,
                    },
                    {
                        ID: 8,
                        Name: 'عینک آفتابی RayBan 3576N 1537V',
                        Price: 25790000,
                        Discount: 0,
                        FinallPrice: 25790000,
                        Image: 'Images/Slids/Brands/5_500.png',
                        Options: [
                            {
                                ID: 1,
                                Caption: 'ساخت کشور ایتالیا'
                            },
                            {
                                ID: 2,
                                Caption: 'سبک کلاسیک، با معرفی Blaze'
                            },
                            {
                                ID: 3,
                                Caption: 'لنز Sharp Onesie! Ray-Ban'
                            },
                            {
                                ID: 4,
                                Caption: 'مناسب برای صورت های بیضی و گرد شکل'
                            },
                        ],
                        LastUpdate: '2019-01-11',
                        VisitsCount: 20,
                        Available: true,
                        AvailableCount: 5,
                    },
                    {
                        ID: 4,
                        Name: 'عینک آفتابی RayBan 3581N 90387J',
                        Price: 25790000,
                        Discount: 0,
                        FinallPrice: 25790000,
                        Image: 'Images/Slids/Brands/Ray-Ban-RB3581N-001E4-1.jpg',
                        Options: [
                            {
                                ID: 1,
                                Caption: 'ساخت کشور ایتالیا'
                            },
                            {
                                ID: 2,
                                Caption: 'لنزهای تمام تخت با تکنولوژی جدید Blaze'
                            },
                            {
                                ID: 3,
                                Caption: 'زیبایی و ترکیبی فراتر از انتظار'
                            },
                            {
                                ID: 4,
                                Caption: 'مناسب صورت های بیضی قلبی، گرد و مربع شکل'
                            },
                        ],
                        LastUpdate: '2018-10-08',
                        VisitsCount: 550,
                        Available: true,
                        AvailableCount: 5,
                    },
                ],
                TotalCount: 50,
            },
            {
                ID: 2,
                Caption: 'عینک های آفتابی',
                ProductList: [
                    {
                        ID: 3,
                        Name: 'عینک آفتابی RayBan RB3540 9002A6 56',
                        Price: 23460000,
                        Discount: 0,
                        FinallPrice: 23460000,
                        Image: 'Images/Slids/Brands/samsung_circle.jpg',
                        Options: [
                            {
                                ID: 1,
                                Caption: 'ساخت کشور ایتالیا'
                            },
                            {
                                ID: 2,
                                Caption: 'مناسب برای صورت‌های مربع و بیضی‌شکل'
                            },
                            {
                                ID: 3,
                                Caption: 'بسیار بادوام و مستحکم'
                            },
                        ],
                        LastUpdate: '2017-12-05',
                        VisitsCount: 15,
                        Available: true,
                        AvailableCount: 5,
                    },
                    {
                        ID: 4,
                        Name: 'عینک آفتابی RayBan 3581N 90387J',
                        Price: 25790000,
                        Discount: 0,
                        FinallPrice: 25790000,
                        Image: 'Images/Slids/Brands/Ray-Ban-RB3581N-001E4-1.jpg',
                        Options: [
                            {
                                ID: 1,
                                Caption: 'ساخت کشور ایتالیا'
                            },
                            {
                                ID: 2,
                                Caption: 'لنزهای تمام تخت با تکنولوژی جدید Blaze'
                            },
                            {
                                ID: 3,
                                Caption: 'زیبایی و ترکیبی فراتر از انتظار'
                            },
                            {
                                ID: 4,
                                Caption: 'مناسب صورت های بیضی قلبی، گرد و مربع شکل'
                            },
                        ],
                        LastUpdate: '2018-10-08',
                        VisitsCount: 550,
                        Available: true,
                        AvailableCount: 5,
                    },
                    {
                        ID: 5,
                        Name: 'عینک آفتابی RayBan 3576N 1537V',
                        Price: 25790000,
                        Discount: 0,
                        FinallPrice: 25790000,
                        Image: 'Images/Slids/Brands/nike-logo.png',
                        Options: [
                            {
                                ID: 1,
                                Caption: 'ساخت کشور ایتالیا'
                            },
                            {
                                ID: 2,
                                Caption: 'سبک کلاسیک، با معرفی Blaze'
                            },
                            {
                                ID: 3,
                                Caption: 'لنز Sharp Onesie! Ray-Ban'
                            },
                            {
                                ID: 4,
                                Caption: 'مناسب برای صورت های بیضی و گرد شکل'
                            },
                        ],
                        LastUpdate: '2018-09-11',
                        VisitsCount: 201,
                        Available: true,
                        AvailableCount: 5,
                    },
                    {
                        ID: 8,
                        Name: 'عینک آفتابی RayBan 3576N 1537V',
                        Price: 25790000,
                        Discount: 0,
                        FinallPrice: 25790000,
                        Image: 'Images/Slids/Brands/5_500.png',
                        Options: [
                            {
                                ID: 1,
                                Caption: 'ساخت کشور ایتالیا'
                            },
                            {
                                ID: 2,
                                Caption: 'سبک کلاسیک، با معرفی Blaze'
                            },
                            {
                                ID: 3,
                                Caption: 'لنز Sharp Onesie! Ray-Ban'
                            },
                            {
                                ID: 4,
                                Caption: 'مناسب برای صورت های بیضی و گرد شکل'
                            },
                        ],
                        LastUpdate: '2019-01-11',
                        VisitsCount: 20,
                        Available: true,
                        AvailableCount: 5,
                    },
                    {
                        ID: 9,
                        Name: 'عینک آفتابی RayBan RB3540 9002A6 56',
                        Price: 23460000,
                        Discount: 0,
                        FinallPrice: 23460000,
                        Image: 'Images/Slids/Brands/1_500.png',
                        Options: [
                            {
                                ID: 1,
                                Caption: 'ساخت کشور ایتالیا'
                            },
                            {
                                ID: 2,
                                Caption: 'مناسب برای صورت‌های مربع و بیضی‌شکل'
                            },
                            {
                                ID: 3,
                                Caption: 'بسیار بادوام و مستحکم'
                            },
                        ],
                        LastUpdate: '2018-11-27',
                        VisitsCount: 71,
                        Available: true,
                        AvailableCount: 5,
                    },
                    {
                        ID: 7,
                        Name: 'عینک آفتابی RayBan 3581N 90387J',
                        Price: 25790000,
                        Discount: 0,
                        FinallPrice: 25790000,
                        Image: 'Images/Slids/Brands/puma_thumb.jpg',
                        Options: [
                            {
                                ID: 1,
                                Caption: 'ساخت کشور ایتالیا'
                            },
                            {
                                ID: 2,
                                Caption: 'لنزهای تمام تخت با تکنولوژی جدید Blaze'
                            },
                            {
                                ID: 3,
                                Caption: 'زیبایی و ترکیبی فراتر از انتظار'
                            },
                            {
                                ID: 4,
                                Caption: 'مناسب صورت های بیضی قلبی، گرد و مربع شکل'
                            },
                        ],
                        LastUpdate: '2019-02-08',
                        VisitsCount: 7,
                        Available: true,
                        AvailableCount: 5,
                    },
                    {
                        ID: 2,
                        Name: 'عینک آفتابی RayBan 3576N 1537V',
                        Price: 25790000,
                        Discount: 0,
                        FinallPrice: 25790000,
                        Image: 'Images/Slids/Brands/Ray-Ban-RB3581N-001E4-1.jpg',
                        Options: [
                            {
                                ID: 1,
                                Caption: 'ساخت کشور ایتالیا'
                            },
                            {
                                ID: 2,
                                Caption: 'سبک کلاسیک، با معرفی Blaze'
                            },
                            {
                                ID: 3,
                                Caption: 'لنز Sharp Onesie! Ray-Ban'
                            },
                            {
                                ID: 4,
                                Caption: 'مناسب برای صورت های بیضی و گرد شکل'
                            },
                        ],
                        LastUpdate: '2017-12-01',
                        VisitsCount: 150,
                        Available: true,
                        AvailableCount: 5,
                    },
                    {
                        ID: 1,
                        Name: 'عینک آفتابی RayBan 3581N 90387J',
                        Price: 25790000,
                        Discount: 0,
                        FinallPrice: 25790000,
                        Image: 'Images/Slids/Brands/9_500.png',
                        Options: [
                            {
                                ID: 1,
                                Caption: 'ساخت کشور ایتالیا'
                            },
                            {
                                ID: 2,
                                Caption: 'لنزهای تمام تخت با تکنولوژی جدید Blaze'
                            },
                            {
                                ID: 3,
                                Caption: 'زیبایی و ترکیبی فراتر از انتظار'
                            },
                            {
                                ID: 4,
                                Caption: 'مناسب صورت های بیضی قلبی، گرد و مربع شکل'
                            },
                        ],
                        LastUpdate: '2018-01-20',
                        VisitsCount: 70,
                        Available: true,
                        AvailableCount: 5,

                    },
                    {
                        ID: 6,
                        Name: 'عینک آفتابی RayBan RB3540 9002A6 56',
                        Price: 23460000,
                        Discount: 0,
                        FinallPrice: 23460000,
                        Image:
                            'Images/Slids/Brands/top-brands-and-the-meaning-of-their-logo-hermes-paris-lapolo.jpg',
                        Options: [
                            {
                                ID: 1,
                                Caption: 'ساخت کشور ایتالیا'
                            },
                            {
                                ID: 2,
                                Caption: 'مناسب برای صورت‌های مربع و بیضی‌شکل'
                            },
                            {
                                ID: 3,
                                Caption: 'بسیار بادوام و مستحکم'
                            },
                        ],
                        LastUpdate: '2018-10-15',
                        VisitsCount: 51,
                        Available: true,
                        AvailableCount: 5,
                    },
                ],
                TotalCount: 56,
            },
            {
                ID: 3,
                Caption: 'عینک های طبی',
                ProductList: [
                    {
                        ID: 1,
                        Name: 'عینک آفتابی RayBan 3581N 90387J',
                        Price: 25790000,
                        Discount: 0,
                        FinallPrice: 25790000,
                        Image: 'Images/Slids/Brands/9_500.png',
                        Options: [
                            {
                                ID: 1,
                                Caption: 'ساخت کشور ایتالیا'
                            },
                            {
                                ID: 2,
                                Caption: 'لنزهای تمام تخت با تکنولوژی جدید Blaze'
                            },
                            {
                                ID: 3,
                                Caption: 'زیبایی و ترکیبی فراتر از انتظار'
                            },
                            {
                                ID: 4,
                                Caption: 'مناسب صورت های بیضی قلبی، گرد و مربع شکل'
                            },
                        ],
                        LastUpdate: '2018-01-20',
                        VisitsCount: 70,
                        Available: true,
                        AvailableCount: 5,

                    },
                    {
                        ID: 6,
                        Name: 'عینک آفتابی RayBan RB3540 9002A6 56',
                        Price: 23460000,
                        Discount: 0,
                        FinallPrice: 23460000,
                        Image:
                            'Images/Slids/Brands/top-brands-and-the-meaning-of-their-logo-hermes-paris-lapolo.jpg',
                        Options: [
                            {
                                ID: 1,
                                Caption: 'ساخت کشور ایتالیا'
                            },
                            {
                                ID: 2,
                                Caption: 'مناسب برای صورت‌های مربع و بیضی‌شکل'
                            },
                            {
                                ID: 3,
                                Caption: 'بسیار بادوام و مستحکم'
                            },
                        ],
                        LastUpdate: '2018-10-15',
                        VisitsCount: 51,
                        Available: true,
                        AvailableCount: 5,
                    },
                    {
                        ID: 3,
                        Name: 'عینک آفتابی RayBan RB3540 9002A6 56',
                        Price: 23460000,
                        Discount: 0,
                        FinallPrice: 23460000,
                        Image: 'Images/Slids/Brands/samsung_circle.jpg',
                        Options: [
                            {
                                ID: 1,
                                Caption: 'ساخت کشور ایتالیا'
                            },
                            {
                                ID: 2,
                                Caption: 'مناسب برای صورت‌های مربع و بیضی‌شکل'
                            },
                            {
                                ID: 3,
                                Caption: 'بسیار بادوام و مستحکم'
                            },
                        ],
                        LastUpdate: '2017-12-05',
                        VisitsCount: 15,
                        Available: true,
                        AvailableCount: 5,
                    },
                    {
                        ID: 5,
                        Name: 'عینک آفتابی RayBan 3576N 1537V',
                        Price: 25790000,
                        Discount: 0,
                        FinallPrice: 25790000,
                        Image: 'Images/Slids/Brands/nike-logo.png',
                        Options: [
                            {
                                ID: 1,
                                Caption: 'ساخت کشور ایتالیا'
                            },
                            {
                                ID: 2,
                                Caption: 'سبک کلاسیک، با معرفی Blaze'
                            },
                            {
                                ID: 3,
                                Caption: 'لنز Sharp Onesie! Ray-Ban'
                            },
                            {
                                ID: 4,
                                Caption: 'مناسب برای صورت های بیضی و گرد شکل'
                            },
                        ],
                        LastUpdate: '2018-09-11',
                        VisitsCount: 201,
                        Available: true,
                        AvailableCount: 5,
                    },
                    {
                        ID: 7,
                        Name: 'عینک آفتابی RayBan 3581N 90387J',
                        Price: 25790000,
                        Discount: 0,
                        FinallPrice: 25790000,
                        Image: 'Images/Slids/Brands/puma_thumb.jpg',
                        Options: [
                            {
                                ID: 1,
                                Caption: 'ساخت کشور ایتالیا'
                            },
                            {
                                ID: 2,
                                Caption: 'لنزهای تمام تخت با تکنولوژی جدید Blaze'
                            },
                            {
                                ID: 3,
                                Caption: 'زیبایی و ترکیبی فراتر از انتظار'
                            },
                            {
                                ID: 4,
                                Caption: 'مناسب صورت های بیضی قلبی، گرد و مربع شکل'
                            },
                        ],
                        LastUpdate: '2019-02-08',
                        VisitsCount: 7,
                        Available: true,
                        AvailableCount: 5,
                    },
                    {
                        ID: 4,
                        Name: 'عینک آفتابی RayBan 3581N 90387J',
                        Price: 25790000,
                        Discount: 0,
                        FinallPrice: 25790000,
                        Image: 'Images/Slids/Brands/Ray-Ban-RB3581N-001E4-1.jpg',
                        Options: [
                            {
                                ID: 1,
                                Caption: 'ساخت کشور ایتالیا'
                            },
                            {
                                ID: 2,
                                Caption: 'لنزهای تمام تخت با تکنولوژی جدید Blaze'
                            },
                            {
                                ID: 3,
                                Caption: 'زیبایی و ترکیبی فراتر از انتظار'
                            },
                            {
                                ID: 4,
                                Caption: 'مناسب صورت های بیضی قلبی، گرد و مربع شکل'
                            },
                        ],
                        LastUpdate: '2018-10-08',
                        VisitsCount: 550,
                        Available: true,
                        AvailableCount: 5,
                    },
                    {
                        ID: 8,
                        Name: 'عینک آفتابی RayBan 3576N 1537V',
                        Price: 25790000,
                        Discount: 0,
                        FinallPrice: 25790000,
                        Image: 'Images/Slids/Brands/5_500.png',
                        Options: [
                            {
                                ID: 1,
                                Caption: 'ساخت کشور ایتالیا'
                            },
                            {
                                ID: 2,
                                Caption: 'سبک کلاسیک، با معرفی Blaze'
                            },
                            {
                                ID: 3,
                                Caption: 'لنز Sharp Onesie! Ray-Ban'
                            },
                            {
                                ID: 4,
                                Caption: 'مناسب برای صورت های بیضی و گرد شکل'
                            },
                        ],
                        LastUpdate: '2019-01-11',
                        VisitsCount: 20,
                        Available: true,
                        AvailableCount: 5,
                    },
                    {
                        ID: 9,
                        Name: 'عینک آفتابی RayBan RB3540 9002A6 56',
                        Price: 23460000,
                        Discount: 0,
                        FinallPrice: 23460000,
                        Image: 'Images/Slids/Brands/1_500.png',
                        Options: [
                            {
                                ID: 1,
                                Caption: 'ساخت کشور ایتالیا'
                            },
                            {
                                ID: 2,
                                Caption: 'مناسب برای صورت‌های مربع و بیضی‌شکل'
                            },
                            {
                                ID: 3,
                                Caption: 'بسیار بادوام و مستحکم'
                            },
                        ],
                        LastUpdate: '2018-11-27',
                        VisitsCount: 71,
                        Available: true,
                        AvailableCount: 5,
                    },
                    {
                        ID: 2,
                        Name: 'عینک آفتابی RayBan 3576N 1537V',
                        Price: 25790000,
                        Discount: 0,
                        FinallPrice: 25790000,
                        Image: 'Images/Slids/Brands/Ray-Ban-RB3581N-001E4-1.jpg',
                        Options: [
                            {
                                ID: 1,
                                Caption: 'ساخت کشور ایتالیا'
                            },
                            {
                                ID: 2,
                                Caption: 'سبک کلاسیک، با معرفی Blaze'
                            },
                            {
                                ID: 3,
                                Caption: 'لنز Sharp Onesie! Ray-Ban'
                            },
                            {
                                ID: 4,
                                Caption: 'مناسب برای صورت های بیضی و گرد شکل'
                            },
                        ],
                        LastUpdate: '2017-12-01',
                        VisitsCount: 150,
                        Available: true,
                        AvailableCount: 5,
                    },
                ],
                TotalCount: 23,
            },
        ],
        AboutCompany: [
            {
                ID: 1,
                Caption: 'هدف ما آسایش مشتری است',
                Content:
                    ' یکی از اصلی‌ترین اهداف فروشگاه اینترنتی لوناتو، آسایش هرچه بیشتر مشتری در خرید عینک موردنظرش است. برای این منظور ما خدمات ویژه‌ای در نظر گرفته‌ایم. به این صورت که کاربر می‌تواند تا حداکثر ۵ جفت عینک را انتخاب کند تا برای تست رایگان در منزل، به نشانی وی ارسال شود. این سرویس کاملا رایگان است و توسط پیک در کوتاه‌ترین زمان برایتان ارسال می‌شود. شما پس از انتخاب گزینه (های) دلخواه، بقیه عینک‌ها را به پیک لوناتو پس داده و هزینه خرید عینک را همان‌جا در منزل خود با کارت بانکی یا به‌صورت نقد پرداخت می‌کنید. لازم است اشاره کنیم که اگر به هر دلیلی، هیچ‌کدام از ۵ عینک ارسالی موردپسندتان واقع نشد، بدون پرداخت هیچ‌نوع هزینه‌ای می‌توانید آن‌ها را مرجوع کنید. همچنین به صورت آنلاین هم می‌توانید با پاسخ دادن به پرسش‌های تصویری، فریم‌های متناسب با صورت خود را انتخاب کنید.'
            },
            {
                ID: 2,
                Caption: 'کالای فروخته شده پس گرفته می‌شود!',
                Content:
                    'هدف اصلی لوناتو، جلب اعتماد صددرصدی مشتری‌هاست. ما با اطمینان می‌گوییم که برای انتخاب مشتری و هزینه‌ای که برای خرید پرداخت می‌کند، ارزش بسیار زیادی قائل هستیم. برای اثبات این ادعا نیز به اطلاع مشتری‌های خود می‌رسانیم که اگر به هر دلیلی از خرید خود پشیمان شده و قصد مرجوع کردن کالای خریداری شده را دارند، لوناتو این امکان را برای آن‌ها مهیا ساخته و با کمال‌ میل، اجناس فروخته شده را تا ۳۰ روز پس از خرید و بدون نیاز به هیچ توضیحی پس می‌گیرد.'
            },
            {
                ID: 3,
                Caption: 'هدف ما آسایش مشتری است',
                Content:
                    ' یکی از اصلی‌ترین اهداف فروشگاه اینترنتی لوناتو، آسایش هرچه بیشتر مشتری در خرید عینک موردنظرش است. برای این منظور ما خدمات ویژه‌ای در نظر گرفته‌ایم. به این صورت که کاربر می‌تواند تا حداکثر ۵ جفت عینک را انتخاب کند تا برای تست رایگان در منزل، به نشانی وی ارسال شود. این سرویس کاملا رایگان است و توسط پیک در کوتاه‌ترین زمان برایتان ارسال می‌شود. شما پس از انتخاب گزینه (های) دلخواه، بقیه عینک‌ها را به پیک لوناتو پس داده و هزینه خرید عینک را همان‌جا در منزل خود با کارت بانکی یا به‌صورت نقد پرداخت می‌کنید. لازم است اشاره کنیم که اگر به هر دلیلی، هیچ‌کدام از ۵ عینک ارسالی موردپسندتان واقع نشد، بدون پرداخت هیچ‌نوع هزینه‌ای می‌توانید آن‌ها را مرجوع کنید. همچنین به صورت آنلاین هم می‌توانید با پاسخ دادن به پرسش‌های تصویری، فریم‌های متناسب با صورت خود را انتخاب کنید.'
            },
            {
                ID: 4,
                Caption: 'کالای فروخته شده پس گرفته می‌شود!',
                Content:
                    'هدف اصلی لوناتو، جلب اعتماد صددرصدی مشتری‌هاست. ما با اطمینان می‌گوییم که برای انتخاب مشتری و هزینه‌ای که برای خرید پرداخت می‌کند، ارزش بسیار زیادی قائل هستیم. برای اثبات این ادعا نیز به اطلاع مشتری‌های خود می‌رسانیم که اگر به هر دلیلی از خرید خود پشیمان شده و قصد مرجوع کردن کالای خریداری شده را دارند، لوناتو این امکان را برای آن‌ها مهیا ساخته و با کمال‌ میل، اجناس فروخته شده را تا ۳۰ روز پس از خرید و بدون نیاز به هیچ توضیحی پس می‌گیرد.'
            },
        ],
        ContactCompany: [
            {
                ID: 1,
                Caption: 'دفتر مرکزی',
                Content: '021 - 66704127'
            },
            {
                ID: 2,
                Caption: 'آدرس دفتر مرکزی',
                Content: 'تهران - خیابان جمالزاده جنوبی - بعد از خیابان جمهوری - پلاک 16 - طبقه دوم'
            },
            {
                ID: 3,
                Caption: 'دفتر فروش',
                Content: '021 - 66704127'
            },
            //{
            //    ID: 4,
            //    Caption: 'نقشه',
            //    Content: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d414746.67244650266!2d51.06963145458477!3d35.69648946102067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e00491ff3dcd9%3A0xf0b3697c567024bc!2sTehran%2C+Tehran+Province!5e0!3m2!1sen!2s!4v1553393033581" width="400" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>'
            //}
        ],
        Options: [
            {
                ID: 1,
                Caption: 'تخفیف های ویژه'
            },
            {
                ID: 2,
                Caption: 'مدت محدود'
            },
            {
                ID: 3,
                Caption: 'ارسال رایگان'
            },
        ],
    };

    $scope.StoreProduct = {
        ID: 2,
        Name: 'عینک آفتابی RayBan 3576N 1537V',
        Price: 25790000,
        Discount: 0,
        FinallPrice: 25790000,
        Images: [
            {
                ID: 1,
                AlternateText: "Alternate Text",
                Source: 'Images/Slids/Brands/Ray-Ban-RB3581N-001E4-1.jpg',
                Active: true
            },
            {
                ID: 2,
                AlternateText: "Alternate Text",
                Source: 'Images/Slids/Brands/9_500.png',
                Active: false
            },
            {
                ID: 3,
                AlternateText: "Alternate Text",
                Source: 'Images/Slids/Brands/puma_thumb.jpg',
                Active: false
            },
            {
                ID: 4,
                AlternateText: "Alternate Text",
                Source: 'Images/Slids/Brands/nike-logo.png',
                Active: false
            },
        ],
        Options: [
            {
                ID: 1,
                Caption: 'ساخت کشور ایتالیا'
            },
            {
                ID: 2,
                Caption: 'سبک کلاسیک، با معرفی Blaze'
            },
            {
                ID: 3,
                Caption: 'لنز Sharp Onesie! Ray-Ban'
            },
            {
                ID: 4,
                Caption: 'مناسب برای صورت های بیضی و گرد شکل'
            },
        ],
        Available: true,
        AvailableCount: 5,
        Quantity: 0,
    };

    $scope.StoreSelectedProductMenu = $scope.Store.ProductMenu[0];

    $scope.Cart = {
        Items: [
            //{
            //    ID: 2,
            //    Name: 'عینک آفتابی RayBan 3576N 1537V',
            //    Price: 25790000,
            //    Discount: 25,
            //    FinallPrice: 19342500,
            //    Image: 'Images/Slids/Brands/Ray-Ban-RB3581N-001E4-1.jpg',
            //    Options: [
            //        {
            //            ID: 1,
            //            Caption: 'ساخت کشور ایتالیا'
            //        },
            //        {
            //            ID: 2,
            //            Caption: 'سبک کلاسیک، با معرفی Blaze'
            //        },
            //        {
            //            ID: 3,
            //            Caption: 'لنز Sharp Onesie! Ray-Ban'
            //        },
            //        {
            //            ID: 4,
            //            Caption: 'مناسب برای صورت های بیضی و گرد شکل'
            //        },
            //    ],
            //    Available: true,
            //    AvailableCount: 5,
            //    Quantity: 1,
            //},
            //{
            //    ID: 1,
            //    Name: 'عینک آفتابی RayBan 3581N 90387J',
            //    Price: 25790000,
            //    Discount: 10,
            //    FinallPrice: 25790000,
            //    Image: 'Images/Slids/Brands/9_500.png',
            //    Options: [
            //        {
            //            ID: 1,
            //            Caption: 'ساخت کشور ایتالیا'
            //        },
            //        {
            //            ID: 2,
            //            Caption: 'لنزهای تمام تخت با تکنولوژی جدید Blaze'
            //        },
            //        {
            //            ID: 3,
            //            Caption: 'زیبایی و ترکیبی فراتر از انتظار'
            //        },
            //        {
            //            ID: 4,
            //            Caption: 'مناسب صورت های بیضی قلبی، گرد و مربع شکل'
            //        },
            //    ],
            //    Available: true,
            //    AvailableCount: 3,
            //    Quantity: 2,
            //},
            //{
            //    ID: 3,
            //    Name: 'عینک آفتابی RayBan RB3540 9002A6 56',
            //    Price: 23460000,
            //    Discount: 20,
            //    FinallPrice: 23460000,
            //    Image: 'Images/Slids/Brands/samsung_circle.jpg',
            //    Options: [
            //        {
            //            ID: 1,
            //            Caption: 'ساخت کشور ایتالیا'
            //        },
            //        {
            //            ID: 2,
            //            Caption: 'مناسب برای صورت‌های مربع و بیضی‌شکل'
            //        },
            //        {
            //            ID: 3,
            //            Caption: 'بسیار بادوام و مستحکم'
            //        },
            //    ],
            //    Available: true,
            //    AvailableCount: 10,
            //    Quantity: 3,
            //},
            //{
            //    ID: 6,
            //    Name: 'عینک آفتابی RayBan RB3540 9002A6 56',
            //    Price: 23460000,
            //    Discount: 0,
            //    FinallPrice: 23460000,
            //    Image:
            //        'Images/Slids/Brands/top-brands-and-the-meaning-of-their-logo-hermes-paris-lapolo.jpg',
            //    Available: true,
            //    AvailableCount: 1,
            //    Quantity: 1,
            //},
        ],
        CartTotalPrice: 0,
        CartTotalFinallPrice: 0,
    };

    $scope.Customer = {
        FirstName: '',
        LastName: '',
        SSN: '',
        Phone: '',
        Email: '',
        Address: ''
    };

    $scope.$watch('Cart.Items', function () {
        CartTotalPrice();
        CartTotalFinallPrice();
    }, true);

    // Agular Functions

    $scope.HomeMenuClick = function () {

        SetAllView(false);
        $scope.HomeView = true;
    };

    $scope.StoreMenuClick = function () {

        SetAllView(false);
        $scope.StoresView = true;
    };

    $scope.SpecialTabClick = function (item) {

        $scope.SpecialTab.forEach(t => t.Active = false);

        var _item = $scope.SpecialTab.filter(function (x) {
            return x.ID == item.ID
        });
        item.Active = true;
    };

    $scope.AboutCompanyClick = function () {

        SetAllView(false);
        $scope.StoreView = true;
        $scope.StoreAboutCompanyView = true;
    };

    $scope.ContactCompanyClick = function () {

        SetAllView(false);
        $scope.StoreView = true;
        $scope.StoreContactCompanyView = true;
    };

    $scope.ProductMenuClick = function (productMenuID) {

        SetAllView(false);
        $scope.StoreView = true;
        $scope.StoreProductListView = true;

        var _item = $scope.Store.ProductMenu.find(function (x) {
            return x.ID == productMenuID
        });
        if (_item)
            $scope.StoreSelectedProductMenu = _item;
    };

    $scope.StoreClick = function (StoreID) {

        SetAllView(false);
        $scope.StoreView = true;
        $scope.StoreProductListView = true;

        var _item = $scope.Stores.find(function (x) {
            return x.ID == StoreID
        });
        if (_item) {
            $scope.Store.ID = _item.ID;
            $scope.Store.Name = _item.Name;
            $scope.Store.Introduction = _item.Introduction;
            $scope.Store.Options = _item.Options;
            $scope.Store.lastUpdate = _item.lastUpdate;
        }
    };

    $scope.StoreProductClick = function (productID) {

        SetAllView(false);
        $scope.StoreView = true;
        $scope.StoreProductView = true;

        var _item = $scope.StoreSelectedProductMenu.ProductList.find(function (x) {
            return x.ID == productID
        });
        if (_item) {

            $scope.StoreProduct.ID = _item.ID;
            $scope.StoreProduct.Name = _item.Name;
            $scope.StoreProduct.Price = _item.Price;
            $scope.StoreProduct.Discount = _item.Discount;
            $scope.StoreProduct.FinallPrice = _item.FinallPrice;
            $scope.StoreProduct.Available = _item.Available;
            $scope.StoreProduct.AvailableCount = _item.AvailableCount;
        }
    };

    $scope.SpecialTabProductClick = function (productID, isAvailable) {

        SetAllView(false);
        $scope.StoreView = true;
        $scope.StoreProductView = true;

        var _item = $scope.StoreSelectedProductMenu.ProductList.find(function (x) {
            return x.ID == productID
        });
        if (_item) {

            $scope.StoreProduct.ID = _item.ID;
            $scope.StoreProduct.Name = _item.Name;
            $scope.StoreProduct.Price = _item.Price;
            $scope.StoreProduct.Discount = _item.Discount;
            $scope.StoreProduct.FinallPrice = _item.FinallPrice;
            $scope.StoreProduct.Available = _item.Available;
            $scope.StoreProduct.AvailableCount = _item.AvailableCount;
        }
    };

    $scope.CartClick = function () {

        SetAllView(false);
        $scope.CartView = true;
    };

    $scope.RemoveCart = function (item) {

        var buttons = [];
        buttons.push(new Button('بله', 'btn-success',
            function () {
                var index = $scope.Cart.Items.indexOf(item);
                $scope.Cart.Items.splice(index, 1);

                $scope.Alerts.push(new Alert(50,'توجه', 'حذف کالا از سبد خرید با موفقیت انجام شد.', 'alert-danger', 3));

            }));
        buttons.push(new Button('خیر', 'btn-danger'));

        SetModal('توجه', 'آیا از حذف کالا مطمئن هستید؟', buttons);
        $("#myModal3").modal({ backdrop: "static" });
    };

    $scope.AddCart = function (item) {

        if (!item.Available)
            return;

        item.Quantity = 1;

        var _itemInCart = $scope.Cart.Items.find(function (x) {
            return x.ID == item.ID
        });
        if (_itemInCart) {

            var buttons = [];
            buttons.push(new Button('بله',
                'btn-success',
                function () {
                    _itemInCart.Quantity += 1;
                    $scope.Alerts.push(new Alert(101,
                        'توجه',
                        'افزودن کالا به سبد خرید با موفقیت انجام شد.',
                        'alert-success',
                        3));
                }));
            buttons.push(new Button('خیر', 'btn-danger'));

            SetModal('توجه', 'کالا در سبد خرید وجود دارد. آیا مایل به افزایش تعداد سفارش هستید؟', buttons);
            $("#myModal3").modal({ backdrop: "static" });
        } else {

            $scope.Cart.Items.push(angular.copy(item));
            $scope.Alerts.push(new Alert(100,'توجه', 'افزودن کالا به سبد خرید با موفقیت انجام شد.', 'alert-success', 3));

        }
    };

    $scope.RegisterClick = function () {

        SetAllView(false);
        $scope.RegisterView = true;
    };

    $scope.PaymentClick = function () {

        SetAllView(false);
        $scope.PaymentView = true;
    };

    //

    // Private Finctions

    function SetAllView(isShow) {

        $scope.HomeView = isShow;
        $scope.StoresView = isShow;

        $scope.StoreView = isShow;
        $scope.StoreProductListView = isShow;
        $scope.StoreAboutCompanyView = isShow;
        $scope.StoreContactCompanyView = isShow;
        $scope.StoreProductView = isShow;

        $scope.CartView = isShow;
        $scope.RegisterView = isShow;
        $scope.PaymentView = isShow;

    }

    function SetModal(modalTitle, modalBody, buttons) {

        $scope.ModalContent.ModalTitle = modalTitle;
        $scope.ModalContent.ModalBody = modalBody;
        $scope.ModalContent.Buttons = buttons;
    };

    function CartTotalPrice() {

        var total = 0;
        angular.forEach($scope.Cart.Items,
            function (x) {
                total += x.Price * x.Quantity;
            });
        $scope.Cart.CartTotalPrice = total;
    };

    function CartTotalFinallPrice() {

        var totall = 0;
        angular.forEach($scope.Cart.Items,
            function (x) {
                totall += x.FinallPrice * x.Quantity;
            });
        $scope.Cart.CartTotalFinallPrice = totall;
    };

    //


});