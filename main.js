$(document).ready(function(){
	$('#add').on('click', function(e){
		e.preventDefault();
		var val1 = parseInt($(this).parents('#formCalc').find('#num_one').val());
		var val2 = parseInt($(this).parents('#formCalc').find('#num_two').val());
		$('#answer').val(val1 + val2);
		
	})

	$('#subtract').on('click', function(e){
		e.preventDefault();
		var val1 = parseInt($(this).parents('#formCalc').find('#num_one').val());
		var val2 = parseInt($(this).parents('#formCalc').find('#num_two').val());
		$('#answer').val(val1 - val2);

	})

	$('#multiply').on('click', function(e){
		e.preventDefault();
		var val1 = parseInt($(this).parents('#formCalc').find('#num_one').val());
		var val2 = parseInt($(this).parents('#formCalc').find('#num_two').val());
		$('#answer').val(val1  * val2);

	})

	$('#divide').on('click', function(e){
		e.preventDefault();
		var val1 = parseInt($(this).parents('#formCalc').find('#num_one').val());
		var val2 = parseInt($(this).parents('#formCalc').find('#num_two').val());
		$('#answer').val(val1 / val2);

	})




});