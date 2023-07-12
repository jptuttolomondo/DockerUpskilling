import Router from 'router'
import store from '../database/index.js'
import validateModel from'../database/middlewares/validateModel.js'

const router=Router()
router.get('/:model',validateModel, async(req,res)=>{
const {model} = req.params
const result=await store[model].getAll()
res.status(200).json(result)
})

router.get('/:model/:id',validateModel, async(req,res)=>{
    const {model,id} = req.params
    const result=await store[model].get(id)
    res.status(200).json(result)
    })

export default router