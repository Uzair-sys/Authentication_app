const authcontroller=require('../controllers/auth');
const servicecontroller=require('../controllers/service');
const subscriptioncontroller=require('../controllers/subscription');

const initendpoints=(app)=>
{
    
//    auth routes
     app.use('/auth',authcontroller);
//service route
app.use('/service',servicecontroller);

//subs route
 app.use('/subscription',subscriptioncontroller)
    
}
module.exports=initendpoints;