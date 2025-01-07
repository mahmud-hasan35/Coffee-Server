import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { FaCoffee } from "react-icons/fa";
import { MdVisibility } from "react-icons/md";
import { Link } from "react-router-dom";


export default function CoffeeCards() {
    return (
        <div>
            <div className="p-5">
                <button className="text-white bg-green-500 py-2 px-4 mr-10">Coffees</button>
                <Link to={'/AddCoffee'} className="text-white bg-orange-900 py-2 px-4 ">Add a Coffee</Link>
            </div>

            <h1 className=" text-center text-3xl font-bold mb-5">Our Popular Product</h1>

            <div className="flex justify-center">
                <Link to={'/AddCoffee'} className="bg-yellow-500 text-white p-1 px-3 flex items-center">
                    Add Coffee <FaCoffee className="ml-2" />
                </Link>
            </div>

            <div className="grid grid-cols-3 mt-5 p-4 gap-3">
                <div className="flex gap-3 items-center border justify-center">
                    <img src="/src/assets/images/1.png" alt="" />
                    <div className="flex flex-col gap-2 font-semibold">
                        <p>name: Amarican Coffee </p>
                        <span>Chef </span>
                        <p>Price</p>
                    </div>
                    <div className="ml-3 flex flex-col gap-3 items-center text-2xl text-white">
                        <MdVisibility className="bg-yellow-600 p-1 rounded" />

                        <Link to={'EditCard'}>
                            <AiOutlineEdit className="bg-amber-800 p-1 rounded" />
                        </Link>

                        <AiOutlineDelete className="bg-violet-800 p-1 rounded" />
                    </div>

                </div>
                <div className="flex gap-4 items-center border justify-center">
                    <img src="/src/assets/images/1.png" alt="" />
                    <div className="flex flex-col gap-2 font-semibold">
                        <p>name: Amarican Coffee </p>
                        <span>Chef </span>
                        <p>Price</p>
                    </div>
                    <div className="ml-3 flex flex-col gap-3 items-center text-2xl text-white">
                        <MdVisibility className="bg-yellow-600 p-1 rounded" />
                        <Link to={'/EditCard'}>
                            <AiOutlineEdit className="bg-amber-800 p-1 rounded" />
                        </Link>
                        <AiOutlineDelete className="bg-violet-800 p-1 rounded" />
                    </div>

                </div>
                <div className="flex gap-4 items-center border justify-center">
                    <img src="/src/assets/images/1.png" alt="" />
                    <div className="flex flex-col gap-2 font-semibold">
                        <p>name: Amarican Coffee </p>
                        <span>Chef </span>
                        <p>Price</p>
                    </div>
                    <div className="ml-3 flex flex-col gap-3 items-center text-2xl text-white">
                        <MdVisibility className="bg-yellow-600 p-1 rounded" />
                        <Link to={'/EditCard'}>
                            <AiOutlineEdit className="bg-amber-800 p-1 rounded" />
                        </Link>
                        <AiOutlineDelete className="bg-violet-800 p-1 rounded" />
                    </div>

                </div>
               

            </div>
        </div>
    )
}
