const movieData = {
    movies: {
        "Kabir Singh": {
            "2025-02-01T19:30:00Z": {
                seatsAvailable: 10,
                attendees: [],
            },
            "2025-02-02T21:00:00Z": {
                seatsAvailable: 5,
                attendees: [],
            }
        },
        "Spider Man": {
            "2025-02-01T18:00:00Z": {
                seatsAvailable: 8,
                attendees: [],
            }
        }
    }
};

const ticketData = {
    tickets: [],
};

module.exports = { movieData, ticketData };

