const Joi = require("joi");

const bookTicketSchema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    email: Joi.string().email().required(),
    movieTitle: Joi.string().min(2).max(100).required(),
    showtime: Joi.string().required(),
});

const cancelTicketSchema = Joi.object({
    email: Joi.string().email().required(),
    movieTitle: Joi.string().min(2).max(100).required(),
    showtime: Joi.string().required(),
});

const modifySeatSchema = Joi.object({
    email: Joi.string().email().required(),
    movieTitle: Joi.string().min(2).max(100).required(),
    showtime: Joi.string().required(),
    newSeatNumber: Joi.number().integer().positive().required(),
});

module.exports = { bookTicketSchema, cancelTicketSchema, modifySeatSchema };