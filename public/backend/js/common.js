var KTAppSettings = {
    "breakpoints": {
        "sm": 576,
        "md": 768,
        "lg": 992,
        "xl": 1200,
        "xxl": 1400
    },
    "colors": {
        "theme": {
            "base": {
                "white": "#ffffff",
                "primary": "#3699FF",
                "secondary": "#E5EAEE",
                "success": "#1BC5BD",
                "info": "#8950FC",
                "warning": "#FFA800",
                "danger": "#F64E60",
                "light": "#E4E6EF",
                "dark": "#181C32"
            },
            "light": {
                "white": "#ffffff",
                "primary": "#E1F0FF",
                "secondary": "#EBEDF3",
                "success": "#C9F7F5",
                "info": "#EEE5FF",
                "warning": "#FFF4DE",
                "danger": "#FFE2E5",
                "light": "#F3F6F9",
                "dark": "#D6D6E0"
            },
            "inverse": {
                "white": "#ffffff",
                "primary": "#ffffff",
                "secondary": "#3F4254",
                "success": "#ffffff",
                "info": "#ffffff",
                "warning": "#ffffff",
                "danger": "#ffffff",
                "light": "#464E5F",
                "dark": "#ffffff"
            }
        },
        "gray": {
            "gray-100": "#F3F6F9",
            "gray-200": "#EBEDF3",
            "gray-300": "#E4E6EF",
            "gray-400": "#D1D3E0",
            "gray-500": "#B5B5C3",
            "gray-600": "#7E8299",
            "gray-700": "#5E6278",
            "gray-800": "#3F4254",
            "gray-900": "#181C32"
        }
    },
    "font-family": "Poppins"
};

function toggleFullScreen(elem) {
    // ## The below if statement seems to work better ## if ((document.fullScreenElement && document.fullScreenElement !== null) || (document.msfullscreenElement && document.msfullscreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)) {
    if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
        if (elem.requestFullScreen) {
            elem.requestFullScreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullScreen) {
            elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
}
function getJustDate(d){
    if(d==null||d=='null')return '';
    var date = new Date(d);
    return ((date.getDate() > 9) ? date.getDate()  : ('0' + date.getDate())) + '/' + ((date.getMonth() > 8) ? (date.getMonth()+1) : ('0' + (date.getMonth()+1))) ;//+ '/' + date.getFullYear();
}
function getJustDateWIthYear(d){
    if(d==null||d=='null')return '';
    var date = new Date(d);
    return ((date.getDate() > 9) ? date.getDate()  : ('0' + date.getDate())) + '/' + ((date.getMonth() > 8) ? (date.getMonth()+1) : ('0' + (date.getMonth()+1))) + '/' + date.getFullYear();
}
function limitText(d,l){
    return d.length>l?d.substr(0,l-3)+'...':d;
}
function encodeIvanFormat(d){
    //2020-05-24 -> 24/05/2020
    //24/05/2020 -> 2020-05-24
    if(d==null||d=='null')return '';
    d=d.split(' ')[0];
    var dd=d.split('-');
    if(dd.length==3)return dd[2]+'/'+dd[1]+'/'+dd[0];
    else{
        var dd=d.split('/');
        if(dd.length==3)return dd[2]+'-'+dd[1]+'-'+dd[0];
        else return d;
    }
}
function getAlertDate(d,a,t){
    d=new Date(d.split(' ')[0]+' 01:01:01');
    t=new Date(t.split(' ')[0].split('T')[0]+' 01:01:01');
    d=d.setDate(d.getDate()+a);
    if(d<t)return getJustDate(t);
    return getJustDate(d);
}
var tinymceOption={
    selector: '#edit_group_template',
    entity_encoding : "raw",
    menubar: false,
    toolbar: 'styleselect fontselect fontsizeselect | undo redo | bold italic | alignleft aligncenter alignright alignjustify bullist numlist | outdent indent | image print preview',//blockquote subscript superscript |//| cut copy paste
    plugins : 'advlist autolink link image lists charmap print preview font',
    //images_upload_url: '/uploadFile',
    //images_upload_base_path: '/some/basepath',
    //images_upload_credentials: true,
    images_upload_handler: function (blobInfo, success, failure) {
        var xhr, formData;
        xhr = new XMLHttpRequest();
        xhr.withCredentials = false;
        xhr.open('POST', '/uploadFile');
        xhr.onload = function() {
            var json;

            if (xhr.status != 200) {
                failure('HTTP Error: ' + xhr.status);
                return;
            }
            json = JSON.parse(xhr.responseText);
            if (!json || typeof json.location != 'string') {
                failure('Invalid JSON: ' + xhr.responseText);
                return;
            }
            success(json.location);
        };
        formData = new FormData();
        formData.append('file', blobInfo.blob(), blobInfo.filename());
        xhr.setRequestHeader('X-CSRF-Token',$('meta[name="csrf-token"]').attr('content'));
        xhr.send(formData);
    }
};
function setImgAvatar(obj,img) {
    $(obj).prop('src', 'data:image/png;base64,' + img);
}
function getLimitText(s,l) {
    return s.substr(0,l)+'...';
}