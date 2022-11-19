const express = require('express');
const bodyParser = require('body-parser');
const authenticate = require('../authenticate');
const M = require('../models/SalesMTD'); 
const F = require('../models/SalesFTD');
const R = require('../models/RetailWiseSale');
const cors = require('./cors');

const salesRouter = express.Router();

salesRouter.use(bodyParser.json());
salesRouter.route('/Sales_MTD')
.options(cors.corsWithOptions,(req,res)=>{res.sendStatus(200);})
.get(cors.cors,(req,res,next)=>{
    M.find({})
    .then((electro)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(electro);
    },err=>next(err))
    .catch(err=>next(err))
    
})

.post(cors.corsWithOptions,authenticate.verifyUser,authenticate.verifyAdmin,(req,res,next)=>{
    M.create(req.body)
    .then(elecro=>{
        console.log('Device created',elecro);
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(elecro);
    },err=>next(err))
    .catch(err=>next(err));

})
.put(cors.corsWithOptions,authenticate.verifyUser,authenticate.verifyAdmin,(req,res,next)=>{
   res.statusCode = 403;
   res.end('PUT operation not supported on /electronics');
})
.delete(cors.corsWithOptions,authenticate.verifyUser,authenticate.verifyAdmin,(req,res,next)=>{
    M.remove({})
    .then((resp)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(resp);
        },err=>next(err));
});

salesRouter.route('/Sales_FTD')
.options(cors.corsWithOptions,(req,res)=>{res.sendStatus(200);})
.get(cors.cors,(req,res,next)=>{
    F.find({})
    .then((electro)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(electro);
    },err=>next(err))
    .catch(err=>next(err))
    
})

.post(cors.corsWithOptions,authenticate.verifyUser,authenticate.verifyAdmin,(req,res,next)=>{
    F.create(req.body)
    .then(elecro=>{
        console.log('Device created',elecro);
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(elecro);
    },err=>next(err))
    .catch(err=>next(err));

})
.put(cors.corsWithOptions,authenticate.verifyUser,authenticate.verifyAdmin,(req,res,next)=>{
   res.statusCode = 403;
   res.end('PUT operation not supported on /electronics');
})
.delete(cors.corsWithOptions,authenticate.verifyUser,authenticate.verifyAdmin,(req,res,next)=>{
    F.remove({})
    .then((resp)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(resp);
        },err=>next(err));
});
salesRouter.route('/Retailer_Wise_Sale')
.options(cors.corsWithOptions,(req,res)=>{res.sendStatus(200);})
.get(cors.cors,(req,res,next)=>{
    R.find({})
    .then((electro)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(electro);
    },err=>next(err))
    .catch(err=>next(err))
    
})

.post(cors.corsWithOptions,authenticate.verifyUser,authenticate.verifyAdmin,(req,res,next)=>{
    R.create(req.body)
    .then(elecro=>{
        console.log('Device created',elecro);
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(elecro);
    },err=>next(err))
    .catch(err=>next(err));

})
.put(cors.corsWithOptions,authenticate.verifyUser,authenticate.verifyAdmin,(req,res,next)=>{
   res.statusCode = 403;
   res.end('PUT operation not supported on /electronics');
})
.delete(cors.corsWithOptions,authenticate.verifyUser,authenticate.verifyAdmin,(req,res,next)=>{
    R.remove({})
    .then((resp)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(resp);
        },err=>next(err));
});
module.exports=salesRouter;