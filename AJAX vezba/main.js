$(function () {
    var $container = $(".container");
    var apiUrl = "https://jsonplaceholder.typicode.com";

    $.ajax({ url: apiUrl + '/posts' })
        .then(function (data) {
            data.forEach(function (element) {
                var $link = $('<p>')
                    .text(element.title)
                    .attr('data-post-id', element.id);

                $container.append($link);
            });
            
            $('p').on('click', function (e) {
                console.log($(this).attr('data-post-id'));
                localStorage.content = $(this).attr('data-post-id');
            })

        }).fail(function () {
            console.log("Error.")
        });
})