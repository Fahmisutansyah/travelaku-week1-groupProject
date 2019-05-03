function cariVideo(cityName){
    $("#showYoutube").on("mouseenter", function() {
        $.ajax({
            url:`https://www.googleapis.com/youtube/v3/search`,
            method:'GET',
            data:{
                key:'AIzaSyBLYRr8oVVLltzRbDQ3F9eerFgKbVU1AOc',
                part: "snippet",
                q: `${cityName} travel tourism`,
                type:"video",
                maxResults: 1,
                order: "viewCount",
                publishedAfter: "2015-01-01T00:00:00Z",
            }
        })
        .done((response)=>{
            $("#resultsYoutube").empty()
            response.items.forEach(el => {
                $("#resultsYoutube").append(
                    `<div class="item">
                        <iframe class="video w100" width="640" height="355" center-align src="//www.youtube.com/embed/${el.id.videoId}" frameborder="0" allowfullscreen></iframe>
                    </div>`
                );     
            });
        })
        .fail((jqXHR, textStatus)=>{
            console.log(`request failed ${textStatus}`)
        })
    });
}