import React,{useState,useEffect} from 'react';
import ReactReadMoreReadLess from 'react-read-more-read-less';
const url="https://course-api.com/react-tours-project";

function App() {
  let [data,setData]=useState([]);

  const getData=async () => {
    const response=await fetch(url);
    const data=await response.json();
    setData(data);
  };


  useEffect(() => {
    getData();
  },[]);

  return (
    <>
      <h3 className='text-3xl font-bold underline text-blue-600'>Our Tours</h3>
      <ul className="users">
        {data.map((place) => {
          const {id,name,info,image,price}=place;
          return (
            <div  key={id} className="max-w-sm rounded overflow-hidden shadow-lg">
            <li>
              <img  className="w-full" src={image} alt={name} />
                <div className='px-6 py-4'>
                  <div>
                <h4>{name}</h4>
                    <h5>{price}</h5>
                    </div>
                 <ReactReadMoreReadLess
        charLimit={200}
        readMoreText={"Read more ▼"}
        readLessText={"Read less ▲"}
        readMoreClassName="read-more-less--more"
        readLessClassName="read-more-less--less"
      >
        {info}
      </ReactReadMoreReadLess>
              </div>
                <button className="border-2 border-rose-600 text-rose-600" onClick={() => {
                   const removeData= (id) => {
                     const newData = data.filter((i)=>i.id !== id)
                     setData(newData);
                     console.log(place.id)
                   };
                  removeData(place.id)
              }}>Not Intrested</button>
            </li>
              </div>
          );
        })}
      </ul>
      <button className="border-2 border-blue-600 bg-blue-700 text-white" onClick={() => {
         const getData=async () => {
    const response=await fetch(url);
    const data=await response.json();
    setData(data);
         };
        getData()
      }}>Refresh</button>
    </>
  )
}

export default App;
