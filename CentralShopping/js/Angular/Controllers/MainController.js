/// <reference path="../../Infrastructure.js" />
var app = angular.module('CentralShopping', []);
app.controller('MainControl', function ($scope, $http) {

    // Class Object

    function Button(caption, _class, click) {

        this.Caption = caption;
        this.Class = _class;
        this.Click = click;
    }

    function Alert(id, caption, body, _class, timeout) {

        this.ID = id;
        this.Caption = caption;
        this.Body = body;
        this.Class = _class;

        if (timeout > 0) {

            setTimeout(function () {
                $scope.Alerts.splice(0, 1);
                var itemID = '#' + id;
                $(itemID).fadeTo(500, 0).slideUp(500, function () {
                    $(this).remove();
                });
            }, timeout * 1000);

        }
    }

    function AlertWithHandler(id, caption, body, _class, handler) {

        this.ID = id;
        this.Caption = caption;
        this.Body = body;
        this.Class = _class;
        this.Handler = handler;
    }

    // Class Object

    $scope.HomeView = true;

    $scope.GoBackView = true;
    $scope.PlaceSelectorView = false;

    $scope.StoresView = false;

    $scope.StoreView = false;
    $scope.HomeCompanyView = false;
    $scope.StoreProductListView = false;
    $scope.StoreAboutCompanyView = false;
    $scope.StoreContactCompanyView = false;
    $scope.StoreProductView = true;

    $scope.ProductsView = false;

    $scope.CartView = false;
    $scope.RegisterView = false;
    $scope.PaymentView = false;

    $scope.PolicyView = false;
    $scope.ContactUsView = false;
    $scope.AboutUsView = false;
    $scope.AdsView = false;
    $scope.ProblemView = false;

    $scope.AvalableProductOnly = false;
    $scope.ProductsPriceFrom = 0; ``
    $scope.ProductsPriceTo = 0;

    $scope.CurentView = [{ view: "HomeView" }];
    $scope.ViewStack = [];

    $scope.SelectedPlace = "انتخاب کنید ...";

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

    $scope.ModalContent = {
        ModalTitle: 'ModalTitle',
        ModalBody: 'ModalBody',
        Buttons: [
            {
                Caption: 'Caption',
                Class: 'btn-success',
                Show: true,
                Click: function () { }
            },
            {
                Caption: 'Caption',
                Class: 'btn-danger',
                Show: true,
                Click: function () { }
            }
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

    $scope.NavbarProductMenu = [];

    $scope.CarouselSlide = [
        {
            ID: 1,
            AlternateText: "Alternate Text",
            SourceAddress: 'Images/Slids/Brands/HS-250ML.JPG',
            Active: true
        },
        {
            ID: 2,
            AlternateText: "Alternate Text",
            SourceAddress: 'Images/Slids/Brands/HS-400ML.JPG',
            Active: false
        },
        {
            ID: 3,
            AlternateText: "Alternate Text",
            SourceAddress: 'Images/Slids/Brands/MRC-1.jpg',
            Active: false
        },
        {
            ID: 4,
            AlternateText: "Alternate Text",
            SourceAddress: 'Images/Slids/Brands/SC-1.jpg',
            Active: false
        },
        {
            ID: 5,
            AlternateText: "Alternate Text",
            SourceAddress: 'Images/Slids/Brands/SC-2.jpg',
            Active: false
        },
        {
            ID: 6,
            AlternateText: "Alternate Text",
            SourceAddress: 'Images/Slids/Brands/SC-3.jpg',
            Active: false
        },
        {
            ID: 7,
            AlternateText: "Alternate Text",
            SourceAddress: 'Images/Slids/Brands/LS-1.jpg',
            Active: false
        },
        {
            ID: 8,
            AlternateText: "Alternate Text",
            SourceAddress: 'Images/Slids/Brands/GB-1.jpg',
            Active: false
        },
        {
            ID: 9,
            AlternateText: "Alternate Text",
            SourceAddress: 'Images/Slids/Brands/BA-1.jpg',
            Active: false
        },
        {
            ID: 10,
            AlternateText: "Alternate Text",
            SourceAddress: 'Images/Slids/Brands/BS-1.jpg',
            Active: false
        },
        {
            ID: 11,
            AlternateText: "Alternate Text",
            SourceAddress: 'Images/Slids/Brands/AHFS-1.jpg',
            Active: false
        },
        {
            ID: 12,
            AlternateText: "Alternate Text",
            SourceAddress: 'Images/Slids/Brands/AHFS-2.jpg',
            Active: false
        },
        {
            ID: 13,
            AlternateText: "Alternate Text",
            SourceAddress: 'Images/Slids/Brands/B.jpg',
            Active: false
        },
        {
            ID: 14,
            AlternateText: "Alternate Text",
            SourceAddress: 'Images/Slids/Brands/FCP-1.jpg',
            Active: false
        },
        {
            ID: 15,
            AlternateText: "Alternate Text",
            SourceAddress: 'Images/Slids/Brands/HeSe-1.jpg',
            Active: false
        },
        {
            ID: 16,
            AlternateText: "Alternate Text",
            SourceAddress: 'Images/Slids/Brands/HD-1.jpg',
            Active: false
        },
        {
            ID: 17,
            AlternateText: "Alternate Text",
            SourceAddress: 'Images/Slids/Brands/HT-1.jpg',
            Active: false
        },
        {
            ID: 18,
            AlternateText: "Alternate Text",
            SourceAddress: 'Images/Slids/Brands/AWC-1.jpg',
            Active: false
        }
    ];

    $scope.SpecialTab = [
        {
            ID: 501,
            Name: 'ضدعفونی کننده 250',
            StoreName: '',
            Introduction: 'ضدعفونی کننده موثر و سریع بدون ترکیبات تحریک کننده پوست',
            Price: 0,
            Discount: 0,
            FinallPrice: 0,
            Image: 'Images/Products/HS-250ML.JPG',
            Options: [
                {
                    ID: 1,
                    Caption: 'در حجم های مختلف مناسب برای مصارف شخصی و اماکن عمومی و ادارات'
                },
                {
                    ID: 2,
                    Caption: 'سازگار با انواع پوست های خشک و چرب'
                },
                {
                    ID: 3,
                    Caption: 'حجم 250 میلی لیتر'
                }
            ],
            Code: '#1',
            Active: true,

            //این 
            //CategoryID 
            //فقط برای حالت 
            //Static 
            //لازمه و برای حالت 
            //Dynamic 
            //با 
            //ID 
            //محصول از سمت سرور بارگزاری می شود
            CategoryID: 5
        },
        {
            ID: 502,
            Name: 'ضدعفونی کننده 400',
            StoreName: '',
            Introduction: 'ضدعفونی کننده موثر و سریع بدون ترکیبات تحریک کننده پوست',
            Price: 0,
            Discount: 0,
            FinallPrice: 0,
            Image: 'Images/Products/HS-400ML.JPG',
            Options: [
                {
                    ID: 1,
                    Caption: 'بهره گیری از تکنولوژی نانو سیلور جهت ازبین برندگی ویروس ها'
                },
                {
                    ID: 2,
                    Caption: 'در حجم های مختلف مناسب برای مصارف شخصی و اماکن عمومی و ادارات'
                },
                {
                    ID: 3,
                    Caption: 'سازگار با انواع پوست های خشک و چرب'
                },
                {
                    ID: 4,
                    Caption: 'حجم 400 میلی لیتر'
                }
            ],
            Code: '#2',
            Active: false,

            CategoryID: 5
        }

    ];

    $scope.SearchResultProductList = {
        ID: 1,
        Caption: '-',
        Products: [],
        TotalCount: 50,
    };

    $scope.Stores = [
        {
            ID: 1,
            ProductCount: 10,
            Name: 'فروشگاه عطر محمد',
            IntroductionSummary: 'ارائه رایحه های اصیل و ماندگار از عطرها و برندهای معتبر جهان',
            lastUpdate: '15',
            Options: [
                {
                    ID: 1,
                    Caption: 'تخفیف های ویژه'
                },
                {
                    ID: 3,
                    Caption: 'ارسال رایگان'
                },
            ],
            Link: '',
            //این ایتم برای تست ایجاد شده و نیازی به ایجاد از وب سرویس ندارد
            // هنگام ارسال به صفحه فروشگاه از سرویس فراخوانی می شود
            ProductMenu: [
                {
                    ID: 1,
                    Caption: 'عطر و ادوکلن',
                    ProductList: [
                        {
                            ID: 1,
                            Name: 'ادو پرفیوم میسون فرانسیس کورکجان مدل Baccarat Rouge 540 حجم 200 میلی لیتر',
                            Price: 58000000,
                            Discount: 0,
                            FinallPrice: 58000000,
                            Image: 'Images/Products/111.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'حجم 200 میلی لیتر'
                                },
                                {
                                    ID: 2,
                                    Caption: 'نوع رایحه : تند گرم'
                                },
                                {
                                    ID: 3,
                                    Caption: 'ساختار رایحه : چوب صمغ گیاهان معطر'
                                },
                                {
                                    ID: 4,
                                    Caption: 'ادو پرفیوم میسون فرانسیس کورکجان مدل Baccarat Rouge 540، عطری خاص است که در سال 2015 توسط طراح مشهور عطر فرانسیس کورکجان برای استفاده آقایان و خانمها خلق شد. این عطر دارای رایحه ای گرم و تند میباشد. ماندگاری بالا و خط بوی ویژه این عطر برای استفاده در روزها و شبهای سرد و خنک انتخابی ویژه است.'
                                }
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 150,
                            Available: true,
                            AvailableCount: 5,
                        },
                        {
                            ID: 2,
                            Name: 'ادو پرفیوم کرید مدل Royal Mayfair حجم 120 میلی لیتر',
                            Price: 49000000,
                            Discount: 5,
                            FinallPrice: 46550000,
                            Image: 'Images/Products/112.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'حجم 120 میلی لیتر'
                                },
                                {
                                    ID: 2,
                                    Caption: 'نوع رایحه : تلخ گرم'
                                },
                                {
                                    ID: 3,
                                    Caption: 'ساختار رایحه : مرکبات گل میوه گیاهان معطر چوب'
                                },
                                {
                                    ID: 4,
                                    Caption: 'یکی از عطرهای گلی و میوه‌ای «کرید» (Creed) در سال 2015 ساخته شده است. این ادو پرفیوم که برای استفاده‌ی مشترک آقایان و بانوان ساخته شده «Royal Mayfair» نام دارد. Royal Mayfair یکی از شاهکارهای عطرساز برجسته و کاربلد «اولیویه کرید» (Olivier Creed) به‌حساب می‌آید. این عطر بوی خنکی دارد و برای استفاده در تمامی فصول سال به‌ویژه‌ بهار و تابستان پیشنهاد می‌شود. بطری Royal Mayfair خیلی ساده و درعین‌حال شیک طراحی شده است. روی بطری Royal Mayfair نشان تجاری کرید و نام Royal Mayfair را مشاهده می‌کنید. مایع درون بطری به رنگ طلایی است و از روی شیشه‌ی شفاف آن دیده می‌شود. درپوش طلایی بطری به‌خوبی طرح کلی Royal Mayfair را کامل می‌کند. شیشه بسیار خوش‌دست بوده و به‌راحتی در دست آقایان و بانوان جا می‌شود. پس از اسپری کردن Royal Mayfair روی پوست و محل نبضتان متوجه بوی لیموترش و درخت کاج خواهید شد. این ترکیب طبیعی و شیرین، انرژی و تازگی را در شما بیشتر می‌کند. پس از مدتی، این نت‌ها جای خود را به نت‌های میانی خواهند داد. نت‌های میانی از ترکیب گل رز ساخته می‌شوند. بوی شیرین این نت‌‌‌های گلی، انرژی مثبت و طراوت را در شما ایجاد می‌کند. در ادامه و با گذشت مدت‌زمانی طولانی، نت‌های پایانی از راه رسیده و جای نت‌های میانی را می‌گیرند. این نت‌ها از پرتقال، چوب سدر و اوکالیپتوس تشکیل شده‌اند. پس از استشمام بوی این نت‌ها، اعتمادبه‌نفس بالایی خواهید داشت. خرید عطر کرید Royal Mayfair با توجه به بوی خنک، پخش بوی قوی، ماندگاری بالا، بطری خاص و زیبا، قابلیت استفاده برای آقایان و بانوان، حجم 120 میلی‌لیتری و برند شناخته‌شده و ارزشمندش برای شما و کسی که این عطر را از شما هدیه می‌گیرد بسیار به‌صرفه خواهد بود.'
                                },
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 70,
                            Available: true,
                            AvailableCount: 5,

                        },
                        {
                            ID: 3,
                            Name: 'ادو پرفیوم زنانه میسون فرانسیس کورکجان مدل A La Rose حجم 200 میلی لیتر',
                            Price: 47400000,
                            Discount: 10,
                            FinallPrice: 42660000,
                            Image: 'Images/Products/113.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'حجم 200 میلی لیتر'
                                },
                                {
                                    ID: 2,
                                    Caption: 'نوع رایحه : شیرین گل'
                                },
                                {
                                    ID: 3,
                                    Caption: 'ساختار رایحه : چوب مرکبات گیاهان معطر گل'
                                },
                                {
                                    ID: 3,
                                    Caption: 'ادو پرفیوم زنانه فرانسیس کورکجان مدل A La Rose، عطری است ملایم و شیرین. این عطر در سال ۲۰۱۴ به بازار عطر و ادکلن عرضه شد. این ادوپرفیوم عطری است زنانه و رمانتیک که برای خانم های شیک پوش و سخت پسند که همواره به دنبال بهترین ها هستند طراحی شده است.'
                                },
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 15,
                            Available: true,
                            AvailableCount: 5,
                        },
                        {
                            ID: 4,
                            Name: 'پرفیوم میسون فرانسیس کورکجان مدل Baccarat Rouge 540 Extrait de Parfum حجم 70 میلی لیتر',
                            Price: 44649000,
                            Discount: 0,
                            FinallPrice: 44649000,
                            Image: 'Images/Products/114.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'حجم 70 میلی لیتر'
                                },
                                {
                                    ID: 2,
                                    Caption: 'نوع رایحه : شیرین گرم شرقی'
                                },
                                {
                                    ID: 3,
                                    Caption: 'ساختار رایحه : چوب صمغ گیاهان معطر'
                                },
                                {
                                    ID: 3,
                                    Caption: 'میسون فرانسیس کورکجان مدل Baccarat Rouge 540، پرفیومی خالص است که در سال 2017 توسط طراح مشهور عطر فرانسیس کورکجان خلق شد. این عطر دارای رایحه ای شیرین و شرقی میباشد. ماندگاری بالا و خط بوی ویژه این عطر از نقاط برجسته آن میباشد. این عطر برای استفاده آقایان و خانمها طراحی شده است.'
                                },
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 15,
                            Available: true,
                            AvailableCount: 5,
                        },
                        {
                            ID: 5,
                            Name: 'ادو پرفیوم کرید مدل Royal Oud حجم 120 میلی لیتر',
                            Price: 43500000,
                            Discount: 10,
                            FinallPrice: 39150000,
                            Image: 'Images/Products/115.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'حجم 120 میلی لیتر'
                                },
                                {
                                    ID: 2,
                                    Caption: 'نوع رایحه : تلخ گرم'
                                },
                                {
                                    ID: 3,
                                    Caption: 'ساختار رایحه : مرکبات میوه گیاهان معطر خاک و زمین ادویه چوب'
                                },
                                {
                                    ID: 3,
                                    Caption: 'آیا شما جزو افرادی هستید که علاوه بر بوی عطر به اعتبار برند و همچنین طراحی شیشه‌ی آن اهمیت ویژه‌ای می‌دهند؟ اگر چنین است، بدون شک نام برند معتبر و معروف «کرید» (Creed) را شنیده‌اید. یکی از تولیدات ویژه‌ی کرید که در سال 2011 در کشور فرانسه ساخته شد، «رویال عود» (Royal Oud) نام دارد. یکی از مهم‌ترین ویژگی این عطر، قابلیت استفاده‌ی آن برای آقایان و بانوان است. عطرساز معروفی به نام «Olivier Creed Sixth Generation» کار طراحی و فرمولاسیون این ادو پرفیوم را انجام داده است. همان‌طور که از نام این عطر پیداست، با استفاده از آن حال و هوای حضور در قصرهای سلطنتی و مجلل را خواهید داشت. پس بی‌دلیل نیست که افراد مشهوری مثل بازیگران هالیوود، خانواده‌های سلطنتی و ورزشکاران نامی در سراسر دنیا از مشتریان پر و پا قرص محصولات کرید هستند. با نگاهی به شیشه‌ی کرید، طراحی آن شکوه و عظمت کاخ‌های سلطنتی و مهمانی‌های مجلل قدیمی را برای شما تداعی می‌کند. در بطری به رنگ مشکی به‌خوبی با شیشه‌ی آن هماهنگی دارد. مایع درون شیشه به رنگ طلایی روشن است و به‌وضوح از روی بطری شفاف رویال عود قابل‌مشاهده است. اگر کمی با دقت به شیشه دقت کنید، نشان تجاری کرید با حروف درشت و طلایی‌رنگ به‌خوبی قابل‌مشاهده است. به محض اسپری این عطر روی محل نبض یا لباس خود، بوی لیمو، فلفل صورتی و نارنج به سرعت در هوا پخش می‌شود. تندی عجیب و قوی این ترکیب، شما و اطرافیانتان را کاملاً متوجه خودش خواهد کرد. پس از مدتی بوی سدر، گیاه مفید باریجه و گلپر نام‌آشنا، جایگزین نت‌های قبلی خواهد شد. خنکی این ترکیب سه‌گانه حس آرامش و شادی ویژه‌ای را به شما می‌بخشد. این نت‌های میانی تا مدت زیادی قابل استشمام خواهند بود. پس از این شاهد تأثیر عناصری همچون چوب عود، چوب صندل و مشک خواهید بود. این نت‌ها علاوه بر حفظ طراوت و خنکی نت‌های قبلی با وجود مشک انرژی خاصی را ایجاد می‌کنند. برند کرید از سال 1760 توسط آقای «اولیویر کرید» (Olivier Creed) در کشور فرانسه و در شهر پاریس تاسیس شد. یکی از ویژگی‌های مهم در ساخت عطرهای کرید به کار رفتن مواد طبیعی و استفاده از روش‌های سنتی در هنگام تقطیر آن‌هاست.'
                                },
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 15,
                            Available: true,
                            AvailableCount: 5,
                        },
                    ],
                    TotalCount: 50,
                },
                {
                    ID: 2,
                    Caption: 'اسپری',
                    ProductList: [
                        {
                            ID: 1,
                            Name: 'بادی اسپلش زنانه ویکتوریا سکرت مدل Eau so party حجم 250 میلی لیتر',
                            Price: 2450000,
                            Discount: 0,
                            FinallPrice: 2450000,
                            Image: 'Images/Products/121.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'حجم 250 میلی لیتر'
                                },
                                {
                                    ID: 2,
                                    Caption: 'نوع : اسپری معمولی'
                                },
                                {
                                    ID: 3,
                                    Caption: 'طبع : گرم'
                                }
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 150,
                            Available: true,
                            AvailableCount: 5,
                        },
                        {
                            ID: 2,
                            Name: 'بادی اسپلش زنانه ویکتوریا سکرت مدل Scandalous حجم 250 میلی لیتر',
                            Price: 2450000,
                            Discount: 0,
                            FinallPrice: 2450000,
                            Image: 'Images/Products/122.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'حجم 250 میلی لیتر'
                                },
                                {
                                    ID: 2,
                                    Caption: 'نوع : اسپری معمولی'
                                },
                                {
                                    ID: 3,
                                    Caption: 'طبع : معتدل'
                                }
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 150,
                            Available: true,
                            AvailableCount: 5,
                        },
                        {
                            ID: 3,
                            Name: 'بادی اسپلش زنانه ویکتوریا سکرت مدل Eau so حجم 250 میلی لیتر',
                            Price: 2450000,
                            Discount: 0,
                            FinallPrice: 2450000,
                            Image: 'Images/Products/123.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'حجم 250 میلی لیتر'
                                },
                                {
                                    ID: 2,
                                    Caption: 'نوع : اسپری معمولی'
                                },
                                {
                                    ID: 3,
                                    Caption: 'طبع : خنک'
                                }
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 150,
                            Available: true,
                            AvailableCount: 5,
                        },
                        {
                            ID: 4,
                            Name: 'بادی اسپلش زنانه ویکتوریا سکرت مدل Tease حجم 250 میلی لیتر',
                            Price: 2450000,
                            Discount: 0,
                            FinallPrice: 2450000,
                            Image: 'Images/Products/124.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'حجم 250 میلی لیتر'
                                },
                                {
                                    ID: 2,
                                    Caption: 'نوع : اسپری معمولی'
                                },
                                {
                                    ID: 3,
                                    Caption: 'طبع : خنک'
                                }
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 150,
                            Available: true,
                            AvailableCount: 5,
                        },
                        {
                            ID: 5,
                            Name: 'بادی اسپلش ویکتوریا سکرت مدل Xo victoria حجم 250 میلی لیتر',
                            Price: 2450000,
                            Discount: 0,
                            FinallPrice: 2450000,
                            Image: 'Images/Products/125.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'حجم 250 میلی لیتر'
                                },
                                {
                                    ID: 2,
                                    Caption: 'نوع : اسپری معمولی'
                                },
                                {
                                    ID: 3,
                                    Caption: 'طبع : معتدل'
                                }
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 150,
                            Available: true,
                            AvailableCount: 5,
                        },
                    ],
                    TotalCount: 56,
                },
            ],
            Image: 'Images/Company/1.jpg',
        },
        {
            ID: 2,
            ProductCount: 27,
            Name: 'فروشگاه طارم آنلاین',
            IntroductionSummary:
                'اولین و معتبرترین فروشگاه آنلاین مصولات اورگانیک شامل انواع زیتون ، روغن زیتون، رب انار ترش و شیرین ملس، سیر ترشی، رب گوجه خانگی .',
            lastUpdate: '25',
            Options: [
                {
                    ID: 1,
                    Caption: 'مدت محدود'
                },
                {
                    ID: 2,
                    Caption: 'ارسال رایگان'
                },
                {
                    ID: 3,
                    Caption: 'ضمانت برگشت کالا'
                },
            ],
            Link: '',
            //این ایتم برای تست ایجاد شده و نیازی به ایجاد از وب سرویس ندارد
            // هنگام ارسال به صفحه فروشگاه از سرویس فراخوانی می شود
            ProductMenu: [
                {
                    ID: 1,
                    Caption: 'زیتون شکسته',
                    ProductList: [
                        {
                            ID: 1,
                            Name: 'زیتون شکسته درجه 1',
                            Price: 180000,
                            Discount: 5,
                            FinallPrice: 171000,
                            Image: 'Images/Products/211.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'زیتون طارم'
                                },
                                {
                                    ID: 2,
                                    Caption: 'گوشتی و روغنی'
                                }
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 150,
                            Available: true,
                            AvailableCount: 50,
                        },
                        {
                            ID: 2,
                            Name: 'زیتون شکسته درجه 2',
                            Price: 160000,
                            Discount: 0,
                            FinallPrice: 160000,
                            Image: 'Images/Products/212.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'زیتون طارم'
                                },
                                {
                                    ID: 2,
                                    Caption: 'گوشتی و روغنی'
                                }
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 150,
                            Available: true,
                            AvailableCount: 50,
                        },
                        {
                            ID: 3,
                            Name: 'زیتون شکسته درجه 3',
                            Price: 140000,
                            Discount: 0,
                            FinallPrice: 140000,
                            Image: 'Images/Products/213.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'زیتون طارم'
                                },
                                {
                                    ID: 2,
                                    Caption: 'گوشتی و روغنی'
                                }
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 150,
                            Available: true,
                            AvailableCount: 50,
                        },
                        {
                            ID: 4,
                            Name: 'زیتون شکسته درجه 4',
                            Price: 120000,
                            Discount: 0,
                            FinallPrice: 120000,
                            Image: 'Images/Products/214.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'زیتون طارم'
                                },
                                {
                                    ID: 2,
                                    Caption: 'گوشتی و روغنی'
                                }
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 150,
                            Available: true,
                            AvailableCount: 50,
                        },
                        {
                            ID: 5,
                            Name: 'زیتون شکسته درجه 5',
                            Price: 100000,
                            Discount: 0,
                            FinallPrice: 100000,
                            Image: 'Images/Products/215.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'زیتون طارم'
                                },
                                {
                                    ID: 2,
                                    Caption: 'گوشتی و روغنی'
                                }
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 150,
                            Available: true,
                            AvailableCount: 50,
                        },
                    ],
                    TotalCount: 5,
                },
                {
                    ID: 2,
                    Caption: 'زیتون کنسروی',
                    ProductList: [
                        {
                            ID: 1,
                            Name: 'زیتون کنسروی درجه 1',
                            Price: 180000,
                            Discount: 5,
                            FinallPrice: 171000,
                            Image: 'Images/Products/221.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'زیتون طارم'
                                },
                                {
                                    ID: 2,
                                    Caption: 'گوشتی و روغنی'
                                }
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 150,
                            Available: true,
                            AvailableCount: 50,
                        },
                        {
                            ID: 2,
                            Name: 'زیتون کنسروی درجه 2',
                            Price: 160000,
                            Discount: 0,
                            FinallPrice: 160000,
                            Image: 'Images/Products/222.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'زیتون طارم'
                                },
                                {
                                    ID: 2,
                                    Caption: 'گوشتی و روغنی'
                                }
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 150,
                            Available: true,
                            AvailableCount: 50,
                        },
                        {
                            ID: 3,
                            Name: 'زیتون کنسروی درجه 3',
                            Price: 140000,
                            Discount: 0,
                            FinallPrice: 140000,
                            Image: 'Images/Products/223.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'زیتون طارم'
                                },
                                {
                                    ID: 2,
                                    Caption: 'گوشتی و روغنی'
                                }
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 150,
                            Available: true,
                            AvailableCount: 50,
                        },
                        {
                            ID: 4,
                            Name: 'زیتون کنسروی درجه 4',
                            Price: 120000,
                            Discount: 0,
                            FinallPrice: 120000,
                            Image: 'Images/Products/224.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'زیتون طارم'
                                },
                                {
                                    ID: 2,
                                    Caption: 'گوشتی و روغنی'
                                }
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 150,
                            Available: true,
                            AvailableCount: 50,
                        },
                        {
                            ID: 5,
                            Name: 'زیتون کنسروی درجه 5',
                            Price: 100000,
                            Discount: 0,
                            FinallPrice: 100000,
                            Image: 'Images/Products/225.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'زیتون طارم'
                                },
                                {
                                    ID: 2,
                                    Caption: 'گوشتی و روغنی'
                                }
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 150,
                            Available: true,
                            AvailableCount: 50,
                        },
                    ],
                    TotalCount: 5,
                },
                {
                    ID: 3,
                    Caption: 'زیتون پرورده',
                    ProductList: [
                        {
                            ID: 1,
                            Name: 'زیتون پرورده درجه 1',
                            Price: 280000,
                            Discount: 5,
                            FinallPrice: 266000,
                            Image: 'Images/Products/231.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'زیتون طارم'
                                },
                                {
                                    ID: 2,
                                    Caption: 'گوشتی و روغنی'
                                }
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 150,
                            Available: true,
                            AvailableCount: 50,
                        },
                        {
                            ID: 2,
                            Name: 'زیتون پرورده درجه 2',
                            Price: 160000,
                            Discount: 0,
                            FinallPrice: 160000,
                            Image: 'Images/Products/232.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'زیتون طارم'
                                },
                                {
                                    ID: 2,
                                    Caption: 'گوشتی و روغنی'
                                }
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 150,
                            Available: true,
                            AvailableCount: 50,
                        },
                        {
                            ID: 3,
                            Name: 'زیتون پرورده درجه 3',
                            Price: 140000,
                            Discount: 0,
                            FinallPrice: 140000,
                            Image: 'Images/Products/233.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'زیتون طارم'
                                },
                                {
                                    ID: 2,
                                    Caption: 'گوشتی و روغنی'
                                }
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 150,
                            Available: true,
                            AvailableCount: 50,
                        },
                        {
                            ID: 4,
                            Name: 'زیتون پرورده درجه 4',
                            Price: 120000,
                            Discount: 0,
                            FinallPrice: 120000,
                            Image: 'Images/Products/234.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'زیتون طارم'
                                },
                                {
                                    ID: 2,
                                    Caption: 'گوشتی و روغنی'
                                }
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 150,
                            Available: true,
                            AvailableCount: 50,
                        },
                        {
                            ID: 5,
                            Name: 'زیتون پرورده درجه 5',
                            Price: 100000,
                            Discount: 0,
                            FinallPrice: 100000,
                            Image: 'Images/Products/235.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'زیتون طارم'
                                },
                                {
                                    ID: 2,
                                    Caption: 'گوشتی و روغنی'
                                }
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 150,
                            Available: true,
                            AvailableCount: 50,
                        },
                    ],
                    TotalCount: 5,
                },
                {
                    ID: 4,
                    Caption: 'روغن زیتون',
                    ProductList: [
                        {
                            ID: 1,
                            Name: 'روغن زیتون درجه 1',
                            Price: 750000,
                            Discount: 5,
                            FinallPrice: 712500,
                            Image: 'Images/Products/241.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'زیتون طارم'
                                },
                                {
                                    ID: 2,
                                    Caption: 'روغن زیتون ماری'
                                },
                                {
                                    ID: 3,
                                    Caption: 'رنگ زرد'
                                }
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 150,
                            Available: true,
                            AvailableCount: 50,
                        },
                        {
                            ID: 2,
                            Name: 'روغن زیتون درجه 1',
                            Price: 750000,
                            Discount: 5,
                            FinallPrice: 712500,
                            Image: 'Images/Products/242.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'زیتون طارم'
                                },
                                {
                                    ID: 2,
                                    Caption: 'رنگ سبز'
                                }
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 150,
                            Available: true,
                            AvailableCount: 50,
                        }
                    ],
                    TotalCount: 2,
                },
                {
                    ID: 5,
                    Caption: 'رب انار',
                    ProductList: [
                        {
                            ID: 1,
                            Name: 'رب انار شیرین درجه 1',
                            Price: 550000,
                            Discount: 5,
                            FinallPrice: 522500,
                            Image: 'Images/Products/251.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'انار طارم'
                                },
                                {
                                    ID: 2,
                                    Caption: 'غلیظ و به صرفه'
                                },
                                {
                                    ID: 2,
                                    Caption: 'رنگ سیاه'
                                }
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 150,
                            Available: true,
                            AvailableCount: 50,
                        },
                        {
                            ID: 2,
                            Name: 'رب انار ترش درجه 1',
                            Price: 550000,
                            Discount: 5,
                            FinallPrice: 522500,
                            Image: 'Images/Products/252.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'انار طارم'
                                },
                                {
                                    ID: 2,
                                    Caption: 'غلیظ و به صرفه'
                                },
                                {
                                    ID: 2,
                                    Caption: 'رنگ سیاه'
                                }
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 150,
                            Available: true,
                            AvailableCount: 50,
                        },
                        {
                            ID: 3,
                            Name: 'رب انار ترش و شیرین مخلوط درجه 1',
                            Price: 550000,
                            Discount: 5,
                            FinallPrice: 522500,
                            Image: 'Images/Products/253.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'انار طارم'
                                },
                                {
                                    ID: 2,
                                    Caption: 'غلیظ و به صرفه'
                                },
                                {
                                    ID: 2,
                                    Caption: 'رنگ سیاه'
                                }
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 150,
                            Available: true,
                            AvailableCount: 50,
                        },
                    ],
                    TotalCount: 3,
                },
                {
                    ID: 6,
                    Caption: 'ترشی جات',
                    ProductList: [
                        {
                            ID: 1,
                            Name: 'سیر ترشی درجه 1',
                            Price: 250000,
                            Discount: 5,
                            FinallPrice: 237500,
                            Image: 'Images/Products/261.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'سیر طارم'
                                },
                                {
                                    ID: 2,
                                    Caption: 'ترشی هفت ساله'
                                },
                                {
                                    ID: 2,
                                    Caption: 'رنگ سیاه'
                                }
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 150,
                            Available: true,
                            AvailableCount: 50,
                        },
                        {
                            ID: 2,
                            Name: 'سیر ترشی درجه 2',
                            Price: 220000,
                            Discount: 5,
                            FinallPrice: 209000,
                            Image: 'Images/Products/261.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'سیر طارم'
                                },
                                {
                                    ID: 2,
                                    Caption: 'ترشی شش ساله'
                                },
                                {
                                    ID: 2,
                                    Caption: 'رنگ سیاه'
                                }
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 150,
                            Available: true,
                            AvailableCount: 50,
                        },
                        {
                            ID: 3,
                            Name: 'سیر ترشی درجه 3',
                            Price: 200000,
                            Discount: 0,
                            FinallPrice: 200000,
                            Image: 'Images/Products/261.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'سیر طارم'
                                },
                                {
                                    ID: 2,
                                    Caption: 'ترشی پنج ساله'
                                },
                                {
                                    ID: 2,
                                    Caption: 'رنگ سیاه'
                                }
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 150,
                            Available: true,
                            AvailableCount: 50,
                        },
                        {
                            ID: 4,
                            Name: 'سیر ترشی درجه 4',
                            Price: 190000,
                            Discount: 0,
                            FinallPrice: 190000,
                            Image: 'Images/Products/261.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'سیر طارم'
                                },
                                {
                                    ID: 2,
                                    Caption: 'ترشی چهار ساله'
                                },
                                {
                                    ID: 2,
                                    Caption: 'رنگ سیاه'
                                }
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 150,
                            Available: true,
                            AvailableCount: 50,
                        },
                        {
                            ID: 5,
                            Name: 'سیر ترشی درجه 5',
                            Price: 180000,
                            Discount: 5,
                            FinallPrice: 180000,
                            Image: 'Images/Products/261.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'سیر طارم'
                                },
                                {
                                    ID: 2,
                                    Caption: 'ترشی سه ساله'
                                },
                                {
                                    ID: 2,
                                    Caption: 'رنگ سیاه'
                                }
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 150,
                            Available: true,
                            AvailableCount: 50,
                        },
                        {
                            ID: 6,
                            Name: 'سیر ترشی درجه 6',
                            Price: 170000,
                            Discount: 5,
                            FinallPrice: 170000,
                            Image: 'Images/Products/262.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'سیر طارم'
                                },
                                {
                                    ID: 2,
                                    Caption: 'ترشی دو ساله'
                                },
                                {
                                    ID: 2,
                                    Caption: 'رنگ سفید'
                                }
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 150,
                            Available: true,
                            AvailableCount: 50,
                        },
                        {
                            ID: 7,
                            Name: 'سیر ترشی درجه 7',
                            Price: 150000,
                            Discount: 0,
                            FinallPrice: 150000,
                            Image: 'Images/Products/262.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'سیر طارم'
                                },
                                {
                                    ID: 2,
                                    Caption: 'ترشی هفت ساله'
                                },
                                {
                                    ID: 2,
                                    Caption: 'رنگ سفید'
                                }
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 150,
                            Available: true,
                            AvailableCount: 50,
                        },
                    ],
                    TotalCount: 7,
                },
            ],
            Image: 'Images/Company/2.jpg',
        },
        {
            ID: 1,
            ProductCount: 10,
            Name: 'فروشگاه عطر محمد',
            IntroductionSummary: 'ارائه رایحه های اصیل و ماندگار از عطرها و برندهای معتبر جهان',
            lastUpdate: '15',
            Options: [
                {
                    ID: 1,
                    Caption: 'تخفیف های ویژه'
                },
                {
                    ID: 3,
                    Caption: 'ارسال رایگان'
                },
            ],
            Link: '',
            //این ایتم برای تست ایجاد شده و نیازی به ایجاد از وب سرویس ندارد
            // هنگام ارسال به صفحه فروشگاه از سرویس فراخوانی می شود
            ProductMenu: [
                {
                    ID: 1,
                    Caption: 'عطر و ادوکلن',
                    ProductList: [
                        {
                            ID: 1,
                            Name: 'ادو پرفیوم میسون فرانسیس کورکجان مدل Baccarat Rouge 540 حجم 200 میلی لیتر',
                            Price: 58000000,
                            Discount: 0,
                            FinallPrice: 58000000,
                            Image: 'Images/Products/111.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'حجم 200 میلی لیتر'
                                },
                                {
                                    ID: 2,
                                    Caption: 'نوع رایحه : تند گرم'
                                },
                                {
                                    ID: 3,
                                    Caption: 'ساختار رایحه : چوب صمغ گیاهان معطر'
                                },
                                {
                                    ID: 4,
                                    Caption: 'ادو پرفیوم میسون فرانسیس کورکجان مدل Baccarat Rouge 540، عطری خاص است که در سال 2015 توسط طراح مشهور عطر فرانسیس کورکجان برای استفاده آقایان و خانمها خلق شد. این عطر دارای رایحه ای گرم و تند میباشد. ماندگاری بالا و خط بوی ویژه این عطر برای استفاده در روزها و شبهای سرد و خنک انتخابی ویژه است.'
                                }
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 150,
                            Available: true,
                            AvailableCount: 5,
                        },
                        {
                            ID: 2,
                            Name: 'ادو پرفیوم کرید مدل Royal Mayfair حجم 120 میلی لیتر',
                            Price: 49000000,
                            Discount: 5,
                            FinallPrice: 46550000,
                            Image: 'Images/Products/112.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'حجم 120 میلی لیتر'
                                },
                                {
                                    ID: 2,
                                    Caption: 'نوع رایحه : تلخ گرم'
                                },
                                {
                                    ID: 3,
                                    Caption: 'ساختار رایحه : مرکبات گل میوه گیاهان معطر چوب'
                                },
                                {
                                    ID: 4,
                                    Caption: 'یکی از عطرهای گلی و میوه‌ای «کرید» (Creed) در سال 2015 ساخته شده است. این ادو پرفیوم که برای استفاده‌ی مشترک آقایان و بانوان ساخته شده «Royal Mayfair» نام دارد. Royal Mayfair یکی از شاهکارهای عطرساز برجسته و کاربلد «اولیویه کرید» (Olivier Creed) به‌حساب می‌آید. این عطر بوی خنکی دارد و برای استفاده در تمامی فصول سال به‌ویژه‌ بهار و تابستان پیشنهاد می‌شود. بطری Royal Mayfair خیلی ساده و درعین‌حال شیک طراحی شده است. روی بطری Royal Mayfair نشان تجاری کرید و نام Royal Mayfair را مشاهده می‌کنید. مایع درون بطری به رنگ طلایی است و از روی شیشه‌ی شفاف آن دیده می‌شود. درپوش طلایی بطری به‌خوبی طرح کلی Royal Mayfair را کامل می‌کند. شیشه بسیار خوش‌دست بوده و به‌راحتی در دست آقایان و بانوان جا می‌شود. پس از اسپری کردن Royal Mayfair روی پوست و محل نبضتان متوجه بوی لیموترش و درخت کاج خواهید شد. این ترکیب طبیعی و شیرین، انرژی و تازگی را در شما بیشتر می‌کند. پس از مدتی، این نت‌ها جای خود را به نت‌های میانی خواهند داد. نت‌های میانی از ترکیب گل رز ساخته می‌شوند. بوی شیرین این نت‌‌‌های گلی، انرژی مثبت و طراوت را در شما ایجاد می‌کند. در ادامه و با گذشت مدت‌زمانی طولانی، نت‌های پایانی از راه رسیده و جای نت‌های میانی را می‌گیرند. این نت‌ها از پرتقال، چوب سدر و اوکالیپتوس تشکیل شده‌اند. پس از استشمام بوی این نت‌ها، اعتمادبه‌نفس بالایی خواهید داشت. خرید عطر کرید Royal Mayfair با توجه به بوی خنک، پخش بوی قوی، ماندگاری بالا، بطری خاص و زیبا، قابلیت استفاده برای آقایان و بانوان، حجم 120 میلی‌لیتری و برند شناخته‌شده و ارزشمندش برای شما و کسی که این عطر را از شما هدیه می‌گیرد بسیار به‌صرفه خواهد بود.'
                                },
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 70,
                            Available: true,
                            AvailableCount: 5,

                        },
                        {
                            ID: 3,
                            Name: 'ادو پرفیوم زنانه میسون فرانسیس کورکجان مدل A La Rose حجم 200 میلی لیتر',
                            Price: 47400000,
                            Discount: 10,
                            FinallPrice: 42660000,
                            Image: 'Images/Products/113.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'حجم 200 میلی لیتر'
                                },
                                {
                                    ID: 2,
                                    Caption: 'نوع رایحه : شیرین گل'
                                },
                                {
                                    ID: 3,
                                    Caption: 'ساختار رایحه : چوب مرکبات گیاهان معطر گل'
                                },
                                {
                                    ID: 3,
                                    Caption: 'ادو پرفیوم زنانه فرانسیس کورکجان مدل A La Rose، عطری است ملایم و شیرین. این عطر در سال ۲۰۱۴ به بازار عطر و ادکلن عرضه شد. این ادوپرفیوم عطری است زنانه و رمانتیک که برای خانم های شیک پوش و سخت پسند که همواره به دنبال بهترین ها هستند طراحی شده است.'
                                },
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 15,
                            Available: true,
                            AvailableCount: 5,
                        },
                        {
                            ID: 4,
                            Name: 'پرفیوم میسون فرانسیس کورکجان مدل Baccarat Rouge 540 Extrait de Parfum حجم 70 میلی لیتر',
                            Price: 44649000,
                            Discount: 0,
                            FinallPrice: 44649000,
                            Image: 'Images/Products/114.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'حجم 70 میلی لیتر'
                                },
                                {
                                    ID: 2,
                                    Caption: 'نوع رایحه : شیرین گرم شرقی'
                                },
                                {
                                    ID: 3,
                                    Caption: 'ساختار رایحه : چوب صمغ گیاهان معطر'
                                },
                                {
                                    ID: 3,
                                    Caption: 'میسون فرانسیس کورکجان مدل Baccarat Rouge 540، پرفیومی خالص است که در سال 2017 توسط طراح مشهور عطر فرانسیس کورکجان خلق شد. این عطر دارای رایحه ای شیرین و شرقی میباشد. ماندگاری بالا و خط بوی ویژه این عطر از نقاط برجسته آن میباشد. این عطر برای استفاده آقایان و خانمها طراحی شده است.'
                                },
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 15,
                            Available: true,
                            AvailableCount: 5,
                        },
                        {
                            ID: 5,
                            Name: 'ادو پرفیوم کرید مدل Royal Oud حجم 120 میلی لیتر',
                            Price: 43500000,
                            Discount: 10,
                            FinallPrice: 39150000,
                            Image: 'Images/Products/115.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'حجم 120 میلی لیتر'
                                },
                                {
                                    ID: 2,
                                    Caption: 'نوع رایحه : تلخ گرم'
                                },
                                {
                                    ID: 3,
                                    Caption: 'ساختار رایحه : مرکبات میوه گیاهان معطر خاک و زمین ادویه چوب'
                                },
                                {
                                    ID: 3,
                                    Caption: 'آیا شما جزو افرادی هستید که علاوه بر بوی عطر به اعتبار برند و همچنین طراحی شیشه‌ی آن اهمیت ویژه‌ای می‌دهند؟ اگر چنین است، بدون شک نام برند معتبر و معروف «کرید» (Creed) را شنیده‌اید. یکی از تولیدات ویژه‌ی کرید که در سال 2011 در کشور فرانسه ساخته شد، «رویال عود» (Royal Oud) نام دارد. یکی از مهم‌ترین ویژگی این عطر، قابلیت استفاده‌ی آن برای آقایان و بانوان است. عطرساز معروفی به نام «Olivier Creed Sixth Generation» کار طراحی و فرمولاسیون این ادو پرفیوم را انجام داده است. همان‌طور که از نام این عطر پیداست، با استفاده از آن حال و هوای حضور در قصرهای سلطنتی و مجلل را خواهید داشت. پس بی‌دلیل نیست که افراد مشهوری مثل بازیگران هالیوود، خانواده‌های سلطنتی و ورزشکاران نامی در سراسر دنیا از مشتریان پر و پا قرص محصولات کرید هستند. با نگاهی به شیشه‌ی کرید، طراحی آن شکوه و عظمت کاخ‌های سلطنتی و مهمانی‌های مجلل قدیمی را برای شما تداعی می‌کند. در بطری به رنگ مشکی به‌خوبی با شیشه‌ی آن هماهنگی دارد. مایع درون شیشه به رنگ طلایی روشن است و به‌وضوح از روی بطری شفاف رویال عود قابل‌مشاهده است. اگر کمی با دقت به شیشه دقت کنید، نشان تجاری کرید با حروف درشت و طلایی‌رنگ به‌خوبی قابل‌مشاهده است. به محض اسپری این عطر روی محل نبض یا لباس خود، بوی لیمو، فلفل صورتی و نارنج به سرعت در هوا پخش می‌شود. تندی عجیب و قوی این ترکیب، شما و اطرافیانتان را کاملاً متوجه خودش خواهد کرد. پس از مدتی بوی سدر، گیاه مفید باریجه و گلپر نام‌آشنا، جایگزین نت‌های قبلی خواهد شد. خنکی این ترکیب سه‌گانه حس آرامش و شادی ویژه‌ای را به شما می‌بخشد. این نت‌های میانی تا مدت زیادی قابل استشمام خواهند بود. پس از این شاهد تأثیر عناصری همچون چوب عود، چوب صندل و مشک خواهید بود. این نت‌ها علاوه بر حفظ طراوت و خنکی نت‌های قبلی با وجود مشک انرژی خاصی را ایجاد می‌کنند. برند کرید از سال 1760 توسط آقای «اولیویر کرید» (Olivier Creed) در کشور فرانسه و در شهر پاریس تاسیس شد. یکی از ویژگی‌های مهم در ساخت عطرهای کرید به کار رفتن مواد طبیعی و استفاده از روش‌های سنتی در هنگام تقطیر آن‌هاست.'
                                },
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 15,
                            Available: true,
                            AvailableCount: 5,
                        },
                    ],
                    TotalCount: 50,
                },
                {
                    ID: 2,
                    Caption: 'اسپری',
                    ProductList: [
                        {
                            ID: 1,
                            Name: 'بادی اسپلش زنانه ویکتوریا سکرت مدل Eau so party حجم 250 میلی لیتر',
                            Price: 2450000,
                            Discount: 0,
                            FinallPrice: 2450000,
                            Image: 'Images/Products/121.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'حجم 250 میلی لیتر'
                                },
                                {
                                    ID: 2,
                                    Caption: 'نوع : اسپری معمولی'
                                },
                                {
                                    ID: 3,
                                    Caption: 'طبع : گرم'
                                }
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 150,
                            Available: true,
                            AvailableCount: 5,
                        },
                        {
                            ID: 2,
                            Name: 'بادی اسپلش زنانه ویکتوریا سکرت مدل Scandalous حجم 250 میلی لیتر',
                            Price: 2450000,
                            Discount: 0,
                            FinallPrice: 2450000,
                            Image: 'Images/Products/122.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'حجم 250 میلی لیتر'
                                },
                                {
                                    ID: 2,
                                    Caption: 'نوع : اسپری معمولی'
                                },
                                {
                                    ID: 3,
                                    Caption: 'طبع : معتدل'
                                }
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 150,
                            Available: true,
                            AvailableCount: 5,
                        },
                        {
                            ID: 3,
                            Name: 'بادی اسپلش زنانه ویکتوریا سکرت مدل Eau so حجم 250 میلی لیتر',
                            Price: 2450000,
                            Discount: 0,
                            FinallPrice: 2450000,
                            Image: 'Images/Products/123.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'حجم 250 میلی لیتر'
                                },
                                {
                                    ID: 2,
                                    Caption: 'نوع : اسپری معمولی'
                                },
                                {
                                    ID: 3,
                                    Caption: 'طبع : خنک'
                                }
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 150,
                            Available: true,
                            AvailableCount: 5,
                        },
                        {
                            ID: 4,
                            Name: 'بادی اسپلش زنانه ویکتوریا سکرت مدل Tease حجم 250 میلی لیتر',
                            Price: 2450000,
                            Discount: 0,
                            FinallPrice: 2450000,
                            Image: 'Images/Products/124.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'حجم 250 میلی لیتر'
                                },
                                {
                                    ID: 2,
                                    Caption: 'نوع : اسپری معمولی'
                                },
                                {
                                    ID: 3,
                                    Caption: 'طبع : خنک'
                                }
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 150,
                            Available: true,
                            AvailableCount: 5,
                        },
                        {
                            ID: 5,
                            Name: 'بادی اسپلش ویکتوریا سکرت مدل Xo victoria حجم 250 میلی لیتر',
                            Price: 2450000,
                            Discount: 0,
                            FinallPrice: 2450000,
                            Image: 'Images/Products/125.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'حجم 250 میلی لیتر'
                                },
                                {
                                    ID: 2,
                                    Caption: 'نوع : اسپری معمولی'
                                },
                                {
                                    ID: 3,
                                    Caption: 'طبع : معتدل'
                                }
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 150,
                            Available: true,
                            AvailableCount: 5,
                        },
                    ],
                    TotalCount: 56,
                },
            ],
            Image: 'Images/Company/1.jpg',
        },
        {
            ID: 2,
            ProductCount: 27,
            Name: 'فروشگاه طارم آنلاین',
            IntroductionSummary:
                'اولین و معتبرترین فروشگاه آنلاین مصولات اورگانیک شامل انواع زیتون ، روغن زیتون، رب انار ترش و شیرین ملس، سیر ترشی، رب گوجه خانگی .',
            lastUpdate: '25',
            Options: [
                {
                    ID: 1,
                    Caption: 'مدت محدود'
                },
                {
                    ID: 2,
                    Caption: 'ارسال رایگان'
                },
                {
                    ID: 3,
                    Caption: 'ضمانت برگشت کالا'
                },
            ],
            Link: '',
            //این ایتم برای تست ایجاد شده و نیازی به ایجاد از وب سرویس ندارد
            // هنگام ارسال به صفحه فروشگاه از سرویس فراخوانی می شود
            ProductMenu: [
                {
                    ID: 1,
                    Caption: 'زیتون شکسته',
                    ProductList: [
                        {
                            ID: 1,
                            Name: 'زیتون شکسته درجه 1',
                            Price: 180000,
                            Discount: 5,
                            FinallPrice: 171000,
                            Image: 'Images/Products/211.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'زیتون طارم'
                                },
                                {
                                    ID: 2,
                                    Caption: 'گوشتی و روغنی'
                                }
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 150,
                            Available: true,
                            AvailableCount: 50,
                        },
                        {
                            ID: 2,
                            Name: 'زیتون شکسته درجه 2',
                            Price: 160000,
                            Discount: 0,
                            FinallPrice: 160000,
                            Image: 'Images/Products/212.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'زیتون طارم'
                                },
                                {
                                    ID: 2,
                                    Caption: 'گوشتی و روغنی'
                                }
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 150,
                            Available: true,
                            AvailableCount: 50,
                        },
                        {
                            ID: 3,
                            Name: 'زیتون شکسته درجه 3',
                            Price: 140000,
                            Discount: 0,
                            FinallPrice: 140000,
                            Image: 'Images/Products/213.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'زیتون طارم'
                                },
                                {
                                    ID: 2,
                                    Caption: 'گوشتی و روغنی'
                                }
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 150,
                            Available: true,
                            AvailableCount: 50,
                        },
                        {
                            ID: 4,
                            Name: 'زیتون شکسته درجه 4',
                            Price: 120000,
                            Discount: 0,
                            FinallPrice: 120000,
                            Image: 'Images/Products/214.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'زیتون طارم'
                                },
                                {
                                    ID: 2,
                                    Caption: 'گوشتی و روغنی'
                                }
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 150,
                            Available: true,
                            AvailableCount: 50,
                        },
                        {
                            ID: 5,
                            Name: 'زیتون شکسته درجه 5',
                            Price: 100000,
                            Discount: 0,
                            FinallPrice: 100000,
                            Image: 'Images/Products/215.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'زیتون طارم'
                                },
                                {
                                    ID: 2,
                                    Caption: 'گوشتی و روغنی'
                                }
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 150,
                            Available: true,
                            AvailableCount: 50,
                        },
                    ],
                    TotalCount: 5,
                },
                {
                    ID: 2,
                    Caption: 'زیتون کنسروی',
                    ProductList: [
                        {
                            ID: 1,
                            Name: 'زیتون کنسروی درجه 1',
                            Price: 180000,
                            Discount: 5,
                            FinallPrice: 171000,
                            Image: 'Images/Products/221.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'زیتون طارم'
                                },
                                {
                                    ID: 2,
                                    Caption: 'گوشتی و روغنی'
                                }
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 150,
                            Available: true,
                            AvailableCount: 50,
                        },
                        {
                            ID: 2,
                            Name: 'زیتون کنسروی درجه 2',
                            Price: 160000,
                            Discount: 0,
                            FinallPrice: 160000,
                            Image: 'Images/Products/222.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'زیتون طارم'
                                },
                                {
                                    ID: 2,
                                    Caption: 'گوشتی و روغنی'
                                }
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 150,
                            Available: true,
                            AvailableCount: 50,
                        },
                        {
                            ID: 3,
                            Name: 'زیتون کنسروی درجه 3',
                            Price: 140000,
                            Discount: 0,
                            FinallPrice: 140000,
                            Image: 'Images/Products/223.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'زیتون طارم'
                                },
                                {
                                    ID: 2,
                                    Caption: 'گوشتی و روغنی'
                                }
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 150,
                            Available: true,
                            AvailableCount: 50,
                        },
                        {
                            ID: 4,
                            Name: 'زیتون کنسروی درجه 4',
                            Price: 120000,
                            Discount: 0,
                            FinallPrice: 120000,
                            Image: 'Images/Products/224.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'زیتون طارم'
                                },
                                {
                                    ID: 2,
                                    Caption: 'گوشتی و روغنی'
                                }
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 150,
                            Available: true,
                            AvailableCount: 50,
                        },
                        {
                            ID: 5,
                            Name: 'زیتون کنسروی درجه 5',
                            Price: 100000,
                            Discount: 0,
                            FinallPrice: 100000,
                            Image: 'Images/Products/225.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'زیتون طارم'
                                },
                                {
                                    ID: 2,
                                    Caption: 'گوشتی و روغنی'
                                }
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 150,
                            Available: true,
                            AvailableCount: 50,
                        },
                    ],
                    TotalCount: 5,
                },
                {
                    ID: 3,
                    Caption: 'زیتون پرورده',
                    ProductList: [
                        {
                            ID: 1,
                            Name: 'زیتون پرورده درجه 1',
                            Price: 280000,
                            Discount: 5,
                            FinallPrice: 266000,
                            Image: 'Images/Products/231.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'زیتون طارم'
                                },
                                {
                                    ID: 2,
                                    Caption: 'گوشتی و روغنی'
                                }
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 150,
                            Available: true,
                            AvailableCount: 50,
                        },
                        {
                            ID: 2,
                            Name: 'زیتون پرورده درجه 2',
                            Price: 160000,
                            Discount: 0,
                            FinallPrice: 160000,
                            Image: 'Images/Products/232.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'زیتون طارم'
                                },
                                {
                                    ID: 2,
                                    Caption: 'گوشتی و روغنی'
                                }
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 150,
                            Available: true,
                            AvailableCount: 50,
                        },
                        {
                            ID: 3,
                            Name: 'زیتون پرورده درجه 3',
                            Price: 140000,
                            Discount: 0,
                            FinallPrice: 140000,
                            Image: 'Images/Products/233.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'زیتون طارم'
                                },
                                {
                                    ID: 2,
                                    Caption: 'گوشتی و روغنی'
                                }
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 150,
                            Available: true,
                            AvailableCount: 50,
                        },
                        {
                            ID: 4,
                            Name: 'زیتون پرورده درجه 4',
                            Price: 120000,
                            Discount: 0,
                            FinallPrice: 120000,
                            Image: 'Images/Products/234.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'زیتون طارم'
                                },
                                {
                                    ID: 2,
                                    Caption: 'گوشتی و روغنی'
                                }
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 150,
                            Available: true,
                            AvailableCount: 50,
                        },
                        {
                            ID: 5,
                            Name: 'زیتون پرورده درجه 5',
                            Price: 100000,
                            Discount: 0,
                            FinallPrice: 100000,
                            Image: 'Images/Products/235.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'زیتون طارم'
                                },
                                {
                                    ID: 2,
                                    Caption: 'گوشتی و روغنی'
                                }
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 150,
                            Available: true,
                            AvailableCount: 50,
                        },
                    ],
                    TotalCount: 5,
                },
                {
                    ID: 4,
                    Caption: 'روغن زیتون',
                    ProductList: [
                        {
                            ID: 1,
                            Name: 'روغن زیتون درجه 1',
                            Price: 750000,
                            Discount: 5,
                            FinallPrice: 712500,
                            Image: 'Images/Products/241.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'زیتون طارم'
                                },
                                {
                                    ID: 2,
                                    Caption: 'روغن زیتون ماری'
                                },
                                {
                                    ID: 3,
                                    Caption: 'رنگ زرد'
                                }
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 150,
                            Available: true,
                            AvailableCount: 50,
                        },
                        {
                            ID: 2,
                            Name: 'روغن زیتون درجه 1',
                            Price: 750000,
                            Discount: 5,
                            FinallPrice: 712500,
                            Image: 'Images/Products/242.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'زیتون طارم'
                                },
                                {
                                    ID: 2,
                                    Caption: 'رنگ سبز'
                                }
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 150,
                            Available: true,
                            AvailableCount: 50,
                        }
                    ],
                    TotalCount: 2,
                },
                {
                    ID: 5,
                    Caption: 'رب انار',
                    ProductList: [
                        {
                            ID: 1,
                            Name: 'رب انار شیرین درجه 1',
                            Price: 550000,
                            Discount: 5,
                            FinallPrice: 522500,
                            Image: 'Images/Products/251.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'انار طارم'
                                },
                                {
                                    ID: 2,
                                    Caption: 'غلیظ و به صرفه'
                                },
                                {
                                    ID: 2,
                                    Caption: 'رنگ سیاه'
                                }
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 150,
                            Available: true,
                            AvailableCount: 50,
                        },
                        {
                            ID: 2,
                            Name: 'رب انار ترش درجه 1',
                            Price: 550000,
                            Discount: 5,
                            FinallPrice: 522500,
                            Image: 'Images/Products/252.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'انار طارم'
                                },
                                {
                                    ID: 2,
                                    Caption: 'غلیظ و به صرفه'
                                },
                                {
                                    ID: 2,
                                    Caption: 'رنگ سیاه'
                                }
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 150,
                            Available: true,
                            AvailableCount: 50,
                        },
                        {
                            ID: 3,
                            Name: 'رب انار ترش و شیرین مخلوط درجه 1',
                            Price: 550000,
                            Discount: 5,
                            FinallPrice: 522500,
                            Image: 'Images/Products/253.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'انار طارم'
                                },
                                {
                                    ID: 2,
                                    Caption: 'غلیظ و به صرفه'
                                },
                                {
                                    ID: 2,
                                    Caption: 'رنگ سیاه'
                                }
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 150,
                            Available: true,
                            AvailableCount: 50,
                        },
                    ],
                    TotalCount: 3,
                },
                {
                    ID: 6,
                    Caption: 'ترشی جات',
                    ProductList: [
                        {
                            ID: 1,
                            Name: 'سیر ترشی درجه 1',
                            Price: 250000,
                            Discount: 5,
                            FinallPrice: 237500,
                            Image: 'Images/Products/261.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'سیر طارم'
                                },
                                {
                                    ID: 2,
                                    Caption: 'ترشی هفت ساله'
                                },
                                {
                                    ID: 2,
                                    Caption: 'رنگ سیاه'
                                }
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 150,
                            Available: true,
                            AvailableCount: 50,
                        },
                        {
                            ID: 2,
                            Name: 'سیر ترشی درجه 2',
                            Price: 220000,
                            Discount: 5,
                            FinallPrice: 209000,
                            Image: 'Images/Products/261.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'سیر طارم'
                                },
                                {
                                    ID: 2,
                                    Caption: 'ترشی شش ساله'
                                },
                                {
                                    ID: 2,
                                    Caption: 'رنگ سیاه'
                                }
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 150,
                            Available: true,
                            AvailableCount: 50,
                        },
                        {
                            ID: 3,
                            Name: 'سیر ترشی درجه 3',
                            Price: 200000,
                            Discount: 0,
                            FinallPrice: 200000,
                            Image: 'Images/Products/261.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'سیر طارم'
                                },
                                {
                                    ID: 2,
                                    Caption: 'ترشی پنج ساله'
                                },
                                {
                                    ID: 2,
                                    Caption: 'رنگ سیاه'
                                }
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 150,
                            Available: true,
                            AvailableCount: 50,
                        },
                        {
                            ID: 4,
                            Name: 'سیر ترشی درجه 4',
                            Price: 190000,
                            Discount: 0,
                            FinallPrice: 190000,
                            Image: 'Images/Products/261.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'سیر طارم'
                                },
                                {
                                    ID: 2,
                                    Caption: 'ترشی چهار ساله'
                                },
                                {
                                    ID: 2,
                                    Caption: 'رنگ سیاه'
                                }
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 150,
                            Available: true,
                            AvailableCount: 50,
                        },
                        {
                            ID: 5,
                            Name: 'سیر ترشی درجه 5',
                            Price: 180000,
                            Discount: 5,
                            FinallPrice: 180000,
                            Image: 'Images/Products/261.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'سیر طارم'
                                },
                                {
                                    ID: 2,
                                    Caption: 'ترشی سه ساله'
                                },
                                {
                                    ID: 2,
                                    Caption: 'رنگ سیاه'
                                }
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 150,
                            Available: true,
                            AvailableCount: 50,
                        },
                        {
                            ID: 6,
                            Name: 'سیر ترشی درجه 6',
                            Price: 170000,
                            Discount: 5,
                            FinallPrice: 170000,
                            Image: 'Images/Products/262.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'سیر طارم'
                                },
                                {
                                    ID: 2,
                                    Caption: 'ترشی دو ساله'
                                },
                                {
                                    ID: 2,
                                    Caption: 'رنگ سفید'
                                }
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 150,
                            Available: true,
                            AvailableCount: 50,
                        },
                        {
                            ID: 7,
                            Name: 'سیر ترشی درجه 7',
                            Price: 150000,
                            Discount: 0,
                            FinallPrice: 150000,
                            Image: 'Images/Products/262.jpg',
                            Options: [
                                {
                                    ID: 1,
                                    Caption: 'سیر طارم'
                                },
                                {
                                    ID: 2,
                                    Caption: 'ترشی هفت ساله'
                                },
                                {
                                    ID: 2,
                                    Caption: 'رنگ سفید'
                                }
                            ],
                            LastUpdate: '2019-05-12',
                            VisitsCount: 150,
                            Available: true,
                            AvailableCount: 50,
                        },
                    ],
                    TotalCount: 7,
                },
            ],
            Image: 'Images/Company/2.jpg',
        }
    ];

    $scope.ProductMenu = [
        //{
        //    ID: 1,
        //    Caption: 'عطر و ادوکلن',
        //    ProductList: [
        //        {
        //            ID: 1,
        //            Name: 'ادو پرفیوم میسون فرانسیس کورکجان مدل Baccarat Rouge 540 حجم 200 میلی لیتر',
        //            Price: 58000000,
        //            Discount: 0,
        //            FinallPrice: 58000000,
        //            Image: 'Images/Products/111.jpg',
        //            Options: [
        //                {
        //                    ID: 1,
        //                    Caption: 'حجم 200 میلی لیتر'
        //                },
        //                {
        //                    ID: 2,
        //                    Caption: 'نوع رایحه : تند گرم'
        //                },
        //                {
        //                    ID: 3,
        //                    Caption: 'ساختار رایحه : چوب صمغ گیاهان معطر'
        //                },
        //                {
        //                    ID: 4,
        //                    Caption: 'ادو پرفیوم میسون فرانسیس کورکجان مدل Baccarat Rouge 540، عطری خاص است که در سال 2015 توسط طراح مشهور عطر فرانسیس کورکجان برای استفاده آقایان و خانمها خلق شد. این عطر دارای رایحه ای گرم و تند میباشد. ماندگاری بالا و خط بوی ویژه این عطر برای استفاده در روزها و شبهای سرد و خنک انتخابی ویژه است.'
        //                }
        //            ],
        //            LastUpdate: '2019-05-12',
        //            VisitsCount: 150,
        //            Available: true,
        //            AvailableCount: 5,
        //        },
        //        {
        //            ID: 2,
        //            Name: 'ادو پرفیوم کرید مدل Royal Mayfair حجم 120 میلی لیتر',
        //            Price: 49000000,
        //            Discount: 5,
        //            FinallPrice: 46550000,
        //            Image: 'Images/Products/112.jpg',
        //            Options: [
        //                {
        //                    ID: 1,
        //                    Caption: 'حجم 120 میلی لیتر'
        //                },
        //                {
        //                    ID: 2,
        //                    Caption: 'نوع رایحه : تلخ گرم'
        //                },
        //                {
        //                    ID: 3,
        //                    Caption: 'ساختار رایحه : مرکبات گل میوه گیاهان معطر چوب'
        //                },
        //                {
        //                    ID: 4,
        //                    Caption: 'یکی از عطرهای گلی و میوه‌ای «کرید» (Creed) در سال 2015 ساخته شده است. این ادو پرفیوم که برای استفاده‌ی مشترک آقایان و بانوان ساخته شده «Royal Mayfair» نام دارد. Royal Mayfair یکی از شاهکارهای عطرساز برجسته و کاربلد «اولیویه کرید» (Olivier Creed) به‌حساب می‌آید. این عطر بوی خنکی دارد و برای استفاده در تمامی فصول سال به‌ویژه‌ بهار و تابستان پیشنهاد می‌شود. بطری Royal Mayfair خیلی ساده و درعین‌حال شیک طراحی شده است. روی بطری Royal Mayfair نشان تجاری کرید و نام Royal Mayfair را مشاهده می‌کنید. مایع درون بطری به رنگ طلایی است و از روی شیشه‌ی شفاف آن دیده می‌شود. درپوش طلایی بطری به‌خوبی طرح کلی Royal Mayfair را کامل می‌کند. شیشه بسیار خوش‌دست بوده و به‌راحتی در دست آقایان و بانوان جا می‌شود. پس از اسپری کردن Royal Mayfair روی پوست و محل نبضتان متوجه بوی لیموترش و درخت کاج خواهید شد. این ترکیب طبیعی و شیرین، انرژی و تازگی را در شما بیشتر می‌کند. پس از مدتی، این نت‌ها جای خود را به نت‌های میانی خواهند داد. نت‌های میانی از ترکیب گل رز ساخته می‌شوند. بوی شیرین این نت‌‌‌های گلی، انرژی مثبت و طراوت را در شما ایجاد می‌کند. در ادامه و با گذشت مدت‌زمانی طولانی، نت‌های پایانی از راه رسیده و جای نت‌های میانی را می‌گیرند. این نت‌ها از پرتقال، چوب سدر و اوکالیپتوس تشکیل شده‌اند. پس از استشمام بوی این نت‌ها، اعتمادبه‌نفس بالایی خواهید داشت. خرید عطر کرید Royal Mayfair با توجه به بوی خنک، پخش بوی قوی، ماندگاری بالا، بطری خاص و زیبا، قابلیت استفاده برای آقایان و بانوان، حجم 120 میلی‌لیتری و برند شناخته‌شده و ارزشمندش برای شما و کسی که این عطر را از شما هدیه می‌گیرد بسیار به‌صرفه خواهد بود.'
        //                },
        //            ],
        //            LastUpdate: '2019-05-12',
        //            VisitsCount: 70,
        //            Available: true,
        //            AvailableCount: 5,

        //        },
        //        {
        //            ID: 3,
        //            Name: 'ادو پرفیوم زنانه میسون فرانسیس کورکجان مدل A La Rose حجم 200 میلی لیتر',
        //            Price: 47400000,
        //            Discount: 10,
        //            FinallPrice: 42660000,
        //            Image: 'Images/Products/113.jpg',
        //            Options: [
        //                {
        //                    ID: 1,
        //                    Caption: 'حجم 200 میلی لیتر'
        //                },
        //                {
        //                    ID: 2,
        //                    Caption: 'نوع رایحه : شیرین گل'
        //                },
        //                {
        //                    ID: 3,
        //                    Caption: 'ساختار رایحه : چوب مرکبات گیاهان معطر گل'
        //                },
        //                {
        //                    ID: 3,
        //                    Caption: 'ادو پرفیوم زنانه فرانسیس کورکجان مدل A La Rose، عطری است ملایم و شیرین. این عطر در سال ۲۰۱۴ به بازار عطر و ادکلن عرضه شد. این ادوپرفیوم عطری است زنانه و رمانتیک که برای خانم های شیک پوش و سخت پسند که همواره به دنبال بهترین ها هستند طراحی شده است.'
        //                },
        //            ],
        //            LastUpdate: '2019-05-12',
        //            VisitsCount: 15,
        //            Available: true,
        //            AvailableCount: 5,
        //        },
        //        {
        //            ID: 4,
        //            Name: 'پرفیوم میسون فرانسیس کورکجان مدل Baccarat Rouge 540 Extrait de Parfum حجم 70 میلی لیتر',
        //            Price: 44649000,
        //            Discount: 0,
        //            FinallPrice: 44649000,
        //            Image: 'Images/Products/114.jpg',
        //            Options: [
        //                {
        //                    ID: 1,
        //                    Caption: 'حجم 70 میلی لیتر'
        //                },
        //                {
        //                    ID: 2,
        //                    Caption: 'نوع رایحه : شیرین گرم شرقی'
        //                },
        //                {
        //                    ID: 3,
        //                    Caption: 'ساختار رایحه : چوب صمغ گیاهان معطر'
        //                },
        //                {
        //                    ID: 3,
        //                    Caption: 'میسون فرانسیس کورکجان مدل Baccarat Rouge 540، پرفیومی خالص است که در سال 2017 توسط طراح مشهور عطر فرانسیس کورکجان خلق شد. این عطر دارای رایحه ای شیرین و شرقی میباشد. ماندگاری بالا و خط بوی ویژه این عطر از نقاط برجسته آن میباشد. این عطر برای استفاده آقایان و خانمها طراحی شده است.'
        //                },
        //            ],
        //            LastUpdate: '2019-05-12',
        //            VisitsCount: 15,
        //            Available: true,
        //            AvailableCount: 5,
        //        },
        //        {
        //            ID: 5,
        //            Name: 'ادو پرفیوم کرید مدل Royal Oud حجم 120 میلی لیتر',
        //            Price: 43500000,
        //            Discount: 10,
        //            FinallPrice: 39150000,
        //            Image: 'Images/Products/115.jpg',
        //            Options: [
        //                {
        //                    ID: 1,
        //                    Caption: 'حجم 120 میلی لیتر'
        //                },
        //                {
        //                    ID: 2,
        //                    Caption: 'نوع رایحه : تلخ گرم'
        //                },
        //                {
        //                    ID: 3,
        //                    Caption: 'ساختار رایحه : مرکبات میوه گیاهان معطر خاک و زمین ادویه چوب'
        //                },
        //                {
        //                    ID: 3,
        //                    Caption: 'آیا شما جزو افرادی هستید که علاوه بر بوی عطر به اعتبار برند و همچنین طراحی شیشه‌ی آن اهمیت ویژه‌ای می‌دهند؟ اگر چنین است، بدون شک نام برند معتبر و معروف «کرید» (Creed) را شنیده‌اید. یکی از تولیدات ویژه‌ی کرید که در سال 2011 در کشور فرانسه ساخته شد، «رویال عود» (Royal Oud) نام دارد. یکی از مهم‌ترین ویژگی این عطر، قابلیت استفاده‌ی آن برای آقایان و بانوان است. عطرساز معروفی به نام «Olivier Creed Sixth Generation» کار طراحی و فرمولاسیون این ادو پرفیوم را انجام داده است. همان‌طور که از نام این عطر پیداست، با استفاده از آن حال و هوای حضور در قصرهای سلطنتی و مجلل را خواهید داشت. پس بی‌دلیل نیست که افراد مشهوری مثل بازیگران هالیوود، خانواده‌های سلطنتی و ورزشکاران نامی در سراسر دنیا از مشتریان پر و پا قرص محصولات کرید هستند. با نگاهی به شیشه‌ی کرید، طراحی آن شکوه و عظمت کاخ‌های سلطنتی و مهمانی‌های مجلل قدیمی را برای شما تداعی می‌کند. در بطری به رنگ مشکی به‌خوبی با شیشه‌ی آن هماهنگی دارد. مایع درون شیشه به رنگ طلایی روشن است و به‌وضوح از روی بطری شفاف رویال عود قابل‌مشاهده است. اگر کمی با دقت به شیشه دقت کنید، نشان تجاری کرید با حروف درشت و طلایی‌رنگ به‌خوبی قابل‌مشاهده است. به محض اسپری این عطر روی محل نبض یا لباس خود، بوی لیمو، فلفل صورتی و نارنج به سرعت در هوا پخش می‌شود. تندی عجیب و قوی این ترکیب، شما و اطرافیانتان را کاملاً متوجه خودش خواهد کرد. پس از مدتی بوی سدر، گیاه مفید باریجه و گلپر نام‌آشنا، جایگزین نت‌های قبلی خواهد شد. خنکی این ترکیب سه‌گانه حس آرامش و شادی ویژه‌ای را به شما می‌بخشد. این نت‌های میانی تا مدت زیادی قابل استشمام خواهند بود. پس از این شاهد تأثیر عناصری همچون چوب عود، چوب صندل و مشک خواهید بود. این نت‌ها علاوه بر حفظ طراوت و خنکی نت‌های قبلی با وجود مشک انرژی خاصی را ایجاد می‌کنند. برند کرید از سال 1760 توسط آقای «اولیویر کرید» (Olivier Creed) در کشور فرانسه و در شهر پاریس تاسیس شد. یکی از ویژگی‌های مهم در ساخت عطرهای کرید به کار رفتن مواد طبیعی و استفاده از روش‌های سنتی در هنگام تقطیر آن‌هاست.'
        //                },
        //            ],
        //            LastUpdate: '2019-05-12',
        //            VisitsCount: 15,
        //            Available: true,
        //            AvailableCount: 5,
        //        }
        //    ],
        //    TotalCount: 50
        //},
        //{
        //    ID: 2,
        //    Caption: 'اسپری',
        //    ProductList: [
        //        {
        //            ID: 1,
        //            Name: 'بادی اسپلش زنانه ویکتوریا سکرت مدل Eau so party حجم 250 میلی لیتر',
        //            Price: 2450000,
        //            Discount: 0,
        //            FinallPrice: 2450000,
        //            Image: 'Images/Products/121.jpg',
        //            Options: [
        //                {
        //                    ID: 1,
        //                    Caption: 'حجم 250 میلی لیتر'
        //                },
        //                {
        //                    ID: 2,
        //                    Caption: 'نوع : اسپری معمولی'
        //                },
        //                {
        //                    ID: 3,
        //                    Caption: 'طبع : گرم'
        //                }
        //            ],
        //            LastUpdate: '2019-05-12',
        //            VisitsCount: 150,
        //            Available: true,
        //            AvailableCount: 5,
        //        },
        //        {
        //            ID: 2,
        //            Name: 'بادی اسپلش زنانه ویکتوریا سکرت مدل Scandalous حجم 250 میلی لیتر',
        //            Price: 2450000,
        //            Discount: 0,
        //            FinallPrice: 2450000,
        //            Image: 'Images/Products/122.jpg',
        //            Options: [
        //                {
        //                    ID: 1,
        //                    Caption: 'حجم 250 میلی لیتر'
        //                },
        //                {
        //                    ID: 2,
        //                    Caption: 'نوع : اسپری معمولی'
        //                },
        //                {
        //                    ID: 3,
        //                    Caption: 'طبع : معتدل'
        //                }
        //            ],
        //            LastUpdate: '2019-05-12',
        //            VisitsCount: 150,
        //            Available: true,
        //            AvailableCount: 5,
        //        },
        //        {
        //            ID: 3,
        //            Name: 'بادی اسپلش زنانه ویکتوریا سکرت مدل Eau so حجم 250 میلی لیتر',
        //            Price: 2450000,
        //            Discount: 0,
        //            FinallPrice: 2450000,
        //            Image: 'Images/Products/123.jpg',
        //            Options: [
        //                {
        //                    ID: 1,
        //                    Caption: 'حجم 250 میلی لیتر'
        //                },
        //                {
        //                    ID: 2,
        //                    Caption: 'نوع : اسپری معمولی'
        //                },
        //                {
        //                    ID: 3,
        //                    Caption: 'طبع : خنک'
        //                }
        //            ],
        //            LastUpdate: '2019-05-12',
        //            VisitsCount: 150,
        //            Available: true,
        //            AvailableCount: 5,
        //        },
        //        {
        //            ID: 4,
        //            Name: 'بادی اسپلش زنانه ویکتوریا سکرت مدل Tease حجم 250 میلی لیتر',
        //            Price: 2450000,
        //            Discount: 0,
        //            FinallPrice: 2450000,
        //            Image: 'Images/Products/124.jpg',
        //            Options: [
        //                {
        //                    ID: 1,
        //                    Caption: 'حجم 250 میلی لیتر'
        //                },
        //                {
        //                    ID: 2,
        //                    Caption: 'نوع : اسپری معمولی'
        //                },
        //                {
        //                    ID: 3,
        //                    Caption: 'طبع : خنک'
        //                }
        //            ],
        //            LastUpdate: '2019-05-12',
        //            VisitsCount: 150,
        //            Available: true,
        //            AvailableCount: 5,
        //        },
        //        {
        //            ID: 5,
        //            Name: 'بادی اسپلش ویکتوریا سکرت مدل Xo victoria حجم 250 میلی لیتر',
        //            Price: 2450000,
        //            Discount: 0,
        //            FinallPrice: 2450000,
        //            Image: 'Images/Products/125.jpg',
        //            Options: [
        //                {
        //                    ID: 1,
        //                    Caption: 'حجم 250 میلی لیتر'
        //                },
        //                {
        //                    ID: 2,
        //                    Caption: 'نوع : اسپری معمولی'
        //                },
        //                {
        //                    ID: 3,
        //                    Caption: 'طبع : معتدل'
        //                }
        //            ],
        //            LastUpdate: '2019-05-12',
        //            VisitsCount: 150,
        //            Available: true,
        //            AvailableCount: 5,
        //        },
        //    ],
        //    TotalCount: 56
        //},
        //{
        //    ID: 3,
        //    Caption: 'انواع لنز',
        //    ProductList: [
        //        {
        //            ID: 2,
        //            Name: 'عینک آفتابی RayBan 3576N 1537V',
        //            Price: 25790000,
        //            Discount: 25,
        //            FinallPrice: 19342500,
        //            Image: 'Images/Slids/Brands/2.png',
        //            Options: [
        //                {
        //                    ID: 1,
        //                    Caption: 'ساخت کشور ایتالیا'
        //                },
        //                {
        //                    ID: 2,
        //                    Caption: 'سبک کلاسیک، با معرفی Blaze'
        //                },
        //                {
        //                    ID: 3,
        //                    Caption: 'لنز Sharp Onesie! Ray-Ban'
        //                },
        //                {
        //                    ID: 4,
        //                    Caption: 'مناسب برای صورت های بیضی و گرد شکل'
        //                },
        //            ],
        //            LastUpdate: '2017-12-01',
        //            VisitsCount: 150,
        //            Available: true,
        //            AvailableCount: 5,
        //        },
        //        {
        //            ID: 1,
        //            Name: 'عینک آفتابی RayBan 3581N 90387J',
        //            Price: 25790000,
        //            Discount: 10,
        //            FinallPrice: 23211000,
        //            Image: 'Images/Slids/Brands/8.jpg',
        //            Options: [
        //                {
        //                    ID: 1,
        //                    Caption: 'ساخت کشور ایتالیا'
        //                },
        //                {
        //                    ID: 2,
        //                    Caption: 'لنزهای تمام تخت با تکنولوژی جدید Blaze'
        //                },
        //                {
        //                    ID: 3,
        //                    Caption: 'زیبایی و ترکیبی فراتر از انتظار'
        //                },
        //                {
        //                    ID: 4,
        //                    Caption: 'مناسب صورت های بیضی قلبی، گرد و مربع شکل'
        //                },
        //            ],
        //            LastUpdate: '2018-01-20',
        //            VisitsCount: 70,
        //            Available: false,
        //            AvailableCount: 0,

        //        },
        //        {
        //            ID: 3,
        //            Name: 'عینک آفتابی RayBan RB3540 9002A6 56',
        //            Price: 23460000,
        //            Discount: 20,
        //            FinallPrice: 18768000,
        //            Image: 'Images/Slids/Brands/6.jpg',
        //            Options: [
        //                {
        //                    ID: 1,
        //                    Caption: 'ساخت کشور ایتالیا'
        //                },
        //                {
        //                    ID: 2,
        //                    Caption: 'مناسب برای صورت‌های مربع و بیضی‌شکل'
        //                },
        //                {
        //                    ID: 3,
        //                    Caption: 'بسیار بادوام و مستحکم'
        //                },
        //            ],
        //            LastUpdate: '2017-12-05',
        //            VisitsCount: 15,
        //            Available: true,
        //            AvailableCount: 5,
        //        },
        //        {
        //            ID: 6,
        //            Name: 'عینک آفتابی RayBan RB3540 9002A6 56',
        //            Price: 23460000,
        //            Discount: 0,
        //            FinallPrice: 23460000,
        //            Image:
        //                'Images/Slids/Brands/7.png',
        //            Options: [
        //                {
        //                    ID: 1,
        //                    Caption: 'ساخت کشور ایتالیا'
        //                },
        //                {
        //                    ID: 2,
        //                    Caption: 'مناسب برای صورت‌های مربع و بیضی‌شکل'
        //                },
        //                {
        //                    ID: 3,
        //                    Caption: 'بسیار بادوام و مستحکم'
        //                },
        //            ],
        //            LastUpdate: '2018-10-15',
        //            VisitsCount: 51,
        //            Available: false,
        //            AvailableCount: 0,
        //        },
        //        {
        //            ID: 7,
        //            Name: 'عینک آفتابی RayBan 3581N 90387J',
        //            Price: 25790000,
        //            Discount: 0,
        //            FinallPrice: 25790000,
        //            Image: 'Images/Slids/Brands/4.jpg',
        //            Options: [
        //                {
        //                    ID: 1,
        //                    Caption: 'ساخت کشور ایتالیا'
        //                },
        //                {
        //                    ID: 2,
        //                    Caption: 'لنزهای تمام تخت با تکنولوژی جدید Blaze'
        //                },
        //                {
        //                    ID: 3,
        //                    Caption: 'زیبایی و ترکیبی فراتر از انتظار'
        //                },
        //                {
        //                    ID: 4,
        //                    Caption: 'مناسب صورت های بیضی قلبی، گرد و مربع شکل'
        //                },
        //            ],
        //            LastUpdate: '2019-02-08',
        //            VisitsCount: 7,
        //            Available: false,
        //            AvailableCount: 0,
        //        },
        //        {
        //            ID: 5,
        //            Name: 'عینک آفتابی RayBan 3576N 1537V',
        //            Price: 25790000,
        //            Discount: 0,
        //            FinallPrice: 25790000,
        //            Image: 'Images/Slids/Brands/5.png',
        //            Options: [
        //                {
        //                    ID: 1,
        //                    Caption: 'ساخت کشور ایتالیا'
        //                },
        //                {
        //                    ID: 2,
        //                    Caption: 'سبک کلاسیک، با معرفی Blaze'
        //                },
        //                {
        //                    ID: 3,
        //                    Caption: 'لنز Sharp Onesie! Ray-Ban'
        //                },
        //                {
        //                    ID: 4,
        //                    Caption: 'مناسب برای صورت های بیضی و گرد شکل'
        //                },
        //            ],
        //            LastUpdate: '2018-09-11',
        //            VisitsCount: 201,
        //            Available: true,
        //            AvailableCount: 5,
        //        },
        //        {
        //            ID: 9,
        //            Name: 'عینک آفتابی RayBan RB3540 9002A6 56',
        //            Price: 23460000,
        //            Discount: 0,
        //            FinallPrice: 23460000,
        //            Image: 'Images/Slids/Brands/1.png',
        //            Options: [
        //                {
        //                    ID: 1,
        //                    Caption: 'ساخت کشور ایتالیا'
        //                },
        //                {
        //                    ID: 2,
        //                    Caption: 'مناسب برای صورت‌های مربع و بیضی‌شکل'
        //                },
        //                {
        //                    ID: 3,
        //                    Caption: 'بسیار بادوام و مستحکم'
        //                },
        //            ],
        //            LastUpdate: '2018-11-27',
        //            VisitsCount: 71,
        //            Available: true,
        //            AvailableCount: 5,
        //        },
        //        {
        //            ID: 8,
        //            Name: 'عینک آفتابی RayBan 3576N 1537V',
        //            Price: 25790000,
        //            Discount: 0,
        //            FinallPrice: 25790000,
        //            Image: 'Images/Slids/Brands/3.png',
        //            Options: [
        //                {
        //                    ID: 1,
        //                    Caption: 'ساخت کشور ایتالیا'
        //                },
        //                {
        //                    ID: 2,
        //                    Caption: 'سبک کلاسیک، با معرفی Blaze'
        //                },
        //                {
        //                    ID: 3,
        //                    Caption: 'لنز Sharp Onesie! Ray-Ban'
        //                },
        //                {
        //                    ID: 4,
        //                    Caption: 'مناسب برای صورت های بیضی و گرد شکل'
        //                },
        //            ],
        //            LastUpdate: '2019-01-11',
        //            VisitsCount: 20,
        //            Available: true,
        //            AvailableCount: 5,
        //        },
        //        {
        //            ID: 4,
        //            Name: 'عینک آفتابی RayBan 3581N 90387J',
        //            Price: 25790000,
        //            Discount: 0,
        //            FinallPrice: 25790000,
        //            Image: 'Images/Slids/Brands/2.png',
        //            Options: [
        //                {
        //                    ID: 1,
        //                    Caption: 'ساخت کشور ایتالیا'
        //                },
        //                {
        //                    ID: 2,
        //                    Caption: 'لنزهای تمام تخت با تکنولوژی جدید Blaze'
        //                },
        //                {
        //                    ID: 3,
        //                    Caption: 'زیبایی و ترکیبی فراتر از انتظار'
        //                },
        //                {
        //                    ID: 4,
        //                    Caption: 'مناسب صورت های بیضی قلبی، گرد و مربع شکل'
        //                },
        //            ],
        //            LastUpdate: '2018-10-08',
        //            VisitsCount: 550,
        //            Available: true,
        //            AvailableCount: 5,
        //        },
        //    ],
        //    TotalCount: 50
        //},
        //{
        //    ID: 4,
        //    Caption: 'عینک های آفتابی',
        //    ProductList: [
        //        {
        //            ID: 3,
        //            Name: 'عینک آفتابی RayBan RB3540 9002A6 56',
        //            Price: 23460000,
        //            Discount: 0,
        //            FinallPrice: 23460000,
        //            Image: 'Images/Slids/Brands/6.jpg',
        //            Options: [
        //                {
        //                    ID: 1,
        //                    Caption: 'ساخت کشور ایتالیا'
        //                },
        //                {
        //                    ID: 2,
        //                    Caption: 'مناسب برای صورت‌های مربع و بیضی‌شکل'
        //                },
        //                {
        //                    ID: 3,
        //                    Caption: 'بسیار بادوام و مستحکم'
        //                },
        //            ],
        //            LastUpdate: '2017-12-05',
        //            VisitsCount: 15,
        //            Available: true,
        //            AvailableCount: 5,
        //        },
        //        {
        //            ID: 4,
        //            Name: 'عینک آفتابی RayBan 3581N 90387J',
        //            Price: 25790000,
        //            Discount: 0,
        //            FinallPrice: 25790000,
        //            Image: 'Images/Slids/Brands/2.png',
        //            Options: [
        //                {
        //                    ID: 1,
        //                    Caption: 'ساخت کشور ایتالیا'
        //                },
        //                {
        //                    ID: 2,
        //                    Caption: 'لنزهای تمام تخت با تکنولوژی جدید Blaze'
        //                },
        //                {
        //                    ID: 3,
        //                    Caption: 'زیبایی و ترکیبی فراتر از انتظار'
        //                },
        //                {
        //                    ID: 4,
        //                    Caption: 'مناسب صورت های بیضی قلبی، گرد و مربع شکل'
        //                },
        //            ],
        //            LastUpdate: '2018-10-08',
        //            VisitsCount: 550,
        //            Available: true,
        //            AvailableCount: 5,
        //        },
        //        {
        //            ID: 5,
        //            Name: 'عینک آفتابی RayBan 3576N 1537V',
        //            Price: 25790000,
        //            Discount: 0,
        //            FinallPrice: 25790000,
        //            Image: 'Images/Slids/Brands/5.png',
        //            Options: [
        //                {
        //                    ID: 1,
        //                    Caption: 'ساخت کشور ایتالیا'
        //                },
        //                {
        //                    ID: 2,
        //                    Caption: 'سبک کلاسیک، با معرفی Blaze'
        //                },
        //                {
        //                    ID: 3,
        //                    Caption: 'لنز Sharp Onesie! Ray-Ban'
        //                },
        //                {
        //                    ID: 4,
        //                    Caption: 'مناسب برای صورت های بیضی و گرد شکل'
        //                },
        //            ],
        //            LastUpdate: '2018-09-11',
        //            VisitsCount: 201,
        //            Available: true,
        //            AvailableCount: 5,
        //        },
        //        {
        //            ID: 8,
        //            Name: 'عینک آفتابی RayBan 3576N 1537V',
        //            Price: 25790000,
        //            Discount: 0,
        //            FinallPrice: 25790000,
        //            Image: 'Images/Slids/Brands/3.png',
        //            Options: [
        //                {
        //                    ID: 1,
        //                    Caption: 'ساخت کشور ایتالیا'
        //                },
        //                {
        //                    ID: 2,
        //                    Caption: 'سبک کلاسیک، با معرفی Blaze'
        //                },
        //                {
        //                    ID: 3,
        //                    Caption: 'لنز Sharp Onesie! Ray-Ban'
        //                },
        //                {
        //                    ID: 4,
        //                    Caption: 'مناسب برای صورت های بیضی و گرد شکل'
        //                },
        //            ],
        //            LastUpdate: '2019-01-11',
        //            VisitsCount: 20,
        //            Available: true,
        //            AvailableCount: 5,
        //        },
        //        {
        //            ID: 9,
        //            Name: 'عینک آفتابی RayBan RB3540 9002A6 56',
        //            Price: 23460000,
        //            Discount: 0,
        //            FinallPrice: 23460000,
        //            Image: 'Images/Slids/Brands/1.png',
        //            Options: [
        //                {
        //                    ID: 1,
        //                    Caption: 'ساخت کشور ایتالیا'
        //                },
        //                {
        //                    ID: 2,
        //                    Caption: 'مناسب برای صورت‌های مربع و بیضی‌شکل'
        //                },
        //                {
        //                    ID: 3,
        //                    Caption: 'بسیار بادوام و مستحکم'
        //                },
        //            ],
        //            LastUpdate: '2018-11-27',
        //            VisitsCount: 71,
        //            Available: true,
        //            AvailableCount: 5,
        //        },
        //        {
        //            ID: 7,
        //            Name: 'عینک آفتابی RayBan 3581N 90387J',
        //            Price: 25790000,
        //            Discount: 0,
        //            FinallPrice: 25790000,
        //            Image: 'Images/Slids/Brands/4.jpg',
        //            Options: [
        //                {
        //                    ID: 1,
        //                    Caption: 'ساخت کشور ایتالیا'
        //                },
        //                {
        //                    ID: 2,
        //                    Caption: 'لنزهای تمام تخت با تکنولوژی جدید Blaze'
        //                },
        //                {
        //                    ID: 3,
        //                    Caption: 'زیبایی و ترکیبی فراتر از انتظار'
        //                },
        //                {
        //                    ID: 4,
        //                    Caption: 'مناسب صورت های بیضی قلبی، گرد و مربع شکل'
        //                },
        //            ],
        //            LastUpdate: '2019-02-08',
        //            VisitsCount: 7,
        //            Available: true,
        //            AvailableCount: 5,
        //        },
        //        {
        //            ID: 2,
        //            Name: 'عینک آفتابی RayBan 3576N 1537V',
        //            Price: 25790000,
        //            Discount: 0,
        //            FinallPrice: 25790000,
        //            Image: 'Images/Slids/Brands/2.png',
        //            Options: [
        //                {
        //                    ID: 1,
        //                    Caption: 'ساخت کشور ایتالیا'
        //                },
        //                {
        //                    ID: 2,
        //                    Caption: 'سبک کلاسیک، با معرفی Blaze'
        //                },
        //                {
        //                    ID: 3,
        //                    Caption: 'لنز Sharp Onesie! Ray-Ban'
        //                },
        //                {
        //                    ID: 4,
        //                    Caption: 'مناسب برای صورت های بیضی و گرد شکل'
        //                },
        //            ],
        //            LastUpdate: '2017-12-01',
        //            VisitsCount: 150,
        //            Available: true,
        //            AvailableCount: 5,
        //        },
        //        {
        //            ID: 1,
        //            Name: 'عینک آفتابی RayBan 3581N 90387J',
        //            Price: 25790000,
        //            Discount: 0,
        //            FinallPrice: 25790000,
        //            Image: 'Images/Slids/Brands/8.jpg',
        //            Options: [
        //                {
        //                    ID: 1,
        //                    Caption: 'ساخت کشور ایتالیا'
        //                },
        //                {
        //                    ID: 2,
        //                    Caption: 'لنزهای تمام تخت با تکنولوژی جدید Blaze'
        //                },
        //                {
        //                    ID: 3,
        //                    Caption: 'زیبایی و ترکیبی فراتر از انتظار'
        //                },
        //                {
        //                    ID: 4,
        //                    Caption: 'مناسب صورت های بیضی قلبی، گرد و مربع شکل'
        //                },
        //            ],
        //            LastUpdate: '2018-01-20',
        //            VisitsCount: 70,
        //            Available: true,
        //            AvailableCount: 5,

        //        },
        //        {
        //            ID: 6,
        //            Name: 'عینک آفتابی RayBan RB3540 9002A6 56',
        //            Price: 23460000,
        //            Discount: 0,
        //            FinallPrice: 23460000,
        //            Image:
        //                'Images/Slids/Brands/7.png',
        //            Options: [
        //                {
        //                    ID: 1,
        //                    Caption: 'ساخت کشور ایتالیا'
        //                },
        //                {
        //                    ID: 2,
        //                    Caption: 'مناسب برای صورت‌های مربع و بیضی‌شکل'
        //                },
        //                {
        //                    ID: 3,
        //                    Caption: 'بسیار بادوام و مستحکم'
        //                },
        //            ],
        //            LastUpdate: '2018-10-15',
        //            VisitsCount: 51,
        //            Available: true,
        //            AvailableCount: 5,
        //        },
        //    ],
        //    TotalCount: 56
        //},
        {
            ID: 5,
            Caption: 'ضد عفونی کننده',
            ProductList: [
                {
                    ID: 501,
                    Name: 'ضدعفونی کننده 250',
                    Price: 0,
                    Discount: 0,
                    FinallPrice: 0,
                    Image: 'Images/Products/HS-250ML.JPG',
                    Options: [
                        {
                            ID: 1,
                            Caption: 'در حجم های مختلف مناسب برای مصارف شخصی و اماکن عمومی و ادارات'
                        },
                        {
                            ID: 2,
                            Caption: 'سازگار با انواع پوست های خشک و چرب'
                        },
                        {
                            ID: 3,
                            Caption: 'حجم 250 میلی لیتر'
                        }
                    ],
                    LastUpdate: '2018-01-20',
                    VisitsCount: 70,
                    Available: true,
                    AvailableCount: 5

                },
                {
                    ID: 502,
                    Name: 'ضدعفونی کننده 400',
                    StoreName: '',
                    Introduction: 'ضدعفونی کننده موثر و سریع بدون ترکیبات تحریک کننده پوست',
                    Price: 0,
                    Discount: 0,
                    FinallPrice: 0,
                    Image: 'Images/Products/HS-400ML.JPG',
                    Options: [
                        {
                            ID: 1,
                            Caption: 'بهره گیری از تکنولوژی نانو سیلور جهت ازبین برندگی ویروس ها'
                        },
                        {
                            ID: 2,
                            Caption: 'در حجم های مختلف مناسب برای مصارف شخصی و اماکن عمومی و ادارات'
                        },
                        {
                            ID: 3,
                            Caption: 'سازگار با انواع پوست های خشک و چرب'
                        },
                        {
                            ID: 4,
                            Caption: 'حجم 400 میلی لیتر'
                        }
                    ],
                    LastUpdate: '2018-10-15',
                    VisitsCount: 51,
                    Available: true,
                    AvailableCount: 5
                }
            ],
            TotalCount: 2
        }
    ];

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
                SourceAddress: 'Images/Slids/Brands/2.png',
                Active: true
            },
            {
                ID: 2,
                AlternateText: "Alternate Text",
                SourceAddress: 'Images/Slids/Brands/8.jpg',
                Active: false
            },
            {
                ID: 3,
                AlternateText: "Alternate Text",
                SourceAddress: 'Images/Slids/Brands/4.jpg',
                Active: false
            },
            {
                ID: 4,
                AlternateText: "Alternate Text",
                SourceAddress: 'Images/Slids/Brands/5.png',
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
        Quantity: 0
    };

    $scope.StoreSelectedProductMenu = $scope.ProductMenu[0];

    // Angular Directive


    // Agular Functions

    $scope.init = function () {


    };

    $scope.HomeMenuClick = function () {

        SetAllView(false);

        $scope.ViewStack = [];
        $scope.CurentView = [{ view: "HomeView" }];

        $scope.HomeView = true;
    };

    $scope.SpecialTabClick = function (item) {

        $scope.SpecialTab.forEach(t => t.Active = false);

        item.Active = true;
    };

    $scope.PolicyClick = function () {

        SetAllView(false);
        $scope.PolicyView = true;

        $scope.ViewStack.push($scope.CurentView);
        $scope.CurentView = [
            {
                view: "PolicyView"
            }];
    };

    $scope.ContactUsClick = function () {

        SetAllView(false);
        $scope.ContactUsView = true;

        $scope.ViewStack.push($scope.CurentView);
        $scope.CurentView = [
            {
                view: "ContactUsView"
            }];
    };

    $scope.AboutUsClick = function () {

        SetAllView(false);
        $scope.AboutUsView = true;

        $scope.ViewStack.push($scope.CurentView);
        $scope.CurentView = [
            {
                view: "AboutUsView"
            }];
    };

    $scope.ProductMenuClick = function (productMenuID) {

        SetAllView(false);

        var _item = $scope.ProductMenu.find(function (x) {
            return x.ID === productMenuID;
        });
        if (_item) {

            $scope.StoreSelectedProductMenu = _item;

            $scope.StoreView = true;
            $scope.StoreProductListView = true;

            $scope.ViewStack.push($scope.CurentView);

            $scope.CurentView = [
                {
                    view: "StoreView"
                },
                {
                    view: "StoreProductListView"
                }];
        }
    };

    $scope.StoreProductClick = function (productID) {

        SetAllView(false);

        var item = $scope.StoreSelectedProductMenu.ProductList.find(function (x) {
            return x.ID === productID;
        });
        if (item) {

            $scope.StoreProduct.ID = item.ID;
            $scope.StoreProduct.Name = item.Name;
            $scope.StoreProduct.Price = item.Price;
            $scope.StoreProduct.Discount = item.Discount;
            $scope.StoreProduct.Images = [{
                ID: 1,
                AlternateText: item.Name,
                SourceAddress: item.Image,
                Active: true
            }],
                $scope.StoreProduct.Options = item.Options;
            $scope.StoreProduct.FinallPrice = item.FinallPrice;
            $scope.StoreProduct.Available = item.Available;
            $scope.StoreProduct.AvailableCount = item.AvailableCount;

            $scope.StoreView = true;
            $scope.StoreProductView = true;

            $scope.ViewStack.push($scope.CurentView);
            $scope.CurentView = [
                {
                    view: "StoreView"
                },
                {
                    view: "StoreProductView"
                }];
        }
    };

    $scope.SpecialTabProductClick = function (categoryID, productID) {

        SetAllView(false);

        var category = $scope.ProductMenu.find(function (x) {
            return x.ID === categoryID;
        });

        if (category) {

            var item = category.ProductList.find(function (x) {
                return x.ID === productID;
            });
            if (item) {

                $scope.StoreProduct.ID = item.ID;
                $scope.StoreProduct.Name = item.Name;
                $scope.StoreProduct.Price = item.Price;
                $scope.StoreProduct.Discount = item.Discount;
                $scope.StoreProduct.FinallPrice = item.FinallPrice;
                $scope.StoreProduct.Options = item.Options;
                $scope.StoreProduct.Available = item.Available;
                $scope.StoreProduct.AvailableCount = item.AvailableCount;
                $scope.StoreProduct.Images = [
                    {
                        ID: 1,
                        AlternateText: item.Name,
                        SourceAddress: item.Image,
                        Active: true
                    }];

                $scope.StoreView = true;
                $scope.StoreProductView = true;

                $scope.ViewStack.push($scope.CurentView);
                $scope.CurentView = [
                    {
                        view: "StoreView"
                    },
                    {
                        view: "StoreProductView"
                    }];
            }
        }
    };

    $scope.PreviousViewClick = function () {
        var viewName = $scope.ViewStack.splice(-1, 1);
        $scope.CurentView = viewName[0];
        RenderView($scope.CurentView);
    };

    //

    // Private Finctions

    function SetAllView(isShow) {

        $scope.HomeView = isShow;
        $scope.GoBackView = isShow;
        $scope.PlaceSelectorView = isShow;
        $scope.StoresView = isShow;

        $scope.StoreView = isShow;
        $scope.HomeCompanyView = isShow;
        $scope.StoreProductListView = isShow;
        $scope.StoreAboutCompanyView = isShow;
        $scope.StoreContactCompanyView = isShow;
        $scope.StoreProductView = isShow;

        $scope.ProductsView = isShow;

        $scope.CartView = isShow;
        $scope.RegisterView = isShow;
        $scope.PaymentView = isShow;

        $scope.PolicyView = isShow;
        $scope.ContactUsView = isShow;
        $scope.AboutUsView = isShow;
        $scope.AdsView = isShow;
        $scope.ProblemView = isShow;

    }

    function SetModal(modalTitle, modalBody, buttons) {

        $scope.ModalContent.ModalTitle = modalTitle;
        $scope.ModalContent.ModalBody = modalBody;
        $scope.ModalContent.Buttons = buttons;
    }

    function CartTotalPrice() {

        var total = 0;
        angular.forEach($scope.Cart.Items,
            function (x) {
                total += x.Price * x.Quantity;
            });
        $scope.Cart.CartTotalPrice = total;
    }

    function CartTotalFinallPrice() {

        var totall = 0;
        angular.forEach($scope.Cart.Items,
            function (x) {
                totall += x.FinallPrice * x.Quantity;
            });
        $scope.Cart.CartTotalFinallPrice = totall;
    }

    function RenderView(viewNames) {

        SetAllView(false);

        viewNames.forEach(function (item) {

            switch (item.view) {

                case "HomeView":
                    $scope.HomeView = true;
                    break;

                case "StoreView":
                    $scope.StoreView = true;
                    break;

                case "StoreProductListView":
                    $scope.StoreProductListView = true;
                    break;

                case "StoreProductView":
                    $scope.StoreProductView = true;
                    break;

                case "AboutUsView":
                    $scope.AboutUsView = true;
                    break;

                case "PolicyView":
                    $scope.PolicyView = true;
                    break;

                case "ContactUsView":
                    $scope.ContactUsView = true;
                    break;

                default:

            }
        });

    }

    //




});

