const router = require('express').Router();
const jwt = require("jsonwebtoken");
const movieDATA = require('../models/Movie')

router.get('/movielist', async (req, res) => {
    try {
        let data = await movieDATA.find()
        res.send(data)
    } catch (error) {
        res.send(error.message)
    }
})

router.get('/movielist/:id', async (req, res) => {
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
        const { moviename, category, language,booked_details,booked_tickets, review,star,cast_details,image, description } = req.body;
        const movie= await movieDATA({ moviename, category, language,booked_details,booked_tickets, review,star,cast_details,image, description});
        movie.save();
        res.json({ message: "Created Succesfully" });


    } catch (error) {
        console.log(error)
        res.json('error')
    }

})





module.exports = router