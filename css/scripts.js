$(document).ready(function(){
    var i=1;
    $("#add_row").click(function(){
        $('#addr'+i).html("<td align = 'center'><img src = 'http://www.placehold.it/200x200' alt = '...'></img></td><td><input name='emotion"+i+"' type='text' placeholder='Emotion' class='form-control input-md'/> </td><td><input  name='source"+i+"' type='text' placeholder='Source'  class='form-control input-md'></td>");
    
        $('#tab_logic').append('<tr id="addr'+(i+1)+'"></tr>');
        i++; 
    });

    $("#delete_row").click(function(){
        if(i>1){
    	    $("#addr"+(i-1)).html('');
    		i--;
    	}
    });
});