(function () {

    // Определение вызывающего элемента
    var getTriggerElement = function (el) {
        // Получаем атрибут `data-collapse`
        var isCollapse = el.getAttribute('data-collapse');
        // Если атрибут существует, то
        if (isCollapse !== null) {
            // Возвращаем элемент на котором осуществлен клик
            return el;
        } else {
            // Иначе пытаемся найти атрибут у его родителя
            var isParentCollapse = el.parentNode.getAttribute('data-collapse');
            // Возвращаем родительский элемент или undefined
            return (isParentCollapse !== null) ? el.parentNode : undefined;
        }
    };

    // Обработчик клика
    var collapseClickHandler = function (event) {
        // Определение вызывающего элемента
        var triggerEl = getTriggerElement(event.target);
        // Если у элемента и его родителя нет атрибута
        if (triggerEl === undefined) {
            // Отменяем действие
            return false;
        } else {
            event.preventDefault();
        }

        // Получаем целевой элемент
        var targetEl = document.querySelector(triggerEl.getAttribute('data-target'));
        // Если целевой элемент существует
        if (targetEl) {
            // Манипулируем классами
            triggerEl.classList.toggle('-active');
            targetEl.classList.toggle('-on');
        }
    };

    // Делегируем событие
    document.addEventListener('click', collapseClickHandler, false);

})(document, window);


$(document).ready(function () {
    var active = 'cont_1';

    $('.link').click(function (e) {
        e.preventDefault();
        var id = $(this).attr('href');
        $('.link').removeClass('activ');
        $(this).addClass('activ');

        $('#' + active).addClass('none');
        $('#' + id).removeClass('none');

        active = id;
    });


    jQuery("#gallery").unitegallery({
        tile_enable_shadow: false,
        tile_enable_border: false,
        tile_enable_outline: false,
        tiles_space_between_cols: 24,
        tiles_justified_space_between: 24,
        tile_border_width:0,
        // tiles_col_width:235,
        tile_border_radius: 20,
        tiles_type: "justified",
        tiles_col_width: 304,
        tiles_justified_row_height:304,
        tiles_set_initial_height:304
    });

    $('.benefits__number').spincrement({
        thousandSeparator: "",
        duration: 1200
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({scrollTop: 0}, 600);
        return false;
    });

    $("[data-tooltip]").mousemove(function (eventObject) {

        $data_tooltip = $(this).attr("data-tooltip");

        $("#tooltip").text($data_tooltip)
            .css({
                "top": eventObject.pageY + 5,
                "left": eventObject.pageX + 5
            })
            .show();

    }).mouseout(function () {

        $("#tooltip").hide()
            .text("")
            .css({
                "top": 0,
                "left": 0
            });
    });

    // Formdesigner - форма обратной связи
    (function (d, w, c) {
        (w[c] = w[c] || []).push({
            formId: 125808,
            host: "formdesigner.ru",
            formHeight: 100,
            el: "form_125808_1",
            center: 1
        });
        var s = d.createElement("script"), g = "getElementsByTagName";
        s.type = "text/javascript";
        s.charset = "UTF-8";
        s.async = true;
        s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//formdesigner.ru/js/iform.js";
        var h = d[g]("head")[0] || d[g]("body")[0];
        h.appendChild(s);
    })(document, window, "fdforms");

    //Formdesigner - заказать обратный звонок
    (function (d, w, c) {
        (w[c] = w[c] || []).push({
            formId: 125604,
            host: "formdesigner.ru",
            formHeight: 100,
            el: "form_125604_1",
            center: 1
        });
        var s = d.createElement("script"), g = "getElementsByTagName";
        s.type = "text/javascript";
        s.charset = "UTF-8";
        s.async = true;
        s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//formdesigner.ru/js/iform.js";
        var h = d[g]("head")[0] || d[g]("body")[0];
        h.appendChild(s);
    })(document, window, "fdforms");

    $('.benefit_carousel').slick({
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        useTransform: true,
        responsive:[
            {
                breakpoint: 1280,
                settings: {
                    centerMode: true,
                    focusOnSelect: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
        ]
});


});
