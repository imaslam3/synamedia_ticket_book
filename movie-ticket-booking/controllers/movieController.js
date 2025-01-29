const MovieService = require("../services/movieService");

exports.bookTicket = (req, res) => {
    const { name, email, movieTitle, showtime } = req.body;
    const result = MovieService.bookTicket(name, email, movieTitle, showtime);

    if (result.error) return res.status(400).json({ error: result.error });
    res.status(201).json(result);
};

exports.viewTicketDetails = (req, res) => {
    const { email } = req.params;
    const result = MovieService.viewTicketDetails(email);
    res.status(200).json(result);
};

exports.viewAllAttendees = (req, res) => {
    const { movieTitle, showtime } = req.params;
    const result = MovieService.viewAllAttendees(movieTitle, showtime);
    res.status(200).json(result);
};

exports.cancelTicket = (req, res) => {
    const { email, movieTitle, showtime } = req.body;
    const result = MovieService.cancelTicket(email, movieTitle, showtime);

    if (result.error) return res.status(400).json({ error: result.error });
    res.status(200).json(result);
};

exports.modifySeat = (req, res) => {
    const { email, movieTitle, showtime, newSeatNumber } = req.body;
    const result = MovieService.modifySeat(email, movieTitle, showtime, newSeatNumber);

    if (result.error) return res.status(400).json({ error: result.error });
    res.status(200).json(result);
};
