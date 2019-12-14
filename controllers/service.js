const express=require('express');
const router=express.Router();
const User=require('../models/Services');
const jwt = require("jsonwebtoken");
const passport = require("passport");
const schema = require("../helper/Validation");
require("../config/passport")(passport);
const hashPassword = require("../helper/hash");
const setProfile = require("../helper/profile").setProfile

router.get('/ins/',(req,res)=>{
	res.send('andpoints is working');

})


//insert
router.post('/insert/', async(req,res)=>{
	const {user_id, title,description,original_price,discount_price,createdAt,deletedAt,updatedAt } = req.body;
	// console.log(password);
	 try {

    // Check required fields
    // const value = await schema.validateAsync({
    //     title,
    //     description,
    //   original_price,
    //   discount_price,
    //   createdAt,
    //   deletedAt
    // });
    // console.log(name);
       //Validation passed
       User.findOne({ where: { title: title } }).then(async user => {
        if (user) {
          //User exists
          res.status(400).json({ errors: [{ msg: "service already exist" }] });
          //  res.json({ user });
        } else {
        //   const hash = await hashPassword(password);
          // console.log(hash);
        //   console.log("In controller " + hash);
          User.create({
            user_id:user_id,
            title:title,
        description:description,
      original_price:original_price,
      discount_price:discount_price,
      createdAt:createdAt,
      deletedAt:deletedAt,
      updatedAt:updatedAt
            
          })
  
        .then(user => {
            return res.status(200).json({ user });
              //  console.log(user);
            //   req.login(user, { session: false }, function(error) {
            //     if (error) return next(error);
            //     // console.log('Request Login supossedly successful.');
            //     //   console.log("Request Login supossedly successful.");
            //     const payload = {
            //       user: {
            //         id: user.service_id
            //       }
            //     };
            //     const token = jwt.sign(payload, "jwt-secret", {
            //       expiresIn: "48h"
            //     });
            //     return res.status(200).json({ token });
            //   });
              // res.status(200).send(true);
            })
            .catch(err => res.status(500).json({ errors: [{ msg: err, order:"first" }] }));
        }
      });
    } catch (err) {
      res.status(400).json({ errors: [{ msg: err.message, order:"second" }] });
    }
  });

  module.exports=router;