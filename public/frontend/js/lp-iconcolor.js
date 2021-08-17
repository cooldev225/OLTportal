/* iconcolor.js contains all js for icon changes  */
/*  Author : CrdioStudio Dev team */

jQuery.noConflict();
/* for 1.2.9 */

function changeColInUri(data,colfrom,colto) {
    // create fake image to calculate height / width
    //var img = document.createElement("img");
	var img = new Image();
    img.src = data;
    img.style.visibility = "hidden";
    document.body.appendChild(img);

    var canvas = document.createElement("canvas");
	canvas.id = 'canvas';
    canvas.width = img.offsetWidth;
    canvas.height = img.offsetHeight;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img,0,0);
	
    // remove image
    img.parentNode.removeChild(img);

    // do actual color replacement

	if(canvas.width != 0 && canvas != undefined){
		var imageData = ctx.getImageData(0,0,canvas.width,canvas.height);
		
		var data = imageData.data;

		var rgbfrom = hexToRGB(colfrom);
		var rgbto = hexToRGB(colto);

		var r,g,b;
		for(var x = 0, len = data.length; x < len; x+=4) {
			r = data[x];
			g = data[x+1];
			b = data[x+2];


				data[x] = rgbto.r;
				data[x+1] = rgbto.g;
				data[x+2] = rgbto.b;

		   
		}

		ctx.putImageData(imageData,0,0);
	}
    return canvas.toDataURL();
}


jQuery(document).ready(function($){
	
	
	jQuery('#input-dropdown').find('li').each(function() {
	 var iconsrc = jQuery(this).find('img').attr('src');
	 if(iconsrc != '' && iconsrc != undefined){
		var changecolor = changeColInUri(iconsrc,"#41A6DF","#ffffff");
		jQuery(this).prepend('<img class="h-icon" src="'+changecolor+'" />');
	 }
	});

	jQuery('.listing-single-cat').find('li').each(function() {
	 var iconsrc = jQuery(this).find('.base-icon').attr('src');
	 if(iconsrc != '' && iconsrc != undefined){
		var changecolor = changeColInUri(iconsrc,"#41A6DF","#ffffff");
		jQuery(this).find('.base-icon').attr("src", changecolor);
	 }
	});

	jQuery('.user-portfolio ul.post-socials').find('li').each(function() {
	 var iconsrc = jQuery(this).find('.icon').attr('src');
	 if(iconsrc != '' && iconsrc != undefined){
		var changecolor = changeColInUri(iconsrc,"#ffffff","#41A6DF");
		jQuery(this).find('.icon').attr("src", changecolor);
	 }
	});


	jQuery('.blog-social ul.blog-social').find('li').each(function() {
	 var iconsrc = jQuery(this).find('.icon').attr('src');
	 if(iconsrc != '' && iconsrc != undefined){
		var changecolor = changeColInUri(iconsrc,"#ffffff","#41A6DF");
		jQuery(this).find('.icon').attr("src", changecolor);
	 }
	});

	jQuery('.user-info ul.social-icons').find('li').each(function() {
	 var iconsrc = jQuery(this).find('.icon').attr('src');
	 if(iconsrc != '' && iconsrc != undefined){
		var changecolor = changeColInUri(iconsrc,"#ffffff","#6e6e6e");
		jQuery(this).find('.icon').attr("src", changecolor);
	 }
	});

	jQuery('.popup-post-left-bottom ul.social-icons').find('li').each(function() {
	 var iconsrc = jQuery(this).find('.icon').attr('src');
	 if(iconsrc != '' && iconsrc != undefined){
		var changecolor = changeColInUri(iconsrc,"#ffffff","#6e6e6e");
		jQuery(this).find('.icon').attr("src", changecolor);
	 }
	});
	
});
/* end for 1.2.9 */

