const MovieService = require("../services/movieService");
const { movieData, ticketData } = require("../models/movieModel");

describe("Movie Ticket Booking Service - Kabir Singh", () => {
  beforeEach(() => {
    // Reset in-memory data before each test
    movieData.movies = {
      "Kabir Singh": {
        "2025-03-10T18:30:00Z": { seatsAvailable: 3, attendees: [] },
      },
    };
    ticketData.tickets = [];
  });

  test("should book a movie ticket for Kabir Singh successfully", () => {
    const response = MovieService.bookTicket(
      "Mohamed",
      "mohamed@yopmail.com",
      "Kabir Singh",
      "2025-03-10T18:30:00Z"
    );

    expect(response).toHaveProperty("seatNumber");
    expect(response.seatNumber).toBe(3);
    expect(ticketData.tickets.length).toBe(1);
  });

  test("should return error if movie does not exist", () => {
    const response = MovieService.bookTicket(
      "Mohamed",
      "mohamed@yopmail.com",
      "Nonexistent Movie",
      "2025-03-10T18:30:00Z"
    );

    expect(response).toEqual({ error: "Movie not found. Please select a valid movie." });
  });

  test("should return error if showtime does not exist", () => {
    const response = MovieService.bookTicket(
      "Mohamed",
      "mohamed@yopmail.com",
      "Kabir Singh",
      "2025-03-15T20:00:00Z"
    );

    expect(response).toEqual({ error: "Showtime not available. Please choose a valid showtime." });
  });

  test("should return error when all seats are full", () => {
    MovieService.bookTicket("Mohamed", "mohamed1@yopmail.com", "Kabir Singh", "2025-03-10T18:30:00Z");
    MovieService.bookTicket("Ali", "ali@yopmail.com", "Kabir Singh", "2025-03-10T18:30:00Z");
    MovieService.bookTicket("John", "john@yopmail.com", "Kabir Singh", "2025-03-10T18:30:00Z");

    const response = MovieService.bookTicket("David", "david@yopmail.com", "Kabir Singh", "2025-03-10T18:30:00Z");

    expect(response).toEqual({ error: "No seats available" });
  });

  test("should retrieve ticket details for Mohamed", () => {
    MovieService.bookTicket("Mohamed", "mohamed@yopmail.com", "Kabir Singh", "2025-03-10T18:30:00Z");

    const response = MovieService.viewTicketDetails("mohamed@yopmail.com");

    expect(response.length).toBe(1);
    expect(response[0].name).toBe("Mohamed");
  });

  test("should return empty array if user has no tickets", () => {
    const response = MovieService.viewTicketDetails("unknown@yopmail.com");

    expect(response).toEqual([]);
  });

  test("should cancel a movie ticket for Mohamed", () => {
    MovieService.bookTicket("Mohamed", "mohamed@yopmail.com", "Kabir Singh", "2025-03-10T18:30:00Z");

    const response = MovieService.cancelTicket("mohamed@yopmail.com", "Kabir Singh", "2025-03-10T18:30:00Z");

    expect(response).toEqual({ message: "Ticket cancelled", seatNumber: 3 });
    expect(ticketData.tickets.length).toBe(0);
  });

  test("should return error when trying to cancel a non-existent ticket", () => {
    const response = MovieService.cancelTicket("mohamed@yopmail.com", "Kabir Singh", "2025-03-10T18:30:00Z");

    expect(response).toEqual({ error: "Ticket not found" });
  });

  test("should modify the seat assignment for Mohamed", () => {
    MovieService.bookTicket("Mohamed", "mohamed@yopmail.com", "Kabir Singh", "2025-03-10T18:30:00Z");

    const response = MovieService.modifySeat("mohamed@yopmail.com", "Kabir Singh", "2025-03-10T18:30:00Z", 2);

    expect(response).toHaveProperty("seatNumber");
    expect(response.seatNumber).toBe(2);
  });

  test("should return error when trying to modify a non-existent ticket", () => {
    const response = MovieService.modifySeat("mohamed@yopmail.com", "Kabir Singh", "2025-03-10T18:30:00Z", 1);

    expect(response).toEqual({ error: "Ticket not found" });
  });
});
