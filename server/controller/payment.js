const {instance} = require("../config/razorpay");
const { PrismaClient } = require('@prisma/client');
const { mailSender } = require('../utils/mailSender');
const prisma = new PrismaClient();
const crypto = require("crypto");
require("dotenv").config();

exports.capturePayment = async (req,res) =>{
    try{

        const {device,year,id} = req.body;
        const user_id = 1;

        if(!device || !year || !id){
            return res.json({
                success:false,
                message:"please provide valid plan id"
            })
        }

        let plan;

        try{

           plan = await prisma.softwarePlan.findFirst({where:{devices:Number(device),year:Number(year),software_id:id}});
           if(!plan)
           {
                return res.json({
                    success:false,
                    message:"could not find the plan"
                })
           }
           console.log("plan",plan)

           //user allready purchase same course

        //    const purchased = await prisma.purchase.findFirst({where:{plan_id:plan.plan_id,user_id:user_id}});

        //    if(purchased)
        //    {
        //         return res.json({
        //             success:false,
        //             message:"plan already purchased"
        //         })
        //    }

        }catch(e){
            console.log(e.message);
            return res.status(500).json({
                success:false,
                message:"something went wrong in purchasing plan"
            })
        }

        //order create
        const amount = plan.price;
        const currency = "INR"

        //option
        const option ={
            amount:amount*100,
            currency,
            receipt:Math.random(Date.now()).toString(),
            notes:{
                PlanId:plan.plan_id,
                user_id
            }
        }

        //payment
        try{
            const paymentResponse = await instance.orders.create(option);
            console.log(paymentResponse);

            const purchaseed =await prisma.purchase.create({
                                    data:{
                                        user_id:user_id,
                                        plan_id:plan.plan_id,
                                        software_id:plan.software_id
                                    }
                                })
            console.log(purchaseed);

            // const transect = await prisma.transaction.create({
            //                     data:{
            //                         purchase_id:purchaseed.purchase_id,
            //                         razorpay_payment_id:paymentResponse.id,
            //                         amount:paymentResponse.amount,
            //                         status:"pending"
            //                     }
            //                 })
            // console.log(transect);

            return res.status(200).json({
                success:true,
                payment_id:paymentResponse.id,
                currency:paymentResponse.currency,
                amount:paymentResponse.amount,
                plan,
                user_id
            })

        }catch(e){
            console.log(e.message);
            return res.status(500).json({
                success:false,
                message:"error in payment generation"
            })
        }

    }catch(e){
        console.log(e.message);
            return res.status(500).json({
                success:false,
                message:"could not initiate order"
            })

    }
}

exports.verifySignature = async (req,res) =>{
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    if(!razorpay_order_id || !razorpay_payment_id || !razorpay_signature){
        return res.status(400).json({
            success:"false",
            message:"fields is missing"
        })
    }

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_SECRET)
    .update(body.toString())
    .digest("hex");

    console.log(razorpay_signature);
    console.log(expectedSignature);

    if(razorpay_signature === expectedSignature)
    {
        console.log("payment is  Authorised");

        //const {PlanId,user_id} = req.body.payload.payment.entity.notes;

        try{
            //action fullfilment
            // const compelet = await prisma.purchase.findUnique({where:{user_id,plan_id:PlanId}});
            // console.log(compelet);
            // const purchase_id=compelet.purchase_id

            // const update = await prisma.transaction.update({where:{purchase_id}},{data:{status:"success"}});

            //emailsent

            //successfull
            return res.status(200).json({
                success:true,
                //update
            })
            
        }catch(e){
            console.log(e);
            return res.status(500).json({
                success:false,
                message:"action is not fulfiled"
            })

        }
    }
    else
    {
        return res.status(500).json({
            success:false,
            message:"payment is not authoriszed"
        })
    }
}