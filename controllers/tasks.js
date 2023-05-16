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
    
    await Task.findByIdUpdate(req.params.id,{
        $inc:{rank:1}
    })
   res.status(200).send("Task Updated succesfully") 
   next()
    
   } catch (error) {

    res.status(error.status).send(error.message)
   }
}


const updateRankOnDragDown = async (req,res,next) =>{

    try {
     
      await Task.findByIdUpdate(req.params.id,{
         $inc:{rank:-1 }
     })
    res.status(200).send("Task Updated succesfully") 
    next()
     
    } catch (error) {
 
     res.status(error.status).send(error.message)
    }
 }
 

 const updateState = async (req,res, next )=>{

try {

    await Task.findByIdUpdate(req.params.id,{
        $set:{state:req.body.state}
    })
    res.status(200).json({msg:"State changed successfully"})
    
} catch (error) {
    
}

 }

 const getAllTasks = (req,res,next) => {

     
     try {
        const tasks = Task.find();
        res.status(200).json(tasks)
        next()
        
    } catch (error) {

        
    }


 }


 const getTaskStates = (req,res,next) => {

     
    try {
       const tasks = Task.find({state:req.body.state});
       res.status(200).json(tasks)
       next()
       
   } catch (error) {

       
   }


}




module.exports = {
   addTask, getAllTasks,updateState,updateRankOnDragDown,updateRankOnDragUp,getTaskStates
}



