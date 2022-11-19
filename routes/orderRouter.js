const express = require('express');
const bodyParser = require('body-parser');
const authenticate = require('../authenticate');
const Pending = require('../models/PendingOrders');
const Create = require('../models/CreateOrders');
const Short = require('../models/ShortClosedOrders');
const Completed = require('../models/CompletedOrders');
const cors = require('./cors');

const orderRouter = express.Router();

orderRouter.use(bodyParser.json());
orderRouter.route('/Pending_Orders')
.options(cors.corsWithOptions,(req,res)=>{res.sendStatus(200);})
.get(cors.cors,(req,res,next)=>{
    Pending.find({})
    .then((electro)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(electro);
    },err=>next(err))
    .catch(err=>next(err))
    
})

.post(cors.corsWithOptions,authenticate.verifyUser,authenticate.verifyAdmin,(req,res,next)=>{
    Pending.create(req.body)
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
    Pending.remove({})
    .then((resp)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(resp);
        },err=>next(err));
});

orderRouter.route('/Create_Order')
.options(cors.corsWithOptions,(req,res)=>{res.sendStatus(200);})
.get(cors.cors,(req,res,next)=>{
    Create.find({})
    .then((electro)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(electro);
    },err=>next(err))
    .catch(err=>next(err))
    
})

.post(cors.corsWithOptions,authenticate.verifyUser,authenticate.verifyAdmin,(req,res,next)=>{
    Create.create(req.body)
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
    Create.remove({})
    .then((resp)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(resp);
        },err=>next(err));
});
orderRouter.route('/Short_Closed_Orders')
.options(cors.corsWithOptions,(req,res)=>{res.sendStatus(200);})
.get(cors.cors,(req,res,next)=>{
    Short.find({})
    .then((electro)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(electro);
    },err=>next(err))
    .catch(err=>next(err))
    
})

.post(cors.corsWithOptions,authenticate.verifyUser,authenticate.verifyAdmin,(req,res,next)=>{
    Short.create(req.body)
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
    Short.remove({})
    .then((resp)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(resp);
        },err=>next(err));
});
orderRouter.route('/Completed_Orders')
.options(cors.corsWithOptions,(req,res)=>{res.sendStatus(200);})
.get(cors.cors,(req,res,next)=>{
    Completed.find({})
    .then((electro)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(electro);
    },err=>next(err))
    .catch(err=>next(err))
    
})

.post(cors.corsWithOptions,authenticate.verifyUser,authenticate.verifyAdmin,(req,res,next)=>{
    Completed.create(req.body)
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
    Completed.remove({})
    .then((resp)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(resp);
        },err=>next(err));
});
module.exports=orderRouter;