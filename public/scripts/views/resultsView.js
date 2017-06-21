'use strict';

var app = app || {};

(function (module) {
    const resultsView = {};
    const render = function (result) {
        let template = Handlebars.compile($('#results-template').text());
        return template(result);

        //end of const render    
    };
    resultsView.index = function () {
        $('#results').show().siblings().hide();
        $('#results article').remove();
        if(app.Result.all.length === 0) {
            $('#no-results').show();
            $('#no-results-text').text('Sorry, no results for “'+app.searchView.titleStringRaw+'.”');
        } else {
            app.Result.all.forEach(a => $('#results').append(render(a)));
        }
    };

    resultsView.initFave = function() {
        $('.save-fave').click(function(event) {
            console.log('$(this).index()');
            resultsView.submit();
        });
    };

    resultsView.submit = function(event) {
        console.log(event.index());
        
    };

    module.resultsView = resultsView;
    //end of first IIFE function    
})(app);