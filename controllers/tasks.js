import mongoose from "mongoose"
import Task from '../models/Tasks'


const addTask = async (req,res,next)=>{
const { client , rank , state} = req.body
// check that all the parameters are provided from the request 
if (client && rank && state){

    try {

        const taskAdded = Task.create ({
            client,rank,state
        
         })
        
         taskAdded && res.status(200).json(taskAdded)
        
    } catch (error) {

        res.status(500).send("internal Server Error: " + error.message)
    }

}
}


const updateRankOnDragUp = async (req,res,next) =>{

   try {
    
     const updatedTaskRank = await Task.findByIdUpdate(req.params.id,{
        $inc:{rank:req.body.rank}
    })
   res.status(200).send("Task Updated succesfully") 
    
   } catch (error) {

    res.status(error.status).send(error.message)
   }
}


const updateRankOnDragDown = async (req,res,next) =>{

    try {
     
      const updatedTaskRank = await Task.findByIdUpdate(req.params.id,{
         $inc:{rank:req.body.rank }
     })
    res.status(200).send("Task Updated succesfully") 
     
    } catch (error) {
 
     res.status(error.status).send(error.message)
    }
 }
 








