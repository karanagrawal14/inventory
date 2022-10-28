const express = require('express');
const bodyParser = require('body-parser');
const authenticate = require('../authenticate');
const Stationaries = require('../models/stationaries');
const cors = require('./cors');

const stationaryRouter = express.Router();

stationaryRouter.use(bodyParser.json());

stationaryRouter.route('/')
.options(cors.corsWithOptions,(req,res)=>{res.sendStatus(200);})
.get(cors.cors,(req,res,next)=>{
    Stationaries.find({})
    .then((electro)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(electro);
    },err=>next(err))
    .catch(err=>next(err))
    
})

.post(authenticate.verifyUser,authenticate.verifyAdmin,(req,res,next)=>{
    Stationaries.create(req.body)
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
   res.end('PUT operation not supported on /stationaries');
})
.delete(authenticate.verifyUser,authenticate.verifyAdmin,(req,res,next)=>{
    Stationaries.remove({})
    .then((resp)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(resp);
        },err=>next(err));
});

stationaryRouter.route('/:stationId')
.options(cors.corsWithOptions,(req,res)=>{res.sendStatus(200);})
.get(cors.cors,(req,res,next)=>{
    Stationaries.findById(req.params.stationId)
    .then((elecro)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(elecro);
    },err=>next(err))
    .catch(err=>next(err));
})
.post(authenticate.verifyUser,authenticate.verifyAdmin,(req,res,next)=>{
    res.statusCode = 403;
    res.end('POST operation not supported on /stationaries/'+req.params.stationId);
})
.put(authenticate.verifyUser,authenticate.verifyAdmin,(req,res,next)=>{
    Stationaries.findByIdAndUpdate(req.params.stationId,{$set:req.body},{new:true})
    .then((elecro)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(elecro);
    },err=>next(err))
    .catch(err=>next(err))

})
.delete(authenticate.verifyUser,authenticate.verifyAdmin,(req,res,next)=>{
    Stationaries.findByIdAndRemove(req.params.stationId)
    .then((resp)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(resp);
    },err=>next(err))
    .catch(err=>next(err))
})

module.exports=stationaryRouter;