(function($) {

    var file_frame;

    jQuery(document).on('click', '.frontend-button', function(event) {
        event.preventDefault();

        jQuery(this).closest('.upload-field').addClass('active-upload');

        var allowMultipe    =   jQuery('.active-upload').data('multiple') ,
            multipleVar     =   '';
        if( allowMultipe == true )
        {
            multipleVar =   true;
        }
        else
        {
            multipleVar =   !1;
        }

        if (file_frame) {

            file_frame.open();

            return

        }

        file_frame = wp.media.frames.file_frame = wp.media({

            title: $(this).data('uploader_title'),

            button: {

                text: $(this).data('uploader_button_text'),

            },

            multiple: multipleVar

        });

        file_frame.on('select', function() {

            if( allowMultipe == true )

            {

                jQuery('.active-upload').find('.frontend-image').remove();
                var selection   =   file_frame.state().get('selection'),

                    imgsPaths   =   '';

                selection.map( function( attachment ) {

                    attachment = attachment.toJSON();
                    imgsPaths   +=  attachment.url+',';

                    var appendMarkup    =   '<div class="menu-edit-img-wrap gal-img-count-'+ attachment.id +'"><span data-src="'+ attachment.url +'" data-target="dis-old-img-'+ attachment.id +'" class="remove-menu-img"><i class="fa fa-close"></i></span> <img style="display: block;" class="gal-img-count-'+ attachment.id +' lp-uploaded-img event-old-img-'+ attachment.id +'" src="'+ attachment.url +'" alt=""> </div>'
                    jQuery('.active-upload .menu-edit-imgs-wrap').append(appendMarkup);


                });
                var imgsPaths    =   jQuery('.active-upload').find('.frontend-input-multiple').val()+imgsPaths;

                jQuery('.active-upload').find('.frontend-input-multiple').val(imgsPaths);
            }
            else
            {
                attachment = file_frame.state().get('selection').first().toJSON();
                jQuery('.active-upload').find('.frontend-image').next('.lp-uploaded-img').hide();
                jQuery('.active-upload').find('.frontend-image').attr('src', attachment.url);
                jQuery('.active-upload').find('.frontend-image').show();
                jQuery('.active-upload').find('.frontend-input').val(attachment.url);

                if( jQuery('.active-upload').hasClass('removeable-image') )
                {
                    jQuery('.active-upload').prepend('<span class="remove-event-img">X</span>');
                }
                jQuery('.active-upload').removeClass('active-upload');

            }

        });

        file_frame.open();

    })

    $(document).ready(function() {



    })

})(jQuery);