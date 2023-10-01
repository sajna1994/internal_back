const mongoose =require('mongoose');
const MovieSchema = mongoose.Schema({
  movieId:{
    type:String,
  },
    moviename:{
        type:String,
        required:true,
       },
       category: {
        type:String,
            required:true,
        
      },
        language:{
            type:String,
            required:true,
          },
    
          ticket_rates:{
            type:String,
            // required:true,
           },
           time:{
            type:[String],
            // required:true,
           },
           rating:{
            type:String,
            // required:true,
           },
           ticket_sold:{
            type:String,
            // required:true,
           },
           date: [String],
           number_seats:{
            type:String,
            // required:true,
           },
           booked_tickets:{
            type:String,
            // required:true,
           },
           review: {
            type:String,
            },
           numtickets:{
            type:String,
            },
          cast_details: {
            type: String,
          },
          image: {
            type: String,
          },
          description:{
            type:String
          }  
    })
const MovieModel=mongoose.model('movielist',MovieSchema);
module.exports=MovieModel;