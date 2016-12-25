(function($) {
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

    $('.WB_media_a_mn img').each(function(i, obj) {
        var src = obj.getAttribute("src");
        obj.setAttribute("src", src.replace("thumbnail", "thumb150"));
    });

    $('.WB_media_a_m1 img').each(function(i, obj) {
        var src = obj.getAttribute("src");
        obj.setAttribute("src", src.replace("thumbnail", "orj360"));
    });
})(jQuery);