function getBuildBotStatus (url, divToFill)
{
    $.getJSON( url + "json/builders/", function( data ) {
        $.each( data, function( key, val ) {
            var d = val['cachedBuilds'];
            var lastBuild = d[d.length-1];

            $.getJSON( url + "json/builders/" + key + "/builds/" + lastBuild, function( data2 ) {
                var status = "failed";
                if (data2['text'][0] == "build" && data2['text'][1] == "successful")
                    status = "success";

                divToFill.append("<br><a href='" + url + "builders/" + key + "'>" + key + "</a>: " + status  + " (" +
        "<a href='" + url + "builders/" + key + "/builds/" + data2['number']  + "'>#" + data2['number']  + "</a>)");
            });
        });
    });
}
