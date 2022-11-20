const express = require('express');
const bodyParser = require('body-parser');
const authenticate = require('../authenticate');
const Stock = require('../models/stocks');
const Aging = require('../models/AgingStock');
const Invent = require('../models/InventoryCost');
const cors = require('./cors');
// const ejs = require('ejs');


const inventoryRouter = express.Router();

inventoryRouter.use(bodyParser.json());
// inventoryRouter.set('view engine', 'ejs');
inventoryRouter.route('/Stock')
.options(cors.corsWithOptions,(req,res)=>{res.sendStatus(200);})
.get(cors.cors,(req,res,next)=>{
    Stock.find({})
    .then((electro)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        // res.json(electro);
        res.render("home.ejs");
    },err=>next(err))
    .catch(err=>next(err))
    
})

.post(cors.corsWithOptions,authenticate.verifyUser,authenticate.verifyAdmin,(req,res,next)=>{
    Stock.create(req.body)
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
    Stock.remove({})
    .then((resp)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(resp);
        },err=>next(err));
});

inventoryRouter.route('/Aging_Stock')
.options(cors.corsWithOptions,(req,res)=>{res.sendStatus(200);})
.get(cors.cors,(req,res,next)=>{
    Aging.find({})
    .then((electro)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(electro);
    },err=>next(err))
    .catch(err=>next(err))
    
})

.post(cors.corsWithOptions,authenticate.verifyUser,authenticate.verifyAdmin,(req,res,next)=>{
    Aging.create(req.body)
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
    Aging.remove({})
    .then((resp)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(resp);
        },err=>next(err));
});
inventoryRouter.route('/Inventory_Cost')
.options(cors.corsWithOptions,(req,res)=>{res.sendStatus(200);})
.get(cors.cors,(req,res,next)=>{
    Invent.find({})
    .then((electro)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(electro);
    },err=>next(err))
    .catch(err=>next(err))
    
})

.post(cors.corsWithOptions,authenticate.verifyUser,authenticate.verifyAdmin,(req,res,next)=>{
    Invent.create(req.body)
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
    Invent.remove({})
    .then((resp)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(resp);
        },err=>next(err));
});
module.exports=inventoryRouter;