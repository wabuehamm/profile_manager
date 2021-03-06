define(function(require) {
	var $ = require('jquery');
	var elgg = require('elgg');
	
	elgg.provide('elgg.multiselect');
	
	elgg.multiselect.init = function() {
		$('.profile-manager-multiselect').multiselect({
			header: false,
			appendTo: "body",
			selectedList: 1,
			noneSelectedText: elgg.echo('profile_manager:input:multi_select:empty_text'),
			selectedText: elgg.echo('profile_manager:input:multi_select:selected_text')
		}).multiselect('getButton').find('.ui-icon').addClass('elgg-icon elgg-icon-caret-down fa fa-caret-down');
	};
});