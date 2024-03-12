$("#getQuote").click(function(){
    var category = $("#keyword").val();
    
    $.ajax({
        method: 'GET',
        url: 'https://api.adviceslip.com/advice/search/' + category,
        dataType: 'json',
        success: function(quoteData) {
            console.log(quoteData);
            console.log(quoteData.slips[0].advice);
            $("#quote").text(quoteData.slips[0].advice); 
        },
        error: function ajaxError(errorText) {
            console.error('Error: ', errorText.responseText);
        }
    });
})