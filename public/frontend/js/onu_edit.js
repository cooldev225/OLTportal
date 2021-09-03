$(window).on('load', function () {});
function selectAction(i){
    $str=(new String('Reboot,Resync,Restore Default,Disable,Delete')).split(',');
    $('.dropdown-toggle.active-action span').html($str[i]);
}