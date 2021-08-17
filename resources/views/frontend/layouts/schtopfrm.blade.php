<form autocomplete="off" class="form-inline top-search-form" action="/listing" method="get" accept-charset="UTF-8">
	<div class="search-form-field input-group width-49-percent margin-right-15 ">
		<div class="input-group-addon lp-border">Que</div>
		<div class="pos-relative">
			<div class="what-placeholder pos-relative" data-holder="">
				<input autocomplete="off" type="text" class="lp-suggested-search js-typeahead-input lp-search-input form-control ui-autocomplete-input dropdown_fields" name="select" id="select" placeholder="¿Que estas buscando?" value="" data-prev-value='0' data-noresult = "More results for">
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
	<div class="input-group width-49-percent ">
		<div class="input-group-addon lp-border">Donde</div>
		<div class="ui-widget border-dropdown">
			<input autocomplete="off" id="cities" class="form-control" data-country="" value="" placeholder="Tu ciudad...">
			<input type="hidden" autocomplete="off" id="lp_search_loc" name="lp_s_loc" value="">
		</div>
	</div>
	<div class="lp-search-btn-header pos-relative">
		<input value="" class="lp-search-btn lp-search-icon" type="submit">
		<img src="/images/classic/ellipsis.gif" class="searchloading loader-inner-header">
	</div>
	<input type="hidden" name="lp_s_tag" id="lp_s_tag" value="">
	<input type="hidden" name="lp_s_cat" id="lp_s_cat" value="">
	<input type="hidden" name="s" value="home">
	<input type="hidden" name="post_type" value="listing">
</form>