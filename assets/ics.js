function icsInput() {
	var icsPlaceholder = 'Search';
	var icsClass = '';
	if ( icsLang === 'fa-IR' ) {
		icsPlaceholder = 'جستجو';
		icsClass = 'dirRight';
	}
	var icsHtml = '<div class="icsInput '+icsClass+'">';
	icsHtml += '<input type="text" id="icsInput" placeholder="'+icsPlaceholder+'" data-item="post" />';
	icsHtml += '<span class="dashicons dashicons-no-alt" id="icsClear"></span>';
	icsHtml += '<div id="icsError"></div>';
	icsHtml += '</div>';
	jQuery('#post #taxonomy-category').before(icsHtml);
	var icsHtml = '<div class="icsInput '+icsClass+'">';
	icsHtml += '<input type="text" id="icsInput" placeholder="'+icsPlaceholder+'" data-item="product" />';
	icsHtml += '<span class="dashicons dashicons-no-alt" id="icsClear"></span>';
	icsHtml += '<div id="icsError"></div>';
	icsHtml += '</div>';
	jQuery('#post #taxonomy-product_cat').before(icsHtml);
	var icsHtml = '<div class="icsInput '+icsClass+'">';
	icsHtml += '<input type="text" id="icsInput" placeholder="'+icsPlaceholder+'" data-item="brand" />';
	icsHtml += '<span class="dashicons dashicons-no-alt" id="icsClear"></span>';
	icsHtml += '<div id="icsError"></div>';
	icsHtml += '</div>';
	jQuery('#post #taxonomy-brands').before(icsHtml);
	var icsHtml = '<div class="icsInput '+icsClass+'">';
	icsHtml += '<input type="text" id="icsInput" placeholder="'+icsPlaceholder+'" data-item="categories" />';
	icsHtml += '<span class="dashicons dashicons-no-alt" id="icsClear"></span>';
	icsHtml += '<div id="icsError"></div>';
	icsHtml += '</div>';
	jQuery('#post #taxonomy-categories').before(icsHtml);
}

jQuery(document).on('keyup', '.icsInput input[type="text"]', function(e) {
	var item = jQuery(this).data('item');
	var filter = jQuery(this).val(), count = 0;
	if ( filter === '' ) {
		jQuery('#icsClear').fadeOut();
	} else {
		jQuery('#icsClear').fadeIn();
	}
	var listName = 'categorychecklist';
	if ( item === 'post' ) {
		listName = 'categorychecklist';
	} else if ( item === 'product' ) {
		listName = 'product_catchecklist';
	} else if ( item === 'brand' ) {
		listName = 'brandschecklist';
	} else if ( item === 'categories' ) {
		listName = 'categorieschecklist';
	}
	jQuery("#post #"+listName+" li").each(function(){
		if (jQuery(this).text().search(new RegExp(filter, "i")) < 0) {
			jQuery(this).slideUp(100);
			//
		} else {
			jQuery(this).slideDown(100);
			count++;
		}
	});
	if ( count > 0 ) {
		jQuery('#icsError').html('');
	} else {
		var icsErrorMsg = 'No Result ...';
		if ( icsLang === 'fa-IR' ) {
			icsErrorMsg = 'موردی پیدا نشد.';
		}
		jQuery('#icsError').html('<div class="error"><p>'+icsErrorMsg+'</p></div>');
	}
});

jQuery(document).on('click', '#icsClear', function(e) {
	e.preventDefault();
	jQuery('#icsInput').val('');
	jQuery('#icsError').html('');
	jQuery("#post #categorychecklist li, #post #product_catchecklist li, #post #brandschecklist li, #post #categorieschecklist li").slideDown(100);
	jQuery(this).fadeOut();
});

jQuery(document).on('click', '#category-tabs a[href="#category-all"], #product_cat-tabs a[href="#product_cat-all"], #brands-tabs a[href="#brands-all"], #categories-tabs a[href="#categories-all"]', function(e) {
	e.preventDefault();
	jQuery('#icsInput').show();
});

jQuery(document).on('click', '#category-tabs a[href="#category-pop"], #product_cat-tabs a[href="#product_cat-pop"], #brands-tabs a[href="#brands-pop"], #categories-tabs a[href="#categories-pop"]', function(e) {
	e.preventDefault();
	jQuery('#icsInput').hide();
});

jQuery(document).ready(function() {
	icsInput();
});