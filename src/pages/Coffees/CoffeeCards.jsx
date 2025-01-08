import { useEffect, useState } from "react";
import { FaCoffee } from "react-icons/fa";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import Swal from "sweetalert2";


export default function CoffeeCards() {

    const [coffees, setCoffees] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/coffees')
            .then(res => res.json())
            .then(data => {
                setCoffees(data)
            })
    }, []);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffees/${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then((data) => {
                        const newData = coffees.filter(coffee => coffee._id !== id)
                        setCoffees(newData)
                        if (data.deletedCount > 0) {

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }


    return (
        <div>
            <div className="p-5">
                <button className="text-white bg-green-500 py-2 px-4 mr-10">Coffees</button>
                <Link to={'/AddCoffee'} className="text-white bg-orange-900 py-2 px-4 ">Add a Coffee</Link>
                <Link to={'/login'} className="text-white bg-orange-900 py-2 px-4 ml-3 ">Login</Link>
            </div>

            <h1 className=" text-center text-3xl font-bold mb-5">Our Popular Product</h1>

            <div className="flex justify-center">
                <Link to={'/AddCoffee'} className="bg-yellow-500 text-white p-1 px-3 flex items-center">
                    Add Coffee <FaCoffee className="ml-2" />
                </Link>
            </div>

            <div className="grid grid-cols-3 mt-5 p-4 gap-3">
                {
                    coffees.map(coffee => <Card key={coffee._id} coffee={coffee} handleDelete={handleDelete} />)
                }

            </div>
        </div>
    )
}
