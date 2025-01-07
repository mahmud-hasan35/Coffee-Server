
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";


export default function EditCard() {
  return (
    <div className="bg-red-50">
        <div>
            <Link to={'/'} className="flex  items-center ml-4 p-5"><IoArrowBack />Back to home</Link>
        </div>
        <div className="w-7/12 mx-auto ">
        <div className="text-center p-5 ">
            <h1 className="text-3xl font-bold">Edit Coffee Card</h1>
            <p className="mt-5 text-slate-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum fugiat architecto esse facilis sit atque aut velit reprehenderit quibusdam, nesciunt, rem facere iusto. Harum quod accusamus quidem quae officia suscipit, illo ducimus reiciendis perferendis? Enim est exercitationem nobis aperiam voluptates?</p>
        </div>
        </div>
        <div className="mt-5 w-8/12 mx-auto bg-zinc-100">
        <div className="grid grid-cols-2 gap-3">
            <div className="p-4">
            <form>
                <h3 className="font-semibold mb-2">Name</h3>
                <input type="text" placeholder="your name" className="w-full p-2 border rounded mb-3"/>
                <h3 className="font-semibold mb-2">Name</h3>
                <input type="text" placeholder="your name" className="w-full p-2 border rounded mb-3"/>
                <h3 className="font-semibold mb-2">Name</h3>
                <input type="text" placeholder="your name" className="w-full p-2 border rounded mb-3"/>
                <h3 className="font-semibold mb-2">Name</h3>
                <input type="text" placeholder="your name" className="w-full p-2 border rounded mb-3"/>
            </form>
            </div>
            <div className="p-4">
            <form>
                <h3 className="font-semibold mb-2">Name</h3>
                <input type="text" placeholder="your name" className="w-full p-2 border rounded mb-3"/>
                <h3 className="font-semibold mb-2">Name</h3>
                <input type="text" placeholder="your name" className="w-full p-2 border rounded mb-3"/>
                <h3 className="font-semibold mb-2">Name</h3>
                <input type="text" placeholder="your name" className="w-full p-2 border rounded mb-3"/>
                <h3 className="font-semibold mb-2">Name</h3>
                <input type="text" placeholder="your name" className="w-full p-2 border rounded mb-3"/>
            </form>
            
            </div>
            
        </div>
        <button className="w-full bg-yellow-700 py-2 px-4">Edit Coffee Cards</button>
        </div>
    </div>
  )
}
