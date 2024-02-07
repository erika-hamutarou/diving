jQuery(function($) { // この中であればWordpressでも「$」が使用可能になる


    //------------------------------------------------
    //  ハンバーガーメニューの設定
    //------------------------------------------------
    // // ハンバーガーメニューをクリック時、「三」マークから「✖️」マークに変形するアクション
    // $(".openbtn").click(function() {
    //     $(this).toggleClass('active');
    //     $('.nav__sp').fadeToggle(300);

    // });

    // //ハンバーガーメニューをクリック時、メニュー一覧を表示
    // $(".openbtn").click(function() {
    //     $(".nav__sp").toggleClass('is-active');
    // });


    // //ハンバーガーメニュー内のメニューをクリック時、メニュー一覧を閉じる
    // $(".nav__sp--menu, .nav__sp--subMenu").click(function() {
    //     $(".nav__sp").removeClass('is-active');
    //     $(".openbtn").removeClass('active');
    // });

    // ウィンドウがロードされたときとリサイズされたときに実行される関数
    function handleResize() {
        var windowWidth = $(window).width(); // 現在のウィンドウの幅を取得

        if (windowWidth >= 767) {
            $(".js-sp-nav").fadeOut(300); // 768px以上なら非表示にする
            $(".js-hamburger").removeClass('active'); // ハンバーガーアイコンからis-activeクラスを削除する
        }
    }
    // ウィンドウのロード時に実行
    $(document).ready(function() {
        handleResize(); // 関数を初回実行

        // ウィンドウのリサイズ時に実行
        $(window).resize(function() {
            handleResize(); // 関数を実行
        });


        $(".openbtn").click(function() {
            $(this).toggleClass('active');
            $('.nav__sp').fadeToggle(300);

            if ($(window).width() >= 768) {
                $('.nav__sp').removeClass('is-active');
            }
        });

        $(".openbtn").click(function() {
            $(".nav__sp").toggleClass('is-active');
        });

        $(".nav__sp a").click(function() {
            $(".nav__sp").removeClass('is-active');
            $(".openbtn").removeClass('active');
        });


        // ----------------------------------------------
        //  メインビジュアルのスライドショーの設定
        //------------------------------------------------
        //メインビジュアル スライダー
        var mainVisualSwiper = new Swiper('.js-mv-swiper', {
            loop: true,
            effect: 'fade',
            speed: 2500,
            // ループの時間
            slidesPerView: '4',
            allowTouchMove: false,
            // スワイプ無効
            autoplay: {
                delay: 500,
                // 途切れなくループ
                disableOnInteraction: false // 自動再生を止めない
            }
        });
        // ----------------------------------------------
        //  キャンペーンセクションのスライドショーの設定
        //------------------------------------------------
        var campaignSwiper = new Swiper('.js-swiper2', {
            loop: true,
            speed: 2000,
            slidesPerView: 'auto',
            disableOnInteraction: false,
            allowTouchMove: true,
            // スワイプ有効
            grabCursor: true,
            //スライドをつかむ仕草
            autoplay: {
                delay: 1500,
                disableOnInteraction: false
            },
            breakpoints: {
                768: {
                    spaceBetween: 40
                }
            },
            navigation: {
                nextEl: ".campaign__button--next",
                prevEl: ".campaign__button--prev",
                clickable: true
            }
        });

        //------------------------------------------------
        //  TOPへ戻るボタンの設定
        //------------------------------------------------

        $(function() {
            const toTopButton = $(".js-to-top");
            // let isAnimating = false;

            toTopButton.hide();

            $(window).scroll(function() {
                if ($(this).scrollTop() > 400) {
                    toTopButton.fadeIn();
                } else {
                    toTopButton.fadeOut();
                }
            });

            toTopButton.click(function() {
                $("body,html").animate({
                        scrollTop: 0,
                    },
                    500
                );
                return false;
            });

        });


        //------------------------------------------------
        //  画像のアニメーション
        //------------------------------------------------
        $(function() {
            var box = $('.js-colorbox');
            var speed = 700;

            box.each(function() {
                $(this).append('<div class="color"></div>');
                var color = $(this).find('.color'),
                    image = $(this).find('img');
                var executed = false;

                image.css('opacity', '0');
                color.css('width', '0%');

                color.inView().on('inview', function() {
                    if (!executed) {
                        $(this).delay(200).animate({
                            width: '100%'
                        }, speed, function() {
                            image.css('opacity', '1');
                            $(this).css({
                                left: '0',
                                right: 'auto'
                            });
                            $(this).animate({
                                width: '0%'
                            }, speed);
                        });
                        executed = true;
                    }
                });
            });
        });

    });
});