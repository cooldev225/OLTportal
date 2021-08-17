 jQuery(document).ready(function($){
     if(jQuery('body').hasClass('logged-in')){


	 }else{
         jQuery('.reviewformwithnotice input[type=text], .reviewformwithnotice textarea').keyup(function (e) {
             if(jQuery('body').hasClass('listing-app-view')){
                 jQuery('#app-view-login-popup').modal();
                 jQuery('#app-view-login-popup').addClass('md-show');
             }else{
                 jQuery('#modal-3').modal();
                 jQuery('#modal-3').addClass('md-show');
             }
         });
     }
	 jQuery('#rewies_formm').on('submit', function(e){
		 e.preventDefault();
	 });
	 jQuery( '#rewies_form' ).on('submit', function(e){
		$this = jQuery(this);


         var isCaptcha = $this.data('lp-recaptcha'),
             siteKey = $this.data('lp-recaptcha-sitekey');

         var multiState	=	$this.data('multi-rating');

		$this.find('.review_status').text('');
		$this.find(':input[type=submit]').prop('disabled', true);
		errorMSG = $this.find(":input[name='errormessage']").val();
		$title = jQuery('#post_title').val();

         if( multiState == '1' )
         {
             var $rating	=	'';
             var multiFieldsCount	=	jQuery('.lp-multi-rating-val').length-1;
             var multiRatingSum        =    0;

             jQuery('.lp-multi-rating-val').each(function(index){
                 var field_val	=	jQuery(this).val(),
                     fieldID		=	jQuery(this).data('mrf');
                     multiRatingSum    += Number(field_val);
                 if( index != multiFieldsCount )
                 {
                     var cSep	=	',';
                 }
                 else
                 {
                     var cSep	=	'';
                 }

                 var ratingVal	=	fieldID+':'+field_val+cSep;

                 $rating	+=	ratingVal;
             });
         }
         else
         {
		$rating = jQuery('#review-rating').val();
         }
		var ratingCheck    =    $rating;
        if( multiState == '1' )
        {
            ratingCheck    =    multiRatingSum;
         }
		$description = jQuery('#post_description').val();
		var $umail = '';
		$umail = $this.find(":input[type=email]").val();
		if ($umail !== undefined){
			$this.find('.loadinerSearch').addClass('loadinerSearchblock');
			e.preventDefault();
			if( $title == '' || ratingCheck == '' || ratingCheck == 0 ||  $description == '' ||  $umail == '' ){
				$this.find('.review_status').text(errorMSG);
				$this.find('.review_status').addClass('error-msg');
				$this.find(':input[type=submit]').prop('disabled', false);
				$this.find('.loadinerSearch').removeClass('loadinerSearchblock');
			}
			else{
					
					
					var fd = new FormData(this);
					if(!jQuery('input#filer_input2').val()){
						if(detectIE() == false){
							fd.delete('post_gallery[]');
						}
					}
					fd.append('action', 'ajax_review_submit');
                    fd.append('multiState', multiState);
                if( multiState == '1' )
                {
                    fd.append('multirating', $rating);
                }

                fd.append('lpNonce' , jQuery('#lpNonce').val());
                if ( (isCaptcha == '' || isCaptcha === null) || (siteKey == '' || siteKey === null) ) {
						jQuery.ajax({
							type: 'POST',
							url: ajax_review_object.ajaxurl,
							data:fd,
							contentType: false,
							processData: false,
							
							success: function(res){
								
								var res = jQuery.parseJSON(res);
								$this.find('.loadinerSearch').removeClass('loadinerSearchblock');
								$this.find(':input[type=submit]').prop('disabled', false);
								if(res.error){
									$this.find('.review_status').addClass('error-msg');
									$this.find('.review_status').text(res.status);
								}
								else{
									
									$this.find('.review_status').text(res.status);
									$this.find('.review_status').removeClass('error-msg');
									$this.find('.review_status').addClass('success-msg');
									$this[0].reset();
									var timer = '';
									 function redirectPageNow(){
										location.reload(true);
										clearTimeout(timer);
									}
									timer = setTimeout(redirectPageNow, 100);
										
								}
								
							},
							error: function(request, error){
								
								alert(error);
							}
						});
					}else{
						//for recpatcha
						grecaptcha.ready(function() {
							grecaptcha.execute(siteKey, {action: 'lp_review'}).then(function(token) {
								
								fd.append('recaptha-action', 'lp_review');
								fd.append('token', token);
								
								jQuery.ajax({
									type: 'POST',
									url: ajax_review_object.ajaxurl,
									data:fd,
									contentType: false,
									processData: false,
									
									success: function(res){
										
										var res = jQuery.parseJSON(res);
										$this.find('.loadinerSearch').removeClass('loadinerSearchblock');
										$this.find(':input[type=submit]').prop('disabled', false);
										if(res.error){
											$this.find('.review_status').addClass('error-msg');
											$this.find('.review_status').text(res.status);
										}
										else{
											
											$this.find('.review_status').text(res.status);
											$this.find('.review_status').removeClass('error-msg');
											$this.find('.review_status').addClass('success-msg');
											$this[0].reset();
											var timer = '';
											 function redirectPageNow(){
												location.reload(true);
												clearTimeout(timer);
											}
											timer = setTimeout(redirectPageNow, 100);
												
										}
										
									},
									error: function(request, error){
										
										alert(error);
									}
								});
								
							});
						})
						
					}
					
				}
		}
		
		else if( $title == '' ||  ratingCheck == '' || ratingCheck == 0 ||  $description == '' ){
			$this.find('.review_status').text(errorMSG);
			$this.find('.review_status').addClass('error-msg');
			$this.find(':input[type=submit]').prop('disabled', false);
		}
		else{
			$this.find('.loadinerSearch').addClass('loadinerSearchblock');
			e.preventDefault();
			
			var fd = new FormData(this);
			if(!jQuery('input#filer_input2').val()){
				if(detectIE() == false){
					fd.delete('post_gallery[]');
				}
			}
			fd.append('multiState', multiState);
           if( multiState == '1' )
           {
               fd.append('multirating', $rating);
           }
			fd.append('action', 'ajax_review_submit');
			fd.append('lpNonce', jQuery('#lpNonce').val());

			jQuery.ajax({
				type: 'POST',
				url: ajax_review_object.ajaxurl,
				data:fd,
				contentType: false,
				processData: false,
				
				success: function(res){
					
							
					$this.find('.loadinerSearch').removeClass('loadinerSearchblock');
					$this.find(':input[type=submit]').prop('disabled', false);
					var res = jQuery.parseJSON(res);
					if(res.error){
						$this.find('.review_status').addClass('error-msg');
						$this.find('.review_status').text(res.status);
					}
					else{
						$this.find('.review_status').text(res.status);
						$this.find('.review_status').removeClass('error-msg');
						$this.find('.review_status').addClass('success-msg');
						$this[0].reset();
						var timer = '';
						function redirectPageNow(){
							location.reload(true);
							clearTimeout(timer);
						}
						timer = setTimeout(redirectPageNow, 100);
					}
					
				},
				error: function(request, error){
					alert(error);
					
				}
			});
			
		}
		return false;
	 });
	 
	 /* by zaheer on 16 march */
	 
	 jQuery('.reviews-section a.review_actv').tooltip();
	 
	 jQuery(document).on('click' , '.reviews-section a.reviewRes',function(e){
		reviewID = '';
		ajaxResErr = '';
		var $this = jQuery(this);
		if($this.hasClass('review_actv')){
			$this.find( '.lp_state' ).text($this.data('reacted'));
			$this.find( '.lp_state' ).slideToggle( 'slow' );
			var showStatDiv = function(){
				$this.find( '.lp_state' ).slideToggle( 'slow' );
			};
			timVar = setTimeout(showStatDiv, 3000);
			e.preventDefault();
		}
		else {
			$this.find( '.lp_state' ).hide();
			$this.find('span.interests-score').text('');
			$this.find('span.interests-score').append('<i class="fa fa-spinner fa-spin"></i>');
			reviewID = $this.data('id');
			var currentVal = $this.data('score');
			var restype = $this.data('restype');
			
				jQuery.ajax({
					type: 'POST',
					dataType: 'json',
					url: ajax_review_object.ajaxurl,
					data:{
						action:'lp_reviews_interests',
						interest : currentVal,
						restype : restype,
						id : reviewID,
                        'lpNonce' : jQuery('#lpNonce').val()
					},
					
					
					success: function(res){
						if(res.errors=="no"){
							ajaxResErr = 'no';
							var newscore = res.newScore;
							$this.data('score', newscore);
							$this.find('span.interests-score').empty('');
							$this.find('span.interests-score').text(newscore);
							if(restype=='interesting'){
								$this.css({'background-color': '#417cdf',
								'color': '#fff'});
								$this.find('.interests-score').css({'color': '#fff'});
							}
							else if(restype=='lol'){
								$this.css({'background-color': '#ff8e29',
								'color': '#fff'});
								$this.find('.interests-score').css({'color': '#fff'});
							}
							else if(restype=='love'){
								$this.css({'background-color': '#ff2357',
								'color': '#fff'});
								$this.find('.interests-score').css({'color': '#fff'});
							}
							currentVal = false;
							$this.find('.lp_state').text(res.statuss);
							$this.find( '.lp_state' ).slideToggle( 'slow' ); 
							var showStatDiv = function(){
								$this.find( '.lp_state' ).slideToggle( 'slow' );
							};
							timVar = setTimeout(showStatDiv, 3000);
							$this.addClass('review_actv');
							
						}
						else{
							ajaxResErr = 'yes';
							var newscore = res.newScore;
							$this.find('span.interests-score').empty('');
							$this.find('span.interests-score').empty('');
							$this.find('span.interests-score').text(newscore);
							$this.find('.lp_state').text(res.statuss);
							$this.find( '.lp_state' ).slideToggle( 'slow' );
							var showStatDiv = function(){
								$this.find( '.lp_state' ).slideToggle( 'slow' );
								$this.addClass('review_actv');
							};
							timVar = setTimeout(showStatDiv, 3000);
							//clearTimeout(timVar);
						}
					},
					error: function(request, error){
						alert(error);
					}
				});
		}
		e.preventDefault();
	 });
	 
	 
	 
	 jQuery('.reviews-section a.lol').click(function(e){
		var currentVal = '';
		currentVal = jQuery(this).data('score');
	 });
	 
	 jQuery('.reviews-section a.love').click(function(e){
		var currentVal = '';
		currentVal = jQuery(this).data('score');
	 });
	 
	 
	 /* end by zaheer on 16 march */


	/* for update 2.0 */
$("body").on('change', '#rewies_form #filer_input2', function(event) {

		var $this	=	jQuery(this);
		if( $this.hasClass('dashboard-edit-filter-input2') )
		{
			jQuery('.dashboard-edit-filter-input2').removeClass('active_filter_input2');
			$this.addClass('active_filter_input2');

            var files = event.target.files;
            var outputt = document.getElementsByClassName('filediv');
            var output = outputt[0];

            var allowedimgz = $('#rewies_edit-form').data('imgcount');
            var allowedsize = $('#rewies_edit-form').data('imgsize');
            var noticecount = $('#rewies_edit-form').data('countnotice');
            var noticesize = $('#rewies_edit-form').data('sizenotice');


            var fp = $(".active_filter_input2");
            var lg = fp[0].files.length; // get length
            var items = fp[0].files;
            var fileSize = 0;

            if (lg > 0) {
                if( lg <= allowedimgz ){

                    for (var i = 0; i < lg; i++) {
                        fileSize = fileSize+items[i].size; // get file size
                    }
                    if(fileSize > allowedsize) {

                        alert(noticesize);
                        $this.val('');
                        $this.text('');
                    }
                }else{
                    alert(noticecount);
                    $this.val('');
                    $this.text('');
                }
            }
		}
		else
		{
            var files = event.target.files;
            var outputt = document.getElementsByClassName('filediv');
            var output = outputt[0];

            var allowedimgz = $('#rewies_form').attr('data-imgcount');
            var allowedsize = $('#rewies_form').attr('data-imgsize');
            var noticecount = $('#rewies_form').attr('data-countnotice');
            var noticesize = $('#rewies_form').attr('data-sizenotice');
            var fp = $("#filer_input2");
            var lg = fp[0].files.length; // get length
            var items = fp[0].files;
            var fileSize = 0;

            if (lg > 0) {
                if( lg <= allowedimgz ){

                    for (var i = 0; i < lg; i++) {
                        fileSize = fileSize+items[i].size; // get file size
                    }
                    if(fileSize > allowedsize) {

                        alert(noticesize);
                        $('#filer_input2').val('');
                        $('.submit-images label').text('');
                    }
                }else{
                    alert(noticecount);
                    $('#filer_input2').val('');
                    $('.submit-images label').text('');
                }
            }
		}

	});
	/* end for update 2.0 */
 });