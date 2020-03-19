$(document).ready(function() {

    var source = $('#films-template').html();
    var template = Handlebars.compile(source);

    $('#btn-search').click(function() {
        var input = $('.search').val();
        console.log(input);

        $.ajax({
            url: 'https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT&query=scrubs',
            method: 'GET',
            success: function(data) {
                console.log(data);
                var films = data.results;
                for (var i = 0; i < films.length; i++) {
                    var film = films[i];
                    console.log(film);
                    var filmstemplate = {
                        titolo: film.title,
                        titoloOriginale: film.original_name,
                        lingua: film.original_language,
                        voto: film.vote_average
                    }
                    console.log(filmstemplate);

                    var cardsFilm = template(filmstemplate);
                    $('.container1').append(cardsFilm);
                }

            },
            error: function(err) {
                alert('Non va');
            }
        });
    });
});
