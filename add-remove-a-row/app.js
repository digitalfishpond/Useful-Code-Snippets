$(document).ready(function(){
    $("#add_row").click(function(){
        var newCommercial = $("<div class='singleCommercial'><div class='form-group'><input class='datetimepicker'></div>");
        newCommercial.appendTo($('#listOfCommercials'));
    });

    $("#delete_row").click(function() {
        var target = document.getElementsByClassName('singleCommercial');
		var latest = target.length - 1;
		if (latest != 0)
		{
			document.getElementsByClassName('singleCommercial')[latest].remove();
		}
    });
});
