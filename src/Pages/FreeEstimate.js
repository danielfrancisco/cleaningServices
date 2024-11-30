import { useEffect, useState,  } from "react"
import '../Styles/FreeEstimate.scss'

const inputTags = [
  'Name','Email','Number','Description'
]

export default function FreeEstimate(){
  const[clientData, setClientData] = useState("")

  useEffect(()=>{
    console.log(clientData)
  },[clientData])
  
 function setPlaceHolderText(text){
   switch(text){
        case 'Name':
        return `Enter your full ${text.toLocaleLowerCase()}...`
        
        case 'Email':
        return `youremail@outlook.com`
        
        case 'Description':
        return `Enter a ${text.toLocaleLowerCase()}...`
        
        case 'Number':
          return `Enter your ${text.toLocaleLowerCase()}...`
        default:
          return text
      }
  }  

  function getData(e,index){
    let temp
       if(clientData!==""){
        temp = [...clientData]
       }else{
        temp = [...inputTags]    
       }
        
        temp[index] = e.target.value
        setClientData(temp)
  }

 return(
          <>
            <div id='FreeEstimateContainer'>
             {inputTags.map((data, index)=>{
              return <div key={index} id='clientData'>
                <p>{data}</p>
                
               {data!=='Description'? <input 
                placeholder={setPlaceHolderText(data)}
                onChange={(e)=>getData(e,index)}
                />:<textarea placeholder={setPlaceHolderText(data)}
                onChange={(e)=>getData(e,index)}>
                  </textarea>}

              </div>
              })}
              <button id='sendButton'>Get a estimate</button> 
              </div>
          </>
          )
}