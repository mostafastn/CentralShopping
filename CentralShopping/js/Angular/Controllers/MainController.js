var app = angular.module('CentralShopping', []);
app.controller('MainControl', function ($scope) {


    $scope.HomeView = false;
    $scope.ProductView = false;
    $scope.StoresView = false;

    $scope.StoreView = true;
    $scope.StoreProductMenuView = false;
    $scope.StoreAboutCompanyView = true;
    $scope.StoreContactCompanyView = false;

    $scope.ShowingDetails = "نمایش 1-12 از 158 محصول";

    $scope.ObjectInPageCount = ["همه", 12, 24];

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
        ProductCount: 10,
        Name: 'فروشگاه اینترنتی لوناتو',
        Introduction: 'مرجع تخصصی عینک طبی، عینک آفتابی، لنز چشم.',
        lastUpdate: '55',
        ProductMenu: [
            {
                ID: 1,
                Caption: 'انواع لنز'
            },
            {
                ID: 2,
                Caption: 'عینک های آفتابی',
                productList: [
                    {
                        ID: 1,
                        Name: 'عینک آفتابی RayBan 3581N 90387J',
                        Price: 25790000,
                        Discount: 0,
                        FinallPrice: 25790000,
                        Image: 'Images/Slids/Brands/1_500.png',
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
                    },
                    {
                        ID: 2,
                        Name: 'عینک آفتابی RayBan 3576N 1537V',
                        Price: 25790000,
                        Discount: 0,
                        FinallPrice: 25790000,
                        Image: 'Images/Slids/Brands/1_500.png',
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
                    },
                    {
                        ID: 3,
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
                    },
                    {
                        ID: 4,
                        Name: 'عینک آفتابی RayBan 3581N 90387J',
                        Price: 25790000,
                        Discount: 0,
                        FinallPrice: 25790000,
                        Image: 'Images/Slids/Brands/1_500.png',
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
                    },
                    {
                        ID: 5,
                        Name: 'عینک آفتابی RayBan 3576N 1537V',
                        Price: 25790000,
                        Discount: 0,
                        FinallPrice: 25790000,
                        Image: 'Images/Slids/Brands/1_500.png',
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
                    },
                    {
                        ID: 6,
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
                    },
                    {
                        ID: 7,
                        Name: 'عینک آفتابی RayBan 3581N 90387J',
                        Price: 25790000,
                        Discount: 0,
                        FinallPrice: 25790000,
                        Image: 'Images/Slids/Brands/1_500.png',
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
                    },
                    {
                        ID: 8,
                        Name: 'عینک آفتابی RayBan 3576N 1537V',
                        Price: 25790000,
                        Discount: 0,
                        FinallPrice: 25790000,
                        Image: 'Images/Slids/Brands/1_500.png',
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
                    },
                ]
            },
            {
                ID: 3,
                Caption: 'عینک های طبی'
            },
        ],
        AboutCompany: [
            {
                ID: 1,
                Caption: 'هدف ما آسایش مشتری است',
                Content: ' یکی از اصلی‌ترین اهداف فروشگاه اینترنتی لوناتو، آسایش هرچه بیشتر مشتری در خرید عینک موردنظرش است. برای این منظور ما خدمات ویژه‌ای در نظر گرفته‌ایم. به این صورت که کاربر می‌تواند تا حداکثر ۵ جفت عینک را انتخاب کند تا برای تست رایگان در منزل، به نشانی وی ارسال شود. این سرویس کاملا رایگان است و توسط پیک در کوتاه‌ترین زمان برایتان ارسال می‌شود. شما پس از انتخاب گزینه (های) دلخواه، بقیه عینک‌ها را به پیک لوناتو پس داده و هزینه خرید عینک را همان‌جا در منزل خود با کارت بانکی یا به‌صورت نقد پرداخت می‌کنید. لازم است اشاره کنیم که اگر به هر دلیلی، هیچ‌کدام از ۵ عینک ارسالی موردپسندتان واقع نشد، بدون پرداخت هیچ‌نوع هزینه‌ای می‌توانید آن‌ها را مرجوع کنید. همچنین به صورت آنلاین هم می‌توانید با پاسخ دادن به پرسش‌های تصویری، فریم‌های متناسب با صورت خود را انتخاب کنید.'
            },
            {
                ID: 2,
                Caption: 'کالای فروخته شده پس گرفته می‌شود!',
                Content: 'هدف اصلی لوناتو، جلب اعتماد صددرصدی مشتری‌هاست. ما با اطمینان می‌گوییم که برای انتخاب مشتری و هزینه‌ای که برای خرید پرداخت می‌کند، ارزش بسیار زیادی قائل هستیم. برای اثبات این ادعا نیز به اطلاع مشتری‌های خود می‌رسانیم که اگر به هر دلیلی از خرید خود پشیمان شده و قصد مرجوع کردن کالای خریداری شده را دارند، لوناتو این امکان را برای آن‌ها مهیا ساخته و با کمال‌ میل، اجناس فروخته شده را تا ۳۰ روز پس از خرید و بدون نیاز به هیچ توضیحی پس می‌گیرد.'
            },
            {
                ID: 3,
                Caption: 'هدف ما آسایش مشتری است',
                Content: ' یکی از اصلی‌ترین اهداف فروشگاه اینترنتی لوناتو، آسایش هرچه بیشتر مشتری در خرید عینک موردنظرش است. برای این منظور ما خدمات ویژه‌ای در نظر گرفته‌ایم. به این صورت که کاربر می‌تواند تا حداکثر ۵ جفت عینک را انتخاب کند تا برای تست رایگان در منزل، به نشانی وی ارسال شود. این سرویس کاملا رایگان است و توسط پیک در کوتاه‌ترین زمان برایتان ارسال می‌شود. شما پس از انتخاب گزینه (های) دلخواه، بقیه عینک‌ها را به پیک لوناتو پس داده و هزینه خرید عینک را همان‌جا در منزل خود با کارت بانکی یا به‌صورت نقد پرداخت می‌کنید. لازم است اشاره کنیم که اگر به هر دلیلی، هیچ‌کدام از ۵ عینک ارسالی موردپسندتان واقع نشد، بدون پرداخت هیچ‌نوع هزینه‌ای می‌توانید آن‌ها را مرجوع کنید. همچنین به صورت آنلاین هم می‌توانید با پاسخ دادن به پرسش‌های تصویری، فریم‌های متناسب با صورت خود را انتخاب کنید.'
            },
            {
                ID: 4,
                Caption: 'کالای فروخته شده پس گرفته می‌شود!',
                Content: 'هدف اصلی لوناتو، جلب اعتماد صددرصدی مشتری‌هاست. ما با اطمینان می‌گوییم که برای انتخاب مشتری و هزینه‌ای که برای خرید پرداخت می‌کند، ارزش بسیار زیادی قائل هستیم. برای اثبات این ادعا نیز به اطلاع مشتری‌های خود می‌رسانیم که اگر به هر دلیلی از خرید خود پشیمان شده و قصد مرجوع کردن کالای خریداری شده را دارند، لوناتو این امکان را برای آن‌ها مهیا ساخته و با کمال‌ میل، اجناس فروخته شده را تا ۳۰ روز پس از خرید و بدون نیاز به هیچ توضیحی پس می‌گیرد.'
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

    $scope.HomeMenuClick = function () {

        $scope.HomeView = true;

        $scope.ProductView = false;
        $scope.StoresView = false;
        $scope.StoreView = false;
    }

    $scope.StoreMenuClick = function () {

        $scope.StoresView = true;

        $scope.HomeView = false;
        $scope.ProductView = false;
        $scope.StoreView = false;
    }

    $scope.SpecialTabClick = function (item) {

        $scope.SpecialTab.forEach(t => t.Active = false);

        var _item = $scope.SpecialTab.filter(function (x) {
            return x.ID == item.ID
        });
        item.Active = true;
    };


    $scope.AboutCompanyClick = function () {

        $scope.StoreView = true;

        $scope.StoreAboutCompanyView = true;
        $scope.StoreProductMenuView = false;
        $scope.StoreContactCompanyView = false;
        

        $scope.StoresView = false;
        $scope.HomeView = false;
        $scope.ProductView = false;
    }


    $scope.ContactCompanyClick = function () {

        $scope.StoreView = true;

        $scope.StoreContactCompanyView = true;
        $scope.StoreAboutCompanyView = false;
        $scope.StoreProductMenuView = false;
        

        $scope.StoresView = false;
        $scope.HomeView = false;
        $scope.ProductView = false;
    }
});