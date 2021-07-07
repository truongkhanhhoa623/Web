var app = angular.module('myapp', ["ngRoute"])

//Cấu hình định tuyến cho các trang đơn
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: "home.html",
            controller: "Home"
        })
        .when('/dangky', {
            templateUrl: "form_Valid.html",
            controller: "Valid"
        })
        .when("/dangnhap", {
            templateUrl: "form_Sign.html",
            controller: "Login"
        })
        .when("/giohang", {
            templateUrl: "giohang.html",
            controller: "giohang"
        })
        .when("/sanpham", {
            templateUrl: "sanpham/Info_Sanpham.html",
            controller: "sanpham"
        })
        .when("/outsp", {
            templateUrl: "sanpham/sanpham1.html",
            controller: "sanpham1"
        })
        .when("/muasp", {
            templateUrl: "sanpham/muasanpham.html",
            controller: "muasp"
        })
        .when('/blogs', {
            templateUrl: "blogs/blog.html"
        })
        .when('/blog1', {
            templateUrl: "blogs/blog_1.html"
        })
        .when("/dichvu", {
            templateUrl: "dichvu.html"
        })
        .when("/lienhe", {
            templateUrl: "lienhe.html"
        })
})
//Controler Simple Page Application------------------------------------------------------------------------
//Controller Form_Valid
app
    //-----------CheckBox----------------------
    .controller("Valid", function ($scope) {
        // Dữ liệu checkbox
        $scope.users = [
            { id: 1, name: "Yogesh singh" },
            { id: 2, name: "Sonarika Bhadoria" },
            { id: 3, name: "Vishal Sahu" },
            { id: 4, name: "Anil singh" }
        ];
        // Kiểm tra xem chọn chưa
        $scope.checkVal = function () {
            var check = false;
            var checkedUsers = '';
            $scope.users.forEach(function (user) {
                if (user.selected) {
                    if (checkedUsers != '') {
                        checkedUsers += " , ";
                    }
                    checkedUsers += user.name;
                    check = true;
                }
            });
            //Biến kiểm tra chọn hay không chọn
            $scope.check = check;
            //Biến đổ dữ liêu đã chọn
            $scope.result = checkedUsers;

        }

    })
    // -------Check NumberPhone------------------------
    .directive('evenNumber', function () {
        return {
            require: 'ngModel',
            link: function (scope, element, attr, mCtrl) {
                function myValidation(value) {
                    value = String(value)
                    if (value.length == 10) {
                        mCtrl.$setValidity('charE', true);
                    } else {
                        mCtrl.$setValidity('charE', false);
                    }
                    return value;
                }
                mCtrl.$parsers.push(myValidation);
            }
        };
    })
    //-----------Email----------------------------
    .directive('evenEmail', function () {
        return {
            require: 'ngModel',
            link: function (scope, element, attr, mCtrl) {
                function myValidation(value) {
                    var letters_email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    console.log(letters_email.test(String(value).toLowerCase()));
                    if (letters_email.test(String(value).toLowerCase())) {
                        mCtrl.$setValidity('charE', true);
                    } else {
                        mCtrl.$setValidity('charE', false);
                    }
                    return value;
                }
                mCtrl.$parsers.push(myValidation);
            }
        };
    })

    .controller("Login", function ($scope) {
        $scope.img = "/IMG/huong-dan-dieu-khien-flycam-cho-nguoi-moi-bat-dau-8.jpg"
    })
    .controller("Home", function ($scope, $rootScope) {
        $rootScope.search = "";
        $scope.img = "/IMG/huong-dan-dieu-khien-flycam-cho-nguoi-moi-bat-dau-8.jpg"

        $scope.productHome = [
            {
                id: 1,
                title: "Mavic Mini",
                link: "/HTML/sanpham/sanpham1.html",
                img: "/IMG/item_1.png",
            },
            {
                id: 2,
                title: "Mavic Air 2",
                link: "/HTML/sanpham/sanpham1.html",
                img: "/IMG/item_1.png",
            },
            {
                id: 3,
                title: "Mavic Platinum",
                link: "/HTML/sanpham/sanpham1.html",
                img: "/IMG/item_3.png",
            },
            {
                id: 4,
                title: "Mavic 2",
                link: "/HTML/sanpham/sanpham1.html",
                img: "/IMG/item_4.png",
            },
            {
                id: 5,
                title: "Phantom Series",
                link: "/HTML/sanpham/sanpham1.html",
                img: "/IMG/item_5.png",
            },
            {
                id: 6,
                title: "Inspire Series",
                link: "/HTML/sanpham/sanpham1.html",
                img: "/IMG/item_6.png",
            },
            {
                id: 7,
                title: "Matrice Series",
                link: "/HTML/sanpham/sanpham1.html",
                img: "/IMG/item_7.png",
            },
            {
                id: 8,
                title: "Robomaster",
                link: "/HTML/sanpham/sanpham1.html",
                img: "/IMG/item_8.png",
            },
            {
                id: 9,
                title: "Osmo/OM4",
                link: "/HTML/sanpham/sanpham1.html",
                img: "/IMG/item_9.png",
            },
            {
                id: 10,
                title: "Ronin/Handheld",
                link: "/HTML/sanpham/sanpham1.html",
                img: "/IMG/item_10.png"
            }
        ]
        $rootScope.productsData = [
            {
                id: 1,
                type: "Hot",
                title: "DJI 1-KRT",
                content: "(Camera 2k, Chống run, Độ Cao 800m)",
                content_out: `Khả năng bay
                Tốc độ của DJI FPV rất nhanh.
                Nó có 3 chế độ bay: Thường, Thể thao và Thủ công.Chế độ thường(N mode) khá giống với DJI Mavic, tốc độ nhanh nhất đạt 5okm / h.Chế độ này có cách sử dụng phù hợp với người mới bắt đầu.
                Chế độ thể thao(S mode) nâng cấp hơn, tăng tốc độ lên tới 100km / h.Chế độ này cũng kết hợp một vài yếu tố điều khiển thủ công trong khi vẫn chống rung và hạn chế góc xoay camera.
                Cuối cùng, chế độ thủ công(M mode) phù hợp với những cuộc đua nhất.Ở chế độ này, DJI FPV có thể đạt tốc độ 140km / h, và bạn có toàn quyền điều khiển.
                Nếu bạn đang cảm thấy mọi thứ vượt quá tầm tay, bạn có thể bấm nút Emergency Brake and Hover trên controller để dừng flycam và tự lơ lửng.
                Lưu ý đối với người dễ choáng: Nếu tạo những chuyển động quá đột ngột, bạn có thể cảm thấy hơi nôn nao vì trường nhìn của DJI FPV quá rộng và thực.`,
                price: 699,
                logo: "/IMG/lg.png",
                img_m: "/IMG/Mavic-Air-White-2-300x300.jpg",
                img_p: "/IMG/Mavic-Air-2（single）-300x300.jpg"
            },
            {
                id: 2,
                type: "Hot",
                title: "DJI 2-KRT",
                content: "(Camera 2k, Chống run, Độ Cao 800m)",
                content_out: `Khả năng bay
                Tốc độ của DJI FPV rất nhanh.
                Nó có 3 chế độ bay: Thường, Thể thao và Thủ công.Chế độ thường(N mode) khá giống với DJI Mavic, tốc độ nhanh nhất đạt 5okm / h.Chế độ này có cách sử dụng phù hợp với người mới bắt đầu.
                Chế độ thể thao(S mode) nâng cấp hơn, tăng tốc độ lên tới 100km / h.Chế độ này cũng kết hợp một vài yếu tố điều khiển thủ công trong khi vẫn chống rung và hạn chế góc xoay camera.
                Cuối cùng, chế độ thủ công(M mode) phù hợp với những cuộc đua nhất.Ở chế độ này, DJI FPV có thể đạt tốc độ 140km / h, và bạn có toàn quyền điều khiển.
                Nếu bạn đang cảm thấy mọi thứ vượt quá tầm tay, bạn có thể bấm nút Emergency Brake and Hover trên controller để dừng flycam và tự lơ lửng.
                Lưu ý đối với người dễ choáng: Nếu tạo những chuyển động quá đột ngột, bạn có thể cảm thấy hơi nôn nao vì trường nhìn của DJI FPV quá rộng và thực.`,
                price: 799,
                logo: "/IMG/lg.png",
                img_m: "/IMG//DJI-Mavic-Air-Fly-More-Combo-Onyx-Black-4-1-300x300.jpg",
                img_p: "/IMG/Mavic-Air-2（single）-300x300.jpg"
            },
            {
                id: 3,
                type: "New",
                title: "DJI 3-KRT",
                content: "(Camera 2k,, Độ Cao 800m)",
                content_out: `Khả năng bay
                Tốc độ của DJI FPV rất nhanh.
                Nó có 3 chế độ bay: Thường, Thể thao và Thủ công.Chế độ thường(N mode) khá giống với DJI Mavic, tốc độ nhanh nhất đạt 5okm / h.Chế độ này có cách sử dụng phù hợp với người mới bắt đầu.
                Chế độ thể thao(S mode) nâng cấp hơn, tăng tốc độ lên tới 100km / h.Chế độ này cũng kết hợp một vài yếu tố điều khiển thủ công trong khi vẫn chống rung và hạn chế góc xoay camera.
                Cuối cùng, chế độ thủ công(M mode) phù hợp với những cuộc đua nhất.Ở chế độ này, DJI FPV có thể đạt tốc độ 140km / h, và bạn có toàn quyền điều khiển.
                Nếu bạn đang cảm thấy mọi thứ vượt quá tầm tay, bạn có thể bấm nút Emergency Brake and Hover trên controller để dừng flycam và tự lơ lửng.
                Lưu ý đối với người dễ choáng: Nếu tạo những chuyển động quá đột ngột, bạn có thể cảm thấy hơi nôn nao vì trường nhìn của DJI FPV quá rộng và thực.`,
                price: 599,
                logo: "/IMG/lg.png",
                img_m: "/IMG/Mavic-Air-White-2-300x300.jpg",
                img_p: "/IMG/Mavic-Air-2（single）-300x300.jpg"
            },
            {
                id: 4,
                type: "New",
                title: "DJI 3-KRT",
                content: "(Camera 2k,, Độ Cao 800m)",
                content_out: `Khả năng bay
                Tốc độ của DJI FPV rất nhanh.
                Nó có 3 chế độ bay: Thường, Thể thao và Thủ công.Chế độ thường(N mode) khá giống với DJI Mavic, tốc độ nhanh nhất đạt 5okm / h.Chế độ này có cách sử dụng phù hợp với người mới bắt đầu.
                Chế độ thể thao(S mode) nâng cấp hơn, tăng tốc độ lên tới 100km / h.Chế độ này cũng kết hợp một vài yếu tố điều khiển thủ công trong khi vẫn chống rung và hạn chế góc xoay camera.
                Cuối cùng, chế độ thủ công(M mode) phù hợp với những cuộc đua nhất.Ở chế độ này, DJI FPV có thể đạt tốc độ 140km / h, và bạn có toàn quyền điều khiển.
                Nếu bạn đang cảm thấy mọi thứ vượt quá tầm tay, bạn có thể bấm nút Emergency Brake and Hover trên controller để dừng flycam và tự lơ lửng.
                Lưu ý đối với người dễ choáng: Nếu tạo những chuyển động quá đột ngột, bạn có thể cảm thấy hơi nôn nao vì trường nhìn của DJI FPV quá rộng và thực.`,
                price: 399,
                logo: "/IMG/lg.png",
                img_m: "/IMG/Mavic-Air-White-2-300x300.jpg",
                img_p: "/IMG/Mavic-Air-2（single）-300x300.jpg"
            },
            {
                id: 5,
                type: "New",
                title: "MAVIC MINI",
                content: " (Camera 4k, Tích hợp chống run quang học)",
                content_out: `Khả năng bay
                Tốc độ của DJI FPV rất nhanh.
                Nó có 3 chế độ bay: Thường, Thể thao và Thủ công.Chế độ thường(N mode) khá giống với DJI Mavic, tốc độ nhanh nhất đạt 5okm / h.Chế độ này có cách sử dụng phù hợp với người mới bắt đầu.
                Chế độ thể thao(S mode) nâng cấp hơn, tăng tốc độ lên tới 100km / h.Chế độ này cũng kết hợp một vài yếu tố điều khiển thủ công trong khi vẫn chống rung và hạn chế góc xoay camera.
                Cuối cùng, chế độ thủ công(M mode) phù hợp với những cuộc đua nhất.Ở chế độ này, DJI FPV có thể đạt tốc độ 140km / h, và bạn có toàn quyền điều khiển.
                Nếu bạn đang cảm thấy mọi thứ vượt quá tầm tay, bạn có thể bấm nút Emergency Brake and Hover trên controller để dừng flycam và tự lơ lửng.
                Lưu ý đối với người dễ choáng: Nếu tạo những chuyển động quá đột ngột, bạn có thể cảm thấy hơi nôn nao vì trường nhìn của DJI FPV quá rộng và thực.`,
                price: 699,
                logo: "/IMG/lg.png",
                img_m: "/IMG/Mavic-2-2-300x300.jpg",
                img_p: "/IMG/Mavic-Air-2（single）-300x300.jpg"
            },
            {
                id: 6,
                type: "Hot",
                title: "MAVIC RED",
                content: " (Camera 4k, Tích hợp chống run quang học)",
                content_out: `Khả năng bay
                Tốc độ của DJI FPV rất nhanh.
                Nó có 3 chế độ bay: Thường, Thể thao và Thủ công.Chế độ thường(N mode) khá giống với DJI Mavic, tốc độ nhanh nhất đạt 5okm / h.Chế độ này có cách sử dụng phù hợp với người mới bắt đầu.
                Chế độ thể thao(S mode) nâng cấp hơn, tăng tốc độ lên tới 100km / h.Chế độ này cũng kết hợp một vài yếu tố điều khiển thủ công trong khi vẫn chống rung và hạn chế góc xoay camera.
                Cuối cùng, chế độ thủ công(M mode) phù hợp với những cuộc đua nhất.Ở chế độ này, DJI FPV có thể đạt tốc độ 140km / h, và bạn có toàn quyền điều khiển.
                Nếu bạn đang cảm thấy mọi thứ vượt quá tầm tay, bạn có thể bấm nút Emergency Brake and Hover trên controller để dừng flycam và tự lơ lửng.
                Lưu ý đối với người dễ choáng: Nếu tạo những chuyển động quá đột ngột, bạn có thể cảm thấy hơi nôn nao vì trường nhìn của DJI FPV quá rộng và thực.`,
                price: 699,
                logo: "/IMG/lg.png",
                img_m: "/IMG//Drone-DJI-Phantom-4-RTK-300x300.jpg",
                img_p: "/IMG/Mavic-Air-2（single）-300x300.jpg"
            }
        ]
        $rootScope.products = $rootScope.productsData;
        $rootScope.cart = [];
        $rootScope.total = 0;

        $scope.addItemToCart = function (product) {

            if ($rootScope.cart.length === 0) {
                product.count = 1;
                $rootScope.cart.push(product);
            } else {
                var repeat = false;
                for (var i = 0; i < $rootScope.cart.length; i++) {
                    if ($rootScope.cart[i].id === product.id) {
                        repeat = true;
                        $rootScope.cart[i].count += 1;
                    }
                }
                if (!repeat) {
                    product.count = 1;
                    $rootScope.cart.push(product);
                }
            }
            $rootScope.total += parseFloat(product.price);
        };

        $rootScope.removeItemCart = function (product) {

            if (product.count > 1) {
                product.count -= 1;

            }
            else if (product.count === 1) {
                var index = $scope.cart.indexOf(product);
                $rootScope.cart.splice(index, 1);
            }
            $rootScope.total -= parseFloat(product.price);

        };
        // Trang san pham
        $rootScope.outsp = [];
        $rootScope.addSanpham = function (product) {
            $rootScope.outsp.push(product);
        };
        $rootScope.muasp = [];
        $rootScope.muaSanpham = function (product) {
            $rootScope.muasp.push(product);
        };
    })
    

app.controller('giohang', function ($scope, $rootScope) {

});
app.controller('sanpham', function ($scope) {

});
app.controller('sanpham1', function ($scope) {

});
app.controller('muasp', function ($scope) {
$scope.text  = "ddd"
})
