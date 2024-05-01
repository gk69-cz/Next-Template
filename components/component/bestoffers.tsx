import React from 'react'

interface BestDataa {
  flagStart: string,
  flagEnd: string,
  nameStart: string,
  timeStart: string,
  dateStart: string,
  nameEnd: string,
  timeEnd: string,
  dateEnd: string
}


const BestData: React.FC<BestDataa> = (props) => {

  return (
    <>
      <div className="md:grid md:grid-cols-3 md:gap-4">
        <div className="col-span-1 text-center bg-gray-100">
          <ul>
            <li className="px-3 py-2 text-sm cursor-pointer ">
              Airport Name : {props.nameEnd}
            </li>
            <li className="px-3 py-2 text-sm cursor-pointer ">
              Date of arival : {props.dateEnd}
            </li>
            <li className="px-3 py-2 text-sm cursor-pointer ">
              Time of arrival  : {props.timeEnd}
            </li>

          </ul>
        </div>
        <div className="col-span-1 text-center ">
          <ul>
            <li className="px-3 py-2 text-sm cursor-pointer ">
              Travel Time : 2hrs : 35min
            </li>
          </ul>
        </div>
        <div className="col-span-1 text-center bg-gray-100">
          <ul>
            <li className="px-3 py-2 text-sm cursor-pointer ">
              Airport Name : {props.nameStart}
            </li>
            <li className="px-3 py-2 text-sm cursor-pointer ">
              Date of take off: {props.dateStart}
            </li>
            <li className="px-3 py-2 text-sm cursor-pointer">
              Time of take off : {props.timeStart}
            </li>

          </ul>
        </div>
      </div>
    </>

  )
}

export default BestData