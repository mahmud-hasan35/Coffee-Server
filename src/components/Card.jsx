import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { MdVisibility } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Card({coffee,handleDelete}) {
    const {name, chef,price, _id}= coffee;


  return (
    <>
      <div className="flex gap-3 items-center hover:bg-slate-100 bg-slate-50 shadow-md justify-center">
                    <img src="/src/assets/images/1.png" alt="" />
                    <div className="flex flex-col gap-2 font-semibold">
                        <h2 className="text-lg font-semibold text-gray-800">
                            Name: <span>{name} </span>
                        </h2>
                        <p>
                           Chef: <span>{chef} </span>
                        </p>
                        <p>
                         Price: <span>{price}</span>
                        </p>
                        
                    </div>
                    <div className="ml-3 flex flex-col gap-3 items-center text-2xl text-white">
                        <MdVisibility className="bg-yellow-600 p-1 rounded" />

                        <Link to={`/updateCard/${_id}`}>
                            <AiOutlineEdit className="bg-amber-800 p-1 rounded" 
                            title="Edit"
                            />
                        </Link>

                        <button onClick={()=>handleDelete(_id)}>
                        <AiOutlineDelete className="bg-violet-800 p-1 rounded" />

                        </button>
                    </div>

                </div>
    </>
  )
}
