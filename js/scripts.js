$(document).ready(function() {
	$("button#cat").click(function() {
		$("ul#cat-says").prepend("<li>Meow!</li>");
		$("ul#dog-says").prepend("<li>Bow wow!</li>");
		$("ul#cat-says").children("li").first().click(function() {
			$(this).remove();
		});
		$("ul#dog-says").children("li").first().click(function() {
			$(this).remove();	
		});
	});
	
	$("button#dog").click(function() {
		$("ul#dog-says").prepend("<li>Bow wow!</li>");
		$("ul#cat-says").prepend("<li>Meow!</li>");
		$("ul#dog-says").children("li").first().click(function() {
			$(this).remove();	
		$("ul#cat-says").children("li").first().click(function() {
			$(this).remove();
		});
		});
	});
});
