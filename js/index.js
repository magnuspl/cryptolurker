$(function(){
	Search();
});

// Filter Glossary items
function Search(){
		// Filter using search box
    $("#search").bind("keyup", function(){
        var inputValue = $(this).val();

        // Hide all the results & Cards
        $(".results_row").addClass("inactive");
        $(".results_item").hide();

        $(".results_row").each(function(){
            $(".results_item").each(function(){
                var item = $(this).attr("data-item");

                if(item.toUpperCase().indexOf(inputValue.toUpperCase()) != -1){
                    $(this).parents(".results_row").removeClass("inactive");
                    $(this).show();
                }
            });
        });
    });

		// Filter using navigation
    $(".nav a").click(function(){
        var nav = $(this).attr("data-nav");

        // Remove & Add active class
        $(".nav__item").removeClass("active");
        $(this).parent().toggleClass("active");

        // Hide all the results
        $(".results_row").addClass("inactive");

        // Loop through the row
        $(".results_row").each(function(){
            var term = $(this).attr("data-term");

            if(nav == term){
                $(this).removeClass("inactive");
            }
        });

        // Only return false if data-toggle is glossary
        if($(this).attr("data-toggle") == "glossary"){
            return false;
        }
    });
}
