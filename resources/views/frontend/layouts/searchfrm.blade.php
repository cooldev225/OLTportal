<form autocomplete="off" class="form-inline" action="/listing" method="get" accept-charset="UTF-8">			
	<div class="form-group lp-suggested-search  ">
		<div class="input-group-addon lp-border">Que</div>
		<div class="pos-relative">
			<div class="what-placeholder pos-relative" data-holder="">
				<input autocomplete="off" type="text" class="lp-suggested-search js-typeahead-input lp-search-input form-control ui-autocomplete-input dropdown_fields" name="select" id="select" placeholder="¿Que estas buscando?" data-prev-value='0' data-noresult = "More results for">
				<i class="cross-search-q fa fa-times-circle" aria-hidden="true"></i>
				<img class='loadinerSearch' width="100px" src="/images/classic/search-load.gif"/>
			</div>
			<div id="input-dropdown">
				<ul>
				@foreach($categories as $cat)
					<li class="lp-wrap-cats" data-catid="{{$cat['id']}}"><span class="lp-s-cat">{{$cat['name']}}</span></li>								
				@endforeach
				</ul>
			</div>
		</div>                        
	</div>
	<div class="form-group lp-location-search ">
		<div class="input-group-addon lp-border lp-where">Donde</div>
		<div data-option="no" class="ui-widget border-dropdown">
			<i class="fa fa-crosshairs"></i>
			<input autocomplete="off" id="cities" class="form-control" data-country="" placeholder="Tu ciudad...">
			<input type="hidden" autocomplete="off" name="lp_s_loc">
		</div>
	</div>
	<div class="form-group pull-right ">
		<div class="lp-search-bar-right">
			<input value="Buscar" class="lp-search-btn" type="submit">
			<i class="icons8-search lp-search-icon"></i>
			<img src="/images/classic/ellipsis.gif" class="searchloading">
			<!--
				<img src="/assets/images/searchloader.gif" class="searchloading">
			-->
		</div>
	</div>
	<input type="hidden" name="lp_s_tag" id="lp_s_tag">
	<input type="hidden" name="lp_s_cat" id="lp_s_cat">
	<input type="hidden" name="s" value="home">
	<input type="hidden" name="post_type" value="listing">	                        
</form> 