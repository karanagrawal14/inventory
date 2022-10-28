const express = require('express');
const bodyParser = require('body-parser');
const authenticate = require('../authenticate');
const Refreshments = require('../models/refreshments');
const cors = require('./cors');

const refreshmentRouter = express.Router();

refreshmentRouter.use(bodyParser.json());

refreshmentRouter.route('/')
.options(cors.corsWithOptions,(req,res)=>{res.sendStatus(200);})
.get(cors.cors,(req,res,next)=>{
    Refreshments.find({})
    .then((electro)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(electro);
    },err=>next(err))
    .catch(err=>next(err))
    
})

.post(authenticate.verifyUser,authenticate.verifyAdmin,(req,res,next)=>{
    Refreshments.create(req.body)
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
   res.end('PUT operation not supported on /refreshments');
})
.delete(authenticate.verifyUser,authenticate.verifyAdmin,(req,res,next)=>{
    Refreshments.remove({})
    .then((resp)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(resp);
        },err=>next(err));
});

refreshmentRouter.route('/:refId')
.options(cors.corsWithOptions,(req,res)=>{res.sendStatus(200);})
.get(cors.cors,(req,res,next)=>{
    Refreshments.findById(req.params.refId)
    .then((elecro)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(elecro);
    },err=>next(err))
    .catch(err=>next(err));
})
.post(authenticate.verifyUser,authenticate.verifyAdmin,(req,res,next)=>{
    res.statusCode = 403;
    res.end('POST operation not supported on /refreshments/'+req.params.refId);
})
.put(authenticate.verifyUser,authenticate.verifyAdmin,(req,res,next)=>{
    Refreshments.findByIdAndUpdate(req.params.refId,{$set:req.body},{new:true})
    .then((elecro)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(elecro);
    },err=>next(err))
    .catch(err=>next(err))

})
.delete(authenticate.verifyUser,authenticate.verifyAdmin,(req,res,next)=>{
    Refreshments.findByIdAndRemove(req.params.refId)
    .then((resp)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(resp);
    },err=>next(err))
    .catch(err=>next(err))
})

module.exports=refreshmentRouter;