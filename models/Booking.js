
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
 

  bookingId: String,
  movieId: String,
  userId: String,
  email:String,
  date: String,
  seatNumbers: [String],
  ticketPrice: String,
  totalPrice: String,
  movieName: String,
 time:String,
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;