import React from 'react'

interface BestDataa {
    flag : string,
    name : string,
    time :string,
    date:string
  }


  const BestData: React.FC<BestDataa> = (props) => {

  return (
    <>
    <div className="flex items-center justify-between border-b py-3">
      <div className="flex items-center">
        <img src={props.flag} alt="Flag" className="w-8 h-8 mr-2" />
        <span>{props.name}</span>
      </div>
      <div>
        <div>{props.time}</div>
        <div>{props.date}</div>
      </div>
    </div>
    
    </>
    
  )
}

export default BestData