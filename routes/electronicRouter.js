const express = require('express');
const bodyParser = require('body-parser');
const authenticate = require('../authenticate');
const Electronics = require('../models/electronics');

const electronicRouter = express.Router();

electronicRouter.use(bodyParser.json());

electronicRouter.route('/')
.get((req,res,next)=>{
    Electronics.find({})
    .then((electro)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(electro);
    },err=>next(err))
    .catch(err=>next(err))
    
})

.post(authenticate.verifyUser,authenticate.verifyAdmin,(req,res,next)=>{
    Electronics.create(req.body)
    .then(elecro=>{
        console.log('Device created',elecro);
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(elecro);
    },err=>next(err))
    .catch(err=>next(err));

})
.put(authenticate.verifyUser,authenticate.verifyAdmin,(req,res,next)=>{
   res.statusCode = 403;
   res.end('PUT operation not supported on /electronics');
})
.delete(authenticate.verifyUser,authenticate.verifyAdmin,(req,res,next)=>{
    Electronics.remove({})
    .then((resp)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(resp);
        },err=>next(err));
});

electronicRouter.route('/:electroId')

.get((req,res,next)=>{
    Electronics.findById(req.params.electroId)
    .then((elecro)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(elecro);
    },err=>next(err))
    .catch(err=>next(err));
})
.post(authenticate.verifyUser,authenticate.verifyAdmin,(req,res,next)=>{
    res.statusCode = 403;
    res.end('POST operation not supported on /electronics/'+req.params.electroId);
})
.put(authenticate.verifyUser,authenticate.verifyAdmin,(req,res,next)=>{
    Electronics.findByIdAndUpdate(req.params.electroId,{$set:req.body},{new:true})
    .then((elecro)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(elecro);
    },err=>next(err))
    .catch(err=>next(err))

})
.delete(authenticate.verifyUser,authenticate.verifyAdmin,(req,res,next)=>{
    Electronics.findByIdAndRemove(req.params.electroId)
    .then((resp)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(resp);
    },err=>next(err))
    .catch(err=>next(err))
})

module.exports=electronicRouter;