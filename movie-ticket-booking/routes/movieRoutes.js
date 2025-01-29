const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieController");
const validateRequest = require("../middlewares/validationMiddleware");
const { bookTicketSchema, cancelTicketSchema, modifySeatSchema } = require("../middlewares/validationSchemas");

router.post("/book", validateRequest(bookTicketSchema), movieController.bookTicket);
router.get("/ticket/:email", movieController.viewTicketDetails);
router.get("/attendees/:movieTitle/:showtime", movieController.viewAllAttendees);
router.delete("/cancel", validateRequest(cancelTicketSchema), movieController.cancelTicket);
router.put("/modify-seat", validateRequest(modifySeatSchema), movieController.modifySeat);

module.exports = router;

