$(document).ready(function(){
    // Обрабатываю клик по timer_bar
    $('.timer_bar').click(
    function() {
        // Переключаю видимость timer_bar_slide
        $(this).find('.timer_bar_slide').toggle();
        // Присваиваю timer_bar'ам атрибут act=0, чтобы в дальнейшем была возможность знать текущий timer_bar
        $('.timer_bar').attr('act', '0');
        // Путём проверки состояния timer_bar_slide узнаю текущий (активный) ли timer_bar и, присваиваю соответсвующий атрибут
        if ($(this).find('.timer_bar_slide').css('display') == 'block') {$(this).attr('act','1');}
            else{$(this).attr('act','0');}
        // Скрываю не активные timer_bar_slide
        $('.timer_bar[act="0"] .timer_bar_slide').css('display', 'none');
        // Останов функции
        return false;
    });
    $(document).click(
    // Закрываю все timer_bar_slide при клике не по ним
    function() {
        $('.timer_bar').attr('act', '0');
        $('.timer_bar .timer_bar_slide').css('display', 'none');
    });

    $('.timer_bar_slide_row').click(                                                            //Что будет происходить с .timer_bar_slide_row при клике на неё
    function() {
        $(this).parents('.timer_bar').find('.timer_bar_text').text($(this).text());             //Текст именно этой строки будет передаваться в поле выбора
        $(this).parents('.timer_bar').attr('value', $(this).attr('value'));                     //Поправка на программера
        $(this).parents('.timer_bar_slide').find('.timer_bar_slide_row').removeClass('chosed'); //Оставляю выделенной текущую строчку
        $(this).addClass('chosed');
    });
});


/*
var temp = new Date ();
var a = new Date (2013, 3, 8, 20,0,0,0);
var b = new Date (temp.getYear(), temp.getMonth(), temp.getDay(), temp.getHours(), 0, 0, 0);

alert((b.getTime()-a.getTime())/(1000*60*60*24));*/