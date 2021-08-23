function getJustDate(d){
    if(d==null||d=='null')return '';
    var date = new Date(d);
    return ((date.getDate() > 9) ? date.getDate()  : ('0' + date.getDate())) + '/' + ((date.getMonth() > 8) ? (date.getMonth()+1) : ('0' + (date.getMonth()+1))) ;//+ '/' + date.getFullYear();
}
function getCommonFormatDate(d){
    if(d==null||d=='null')return '';
    var date = new Date(d);
    var res=date.getFullYear()+'-';
    res+=((date.getMonth() > 8) ? (date.getMonth()+1) : ('0' + (date.getMonth()+1)))+'-';
    res+=((date.getDate() > 9) ? date.getDate()  : ('0' + date.getDate())) + ' ';
    return res + date.getHours()+':' +date.getUTCMinutes();
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