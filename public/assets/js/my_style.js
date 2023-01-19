$(document).ready(function () {


    // 圖切換放大縮小

    $(".dmp_on").on("click", function () {

        $(this).toggleClass('Ding');

    });

    //測試




    $('#carousel_E_Next').click(function () {

        $(".carousel").promise().done(function () {
            $('#carousel_E_text').carousel('prev');
        });

    });

    $('#carousel_E_Previous').click(function () {

        $(".carousel").promise().done(function () {
            $('#carousel_E_text').carousel('next');

        });

    });





    //手機版-3房 2房 家配圖 切換 + 圖面置中
    // var B_v2_003_v = $("#B_v2_003_Sign_P").attr("src");
    // alert(B_v2_003_v);

    $("#B_v2_003_btn_01").on("click", function () {

        $("#B_v2_003_P").attr("src", "./images/B_v2_a1/B_v2_003/B_v2_003_01.png");
        $("#B_v2_003_Sign_P").attr("src", "./images/B_v2_a1/B_v2_003/B_v2_003_01_1.png");


    });

    $("#B_v2_003_btn_02").on("click", function () {

        $("#B_v2_003_P").attr("src", "./images/B_v2_a1/B_v2_003/B_v2_003_02.png");
        $("#B_v2_003_Sign_P").attr("src", "./images/B_v2_a1/B_v2_003/B_v2_003_02_2.png");

    });


    //B_v2_003 : Block : 輪播圖使用PNG透明，需用CSS transition 過場 來處理突兀效果。
    $(".carousel-item[name='B_v2_003']").css("transition", "1.5s");

    $(".carousel-item[name='J_carousel']").css("transition", "0.8s");


    // B: Block 圖置中
    var item = $(".selected");
    var container = $("#pan");
    var itemOffset = $("#pan").offset();
    var itemOffsetLeft = itemOffset.left + container.scrollLeft();
    var centerLeft = (container.width() - item.width()) / 2;
    container.scrollLeft((itemOffsetLeft - centerLeft));



    $("#g_btn_001").on("click", function () {
        $(".G_text_hs_01,.G_text_hs_02,.G_text_hs_03,.G_text_hs_04").removeClass("G_text_show");
        $(".G_text_hs_01").addClass("G_text_show");
    });

    $("#g_btn_002").on("click", function () {

        $(".G_text_hs_01,.G_text_hs_02,.G_text_hs_03,.G_text_hs_04").removeClass("G_text_show");
        $(".G_text_hs_02").addClass("G_text_show");

    });

    $("#g_btn_003").on("click", function () {

        $(".G_text_hs_01,.G_text_hs_02,.G_text_hs_03,.G_text_hs_04").removeClass("G_text_show");
        $(".G_text_hs_03").addClass("G_text_show");

    });

    $("#g_btn_004").on("click", function () {

        $(".G_text_hs_01,.G_text_hs_02,.G_text_hs_03,.G_text_hs_04").removeClass("G_text_show");
        $(".G_text_hs_04").addClass("G_text_show");

    });

    // 手機板

    $("#g_m_btn_001").on("click", function () {
        $(".G_text_hs_01,.G_text_hs_02,.G_text_hs_03,.G_text_hs_04").removeClass("G_text_show");
        $(".G_text_hs_01").addClass("G_text_show");
    });

    $("#g_m_btn_002").on("click", function () {

        $(".G_text_hs_01,.G_text_hs_02,.G_text_hs_03,.G_text_hs_04").removeClass("G_text_show");
        $(".G_text_hs_02").addClass("G_text_show");

    });

    $("#g_m_btn_003").on("click", function () {

        $(".G_text_hs_01,.G_text_hs_02,.G_text_hs_03,.G_text_hs_04").removeClass("G_text_show");
        $(".G_text_hs_03").addClass("G_text_show");

    });

    $("#g_m_btn_004").on("click", function () {

        $(".G_text_hs_01,.G_text_hs_02,.G_text_hs_03,.G_text_hs_04").removeClass("G_text_show");
        $(".G_text_hs_04").addClass("G_text_show");

    });


    // $("#formBox").attr("action", "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdlw1Ce0YJHUyXMB6hUd5ssRqLfVpuQxcK7GwfkiIeFwcKUnw/formResponse");


});