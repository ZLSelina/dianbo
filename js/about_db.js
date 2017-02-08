/**
 * Created by win8 on 2016/1/19.
 */
function changein(obj) {
    $(obj).find('.test').toggleClass('hide1');
}
function changeout(obj) {
    $(obj).find('.test').slideUp();
}

function open5()
{
    $('.join_us_content').toggle();
}

function zp_return(){
    $('.join_us_content').hide();
}