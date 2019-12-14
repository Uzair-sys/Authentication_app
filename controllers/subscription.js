const express=require('express');
const router=express.Router();
const Subscription=require('../models/Subscription');
const Services=require('../models/Services');
const Auth=require('../models/Auth');
const jwt = require("jsonwebtoken");
const passport = require("passport");
const schema = require("../helper/Validation");
require("../config/passport")(passport);
const hashPassword = require("../helper/hash");
const dbConfig = require("../config/dbConfig");
// const endpoints=require('./routes/endpoints');
// endpoints(app);
const setProfile = require("../helper/profile").setProfile

router.get('/ins/',(req,res)=>{
	res.send('andpoints is working');

})


// router.post('/select/', async(req,res)=>{
//     const { user_id,services_id,charges,exp_date} = req.body;
//     // const {user_id, title,original_price,discount_price } = req.body;
// console.log(req.body);
    // Services.findOne({where:{services_id:services_id}})
    // router.post('/select/', (req, res) => {
    //     Services.findByAll({
    //       include: [
    //         {
    //           model:Services,
    //           include: [
    //             {
    //               model:Auth
    //             }
    //           ]
    //         }
    //       ]
    //     }).then(async user => {
//  usea.findOne({where: {discount_stautus:discount_stautus}});
// uses=await dbConfig.sequelize.query('SELECT "discount_status" FROM auths WHERE "auths"."id"=?', {
//     replacements: ['active'], type: sequelize.QueryTypes.SELECT
//   });
// usea.findOne

router.post('/select/', async(req,res)=>{

const {user_id,services_id,charges,exp_date} = req.body;
Services.findOne({where:{service_id:services_id}}).then(services =>{
    
    console.log(services);
    Auth.findOne(
       { where: {
        id: user_id
     }})
   
    // const { email,password,updatedAt,deletedAt,discount_status} = req.body;
    // Auth.findAll({
    //     include: [{
    //         // model:Auths, 
    //         attributes: ['id','email','password','updatedAt','deletedAt','discount_status'], 
    //         through: { where: { discount_status:discount_status  } }
    //     }],
    // })
    .then(user =>{
        const { user_id,services_id,charges,exp_date} = req.body;
             
        Subscription.create({
           
            user_id:user_id,
            services_id:services_id,
            charges:user.discount_status?services.discount_price:services.original_price,
            exp_date:exp_date
          })
          .then(result=>{
            res.status(200).json({msg:"Subscribed Successfully",subscription:result});   
          })
          .catch(err=>{
            res.status(400).json({msg:"Unsuccessfull",reason:err.message});   

          })

        // console.log(services.original_price);
        // res.status(200).send(Subscription);
    })
    .catch (err); {
        res.status(400).json({ errors: [{ msg: err.message, order:"second" }] });
    };
    })
// .catch (err); {
//     res.status(400).json({ errors: [{ msg: err.message, order:"second" }] });
// };

})



module.exports= router;