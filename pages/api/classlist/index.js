import {classlist} from '../../../datasource/data'

export default function handler(req, res){
    if(req.method === 'GET'){
        res.status(200).json(classlist)
    }else if(req.method === 'POST'){
        const listItem = req.body.listItem
        console.log(listItem)
        const newStudent = {
            id: Date.now(),
            name: listItem
        }
        classlist.push(newStudent)
        res.status(201).json(newStudent)
    }
    
}