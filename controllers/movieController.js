const {Movie} = require('../models');

const movieController = {
    index: async (_req, res) => {
        const movies = await Movie.findAll();

        return res.render('index', {title: 'MyMovies', movies: movies});
    },

    store: async (req, res) => {
        const { title, description, viewMovie } = req.body;
        const [poster] = req.files;
        let watched = (typeof(viewMovie)=="undefined" ? 0:1);

        const movie = await Movie.create({
            title,
            description,
            poster: poster.filename,
            watched,
        });

        return res.redirect('/');
    },

    watched: async(req, res) => {
        const {id} = req.body;
        const movie = await Movie.findByPk(id);

        
        movie.watched = (movie.watched == 1 ? 0:1);
        await movie.save();

        return res.redirect('/');
    },

    destroy: async(req, res) => {
        const {id} = req.params;

        const movie = await Movie.destroy ({
            where: {
                id
            }
        });

        return res.redirect('/');
    },

    restore: async(req, res) => {
        const {id} = req.params;

        const movie = await Movie.restore ({
            where: {
                id
            }
        });

        return res.redirect('/');
    }
};

module.exports = movieController;