const { movieData, ticketData } = require("../models/movieModel");

class MovieService {
    static bookTicket(name, email, movieTitle, showtime) {
        if (!movieData.movies[movieTitle]) {
            return { error: "Movie not found. Please select a valid movie." };
        }

        if (!movieData.movies[movieTitle][showtime]) {
            return { error: "Showtime not available. Please choose a valid showtime." };
        }

        let availableSeats = movieData.movies[movieTitle][showtime].seatsAvailable;
        if (availableSeats <= 0) {
            return { error: "No seats available" };
        }

        const seatNumber = availableSeats;
        movieData.movies[movieTitle][showtime].seatsAvailable--;
        movieData.movies[movieTitle][showtime].attendees.push({ name, email, seatNumber });

        const ticket = { name, email, movieTitle, showtime, seatNumber };
        ticketData.tickets.push(ticket);

        return ticket;
    }

    static viewTicketDetails(email) {
        return ticketData.tickets.filter(ticket => ticket.email === email);
    }

    static viewAllAttendees(movieTitle, showtime) {
        return movieData.movies[movieTitle]?.[showtime]?.attendees || [];
    }

    static cancelTicket(email, movieTitle, showtime) {
        const index = ticketData.tickets.findIndex(ticket =>
            ticket.email === email && ticket.movieTitle === movieTitle && ticket.showtime === showtime
        );

        if (index === -1) return { error: "Ticket not found" };

        const seatNumber = ticketData.tickets[index].seatNumber;
        ticketData.tickets.splice(index, 1);

        const attendees = movieData.movies[movieTitle][showtime].attendees;
        const attendeeIndex = attendees.findIndex(att => att.email === email);
        if (attendeeIndex !== -1) attendees.splice(attendeeIndex, 1);

        movieData.movies[movieTitle][showtime].seatsAvailable++;

        return { message: "Ticket cancelled", seatNumber };
    }

    static modifySeat(email, movieTitle, showtime, newSeatNumber) {
        const ticket = ticketData.tickets.find(ticket =>
            ticket.email === email && ticket.movieTitle === movieTitle && ticket.showtime === showtime
        );

        if (!ticket) return { error: "Ticket not found" };

        ticket.seatNumber = newSeatNumber;
        return ticket;
    }
}

module.exports = MovieService;
