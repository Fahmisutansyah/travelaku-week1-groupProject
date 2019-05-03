function cariVideo(){
    $("#tombolCari").on("mouseenter", function() {
        $("#resultsYoutube > div").remove()
        $.ajax({
            url:`https://www.googleapis.com/youtube/v3/search`,
            method:'GET',
            data:{
                key:'AIzaSyBLYRr8oVVLltzRbDQ3F9eerFgKbVU1AOc',
                part: "snippet",
                q: "afghanistan travel",
                type:"video",
                maxResults: 1,
                order: "viewCount",
                publishedAfter: "2015-01-01T00:00:00Z",
            }
        })
        .done((response)=>{
            response.items.forEach(el => {
                $("#resultsYoutube").append(
                    `<div class="item">
                        <h2>${el.snippet.title}</h2>
                        <iframe class="video w100" width="640" height="360" src="//www.youtube.com/embed/${el.id.videoId}" frameborder="0" allowfullscreen></iframe>
                    </div>`
                );     
            });
        })
        .fail((jqXHR, textStatus)=>{
            console.log(`request failed ${textStatus}`)
        })
    });
}