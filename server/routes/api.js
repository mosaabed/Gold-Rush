const PASSWORD = 123456789;
const express = require('express')
const router = express.Router() 

const maps  = require('../models/maps.js')

let index = 0


router.get('/getmap/:index' , function(req , res){
    index = req.params.index
    maps.find({mapindex : index}, function (err, mapdata){
        res.send(mapdata)
    })
})


router.post('/addMap/:password' , function(req , res){
    if(req.params.password == PASSWORD){
        let mapDAta = req.body
        let map =JSON.parse(mapDAta.data)
        let mapdata =  { mapindex: index , map :map  }
        index++
        let newmap = new maps(mapdata)
        newmap.save()
        res.send(newmap)
    }
    // let mapDAta = req.body
    // console.log(mapDAta)
    // let x =JSON.parse(mapDAta.data)
    // console.log(x)
    // res.send("aaaaa")

})




module.exports = router