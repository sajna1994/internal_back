const router = require('express').Router();
const jwt = require("jsonwebtoken");
const movieDATA = require('../models/Movie')

const UserDATA = require('../models/User')
router.get('/movielist', async (req, res) => {
    try {
        let data = await movieDATA.find()
        res.send(data)
    } catch (error) {
        res.send(error.message)
    }
})

router.get('/movielist/:id/:useId', async (req, res) => {
    try {
        let id = req.params.id
        let data = await movieDATA.findById(id)
        res.send(data)
    } catch (error) {
        res.send(error.message)
    }
})


router.post('/addmovie', async (req, res) => {
    try {
        console.log(req.body)
        const {movieId, moviename,date,numtickets, category, language,ticket_rates,time,rating,booked_tickets, review,cast_details,image, description } = req.body;
        const movie= await movieDATA({movieId, moviename,date,numtickets, category, language,ticket_rates,time,rating,booked_tickets, review,cast_details,image, description });
        movie.save();
        res.json({ message: "Created Succesfully" });


    } catch (error) {
        console.log(error)
        res.json('error')
    }

})


router.put('/movielist/:id',async(req,res)=>{
    try {
       id = req.params.id
       let updateData = {$set:req.body}
       const updated = await movieDATA.findByIdAndUpdate(id, updateData)
        res.json({message:"Updated successfully"})
    } catch (error) {
        // console.log(error)
        res.send('error')
    }
})
router.delete('/movielist/:id',async(req,res)=>{
    try {
        let id = req.params.id
       const updated = await movieDATA.findByIdAndDelete(id)
       res.json({message:"Deleted successfully"})
    } catch (error) {
        console.log(error)
        res.send('error')
    }
})


module.exports = router