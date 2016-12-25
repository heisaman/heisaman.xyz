$(document).ready(function(){
    var autolinker = new Autolinker( {
        urls : {
            schemeMatches : true,
            wwwMatches    : true,
            tldMatches    : true
        },
        email       : true,
        phone       : true,
        mention     : 'weibo',
        hashtag     : false,

        stripPrefix : true,
        newWindow   : true,

        truncate : {
            length   : 0,
            location : 'end'
        },

        className : ''
    } );

    $('.WB_text').each(function(i, obj) {
        obj.innerHTML = autolinker.link( obj.innerHTML );
    });
});