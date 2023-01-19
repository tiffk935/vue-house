document.getElementById("userPhone").pattern = "[0-9]{4}[0-9]{6}";
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                } else {
                    $(document).ready(function () {

                        // // 姓名
                        var inp_name = $('#userName').val() || '未填寫';
                        // // 電話
                        var inp_userPhone = $('#userPhone').val() || '未填寫';
                        // // 聯絡時間
                        var inp_linktime = $('#linkTime').val() || '未填寫';
                        // //廣告來源
                        // var inp_utm_source = $('#utm_Source').val() || '未填寫';
                        // //廣告媒介
                        // var inp_utm_medium = $('#utm_Medium').val() || '未填寫';
                        // //廣告內容
                        var inp_utm_campaign = $('#utm_Campaign').val() || '未填寫';
                        // // post
                        // var data = {
                        //     'entry.1532024543': inp_name,
                        //     'entry.1066421667': inp_userPhone,
                        //     'entry.1118561783': inp_linktime,
                        //     'entry.112455113': inp_utm_source,
                        //     'entry.431282793': inp_utm_medium,
                        //     'entry.283914542': inp_utm_campaign
                        // };

                        // $.ajax({
                        //     type: 'POST',
                        //     url: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSexHM5LxOdW08ADQtEqaWfx0jGudrGpYs0FoS7H6BjzQTR6jw/formResponse',
                        //     data: data,
                        //     contentType: 'application/json',
                        //     dataType: 'jsonp',
                        //     complete: function () {
                        //         // alert('資料已送出！');
                        //     }
                        // });

                        // $.post('https://script.google.com/macros/s/AKfycbz-wi0fTsHovvf7m2ES2EhzCp5-yLsZU4bErXkRy-YOIvRLDe4/exec', {
                        //     name: inp_name,
                        //     phone: inp_userPhone,
                        //     email: "大學墅off",
                        //     contacttime: inp_linktime,
                        //     select: inp_utm_campaign,

                        // });

                    });
                }

                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();