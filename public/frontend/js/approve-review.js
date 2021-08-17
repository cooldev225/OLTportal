 jQuery(document).ready(function($){
	 jQuery('.change_review_status').on('click', function(e){
		e.preventDefault();
		$this = jQuery(this);
		var statuss, id;
		statusss = $this.data("active");
		passivee = $this.data("passive");
		id = $this.data("id");
		info = [];
		info[0] = id;
		info[1] = statusss;
		info[2] = passivee;
		
		var formData = JSON.stringify(info);
		
		jQuery.ajax({
            type: 'POST',
            dataType: 'json',
            url: ajax_approvereview_object.ajaxurl,
            data: { 
                'action': 'listingpro_review_status', 
                'formData': formData, 
			},   
            success: function(res){
				if(res.statuss="success"){
					var current = res.current_status;
					var passive = res.passive_status;
					
					$this.data('active', current);
					$this.data('passive', passive);
					$this.text(passive);
				}
				
				
            }
        });
	 });
 });