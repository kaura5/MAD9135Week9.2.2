import {useState} from 'react'
function Classlist(){
    const [list, setList] = useState([])
    const [listItem, setListItem] = useState("")
    async function handleFetch(){
        const res = await fetch('/api/classlist')
        const data = await res.json()
        setList(data)
    }

    const handleUpdate = async ()=>{
        const res = await fetch('/api/classlist', {
            method: 'POST',
            body: JSON.stringify({listItem: listItem}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json()
        console.log(data)
    }

    return(
        <>
            <button onClick={handleFetch}>Fetch Classlist</button>
            {list.map((item)=>(
                <div key={item.id}>{item.name}</div>
            ))}
            <input type="text" onChange={(e)=> setListItem(e.target.value)} />
            <button onClick = {handleUpdate}>Update List</button>
        </>
    )
}

export default Classlist;