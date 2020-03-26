

$(document).ready(function() {

    var source = $('#films-template').html();
    var template = Handlebars.compile(source);


    var apiBaseUrl = 'https://api.themoviedb.org/3';
    var imgBaseUrl = 'https://image.tmdb.org/t/p/';
    var imgSize = 'w342';

    $('#btn-search').click(function() {
        var valoreInput = $('input').val();
        $('.container-film').html('');


        $.ajax({
            url: 'https://api.themoviedb.org/3/search/movie',

            data: {
                api_key: 'cd0758b773006b78db6362a500a13095',
                query: valoreInput,
                language: 'it-IT'
            },

            method: 'GET',
            success: function(data) {
                console.log(data);
                var films = data.results;
                for (var i = 0; i < films.length; i++) {
                    var film = films[i];
                    var voto_effettivo = Math.ceil(films[i].vote_average / 2);
                    console.log(film);
                    var filmstemplate = {
                        cover: poster(film.poster_path),
                        titolo : film.title,
                        titoloOriginale: film.original_name,
                        lingua: film.original_language,
                        voto: stars(voto_effettivo)
                    };
                    console.log(filmstemplate);

                    var cardsFilm = template(filmstemplate);
                    $('.container-film').append(cardsFilm);
                }

            },
            error: function(error) {
                alert('Non va');
            }
        });

        $.ajax({
            url: 'https://api.themoviedb.org/3/search/tv',

            data: {
                api_key: 'cd0758b773006b78db6362a500a13095',
                query: valoreInput,
                language: 'it-IT'
            },

            method: 'GET',
            success: function(data) {
                console.log(data);
                var films = data.results;
                for (var i = 0; i < films.length; i++) {
                    var film = films[i];
                    var voto_effettivo = Math.ceil(films[i].vote_average / 2);
                    console.log(film);
                    var filmstemplate = {
                        cover: poster(film.poster_path),
                        titolo : film.title,
                        titoloOriginale: film.original_name,
                        lingua: film.original_language,
                        voto: stars(voto_effettivo)
                    };
                    console.log(filmstemplate);

                    var cardsFilm = template(filmstemplate);
                    $('.container-film').append(cardsFilm);
                }

            },
            error: function(error) {
                alert('Non va');
            }
        });


        function stars(vote){
            var star = '';
            for (var k = 0; k < voto; k++) {
              star += '<i class="fas fa-star"></i>';
            }
            return star;
        }


        function gestisciLingua(lingua) {
            var htmlOutput = '';

            if (paesiSupportati.includes(lingua)) {

              htmlOutput =  lingua + '.png';
            } else {
              console.log();
            }

            return htmlOutput;

        }

        function stars(voto){
            var star = '';
            for (var k = 0; k < voto; k++) {
              star += '<i class="fas fa-star"></i>';
            }
            return star;

        }


        function poster(path) {
        if (path !== null) {
            return imgBaseUrl + imgSize + path;
        } else {
            return 'https://image.freepik.com/vettori-gratuito/errore-404-non-trovato-glitch-effect_8024-4.jpg';

        };
    };

    });
});
