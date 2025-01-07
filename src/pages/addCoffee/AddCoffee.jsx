import { IoArrowBack } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function AddCoffee() {
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const price = form.price.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const coffeesObj = {
            name,
            chef,
            price,
            supplier,
            taste,
            category,
            details,
            photo,
        };
        fetch('http://localhost:5000/coffees', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(coffeesObj),
        })
            .then((res) => res.json())
            .then((data) => {
                e.target.reset()
                if (data.insertedId) {
                    Swal.fire({
                        title: "Good job!",
                        text: "Wow! You added Coffee",
                        icon: "success"
                    });
                }
            })
    };


    return (
        <div className="bg-red-50">
            <div>
                <Link to="/" className="flex items-center ml-4 p-5">
                    <IoArrowBack className="mr-2" /> Back to home
                </Link>
            </div>
            <div className="w-7/12 mx-auto">
                <div className="text-center p-5">
                    <h1 className="text-3xl font-bold">Add New Coffee</h1>
                    <p className="mt-5 text-slate-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum fugiat architecto esse facilis sit atque aut velit reprehenderit quibusdam, nesciunt, rem facere iusto. Harum quod accusamus quidem quae officia suscipit, illo ducimus reiciendis perferendis? Enim est exercitationem nobis aperiam voluptates?
                    </p>
                </div>
            </div>
            <div className="mt-5 w-8/12 mx-auto bg-zinc-100">
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="p-4">
                            <h3 className="font-semibold mb-2">Coffee Name</h3>
                            <input name="name" type="text" placeholder="Coffee Name" className="w-full p-2 border rounded mb-3" />
                            <h3 className="font-semibold mb-2">Chef</h3>
                            <input name="chef" type="text" placeholder="Chef Name" className="w-full p-2 border rounded mb-3" />
                            <h3 className="font-semibold mb-2">Price</h3>
                            <input name="price" type="text" placeholder="Price" className="w-full p-2 border rounded mb-3" />
                            <h3 className="font-semibold mb-2">Taste</h3>
                            <input name="taste" type="text" placeholder="Taste" className="w-full p-2 border rounded mb-3" />
                        </div>
                        <div className="p-4">
                            <h3 className="font-semibold mb-2">Category</h3>
                            <input name="category" type="text" placeholder="Category" className="w-full p-2 border rounded mb-3" />
                            <h3 className="font-semibold mb-2">Details</h3>
                            <input name="details" type="text" placeholder="Details" className="w-full p-2 border rounded mb-3" />
                            <h3 className="font-semibold mb-2">Supplier</h3>
                            <input name="supplier" type="text" placeholder="Supplier Name" className="w-full p-2 border rounded mb-3" />
                            <h3 className="font-semibold mb-2">Photo URL</h3>
                            <input name="photo" type="text" placeholder="Photo URL" className="w-full p-2 border rounded mb-3" />
                        </div>
                    </div>
                    <button onClick={() => navigate('/')} type="submit" className="w-full bg-yellow-700 py-2 px-4">
                        Add Coffee
                    </button>
                </form>
            </div>
        </div>
    );
}
