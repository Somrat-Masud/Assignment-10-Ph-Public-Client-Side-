import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
    const singleUpdateData = useLoaderData();
    console.log(singleUpdateData)
const handleUpdate = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    // const brand  = form.brand.value;
    const ChoiceYourBrand = form.ChoiceYourBrand.value;
    // const ChoiceYourType = form.ChoiceYourType.value;
    const Price = form.Price.value;
    const Rating = form.Rating.value;
    const Image = form.Image.value;
    const newBrands = { name , ChoiceYourBrand, Price,Rating, Image }
    console.log(newBrands);

fetch(`https://assignment-10-backend-server-m8smqtcbq-somrat-masuds-projects.vercel.app/brands/${singleUpdateData._id}`, {
    method: 'PUT',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(newBrands)
})
.then(res => res.json())
.then(data => {
    console.log(data);
    if (data.modifiedCount > 0) {
        Swal.fire({
            title: 'Success!',
            text: 'Updated Successfully',
            icon: 'success',
            confirmButtonText: 'Updated'
        })
    }
})

}


    
    return (
        <div>
            
            <form className="bg-slate-200" onSubmit={handleUpdate} >
            <h2 className="text-4xl text-center font-bold"> Update Details </h2>
                <div className="w-[500px] mx-auto ">
                <div className="mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-bold text-xl">Image</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="Image" defaultValue={singleUpdateData?.Image} placeholder="Image URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className=" mb-8">
                        <div className="form-control md:w-full">
                            <label className="label">
                                <span className="label-text font-bold text-xl"> Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" defaultValue={singleUpdateData?.name} placeholder="Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
          
                    <div className=" mb-8">
                        <div className="form-control md:w-full">
                            <label className="label">
                                <span className="label-text font-bold text-xl">Brand Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="brand " defaultValue={singleUpdateData?.brand} placeholder="Brand Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="form-control md:w-full mb-8 ">
                            <label className="label">
                                <span className="label-text font-bold text-xl">Choice Your Type</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="ChoiceYourBrand" defaultValue={singleUpdateData?.ChoiceYourBrand} placeholder="Choice Your Brand" className="input input-bordered w-full" />
                            </label>
                     </div>
                    <div className=" mb-8">
                        <div className="form-control md:w-full">
                            <label className="label">
                                <span className="label-text font-bold text-xl">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="Price" defaultValue={singleUpdateData?.Price} placeholder="Price" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                   
                     <div className="form-control md:w-full mb-8">
                            <label className="label">
                                <span className="label-text font-bold text-xl">Rating</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="Rating" defaultValue={singleUpdateData?.Rating} placeholder="Rating" className="input input-bordered w-full" />
                            </label>
                     </div>
                     <input type="submit" value="Submit Button" className="btn btn-primary text-center ml-20 mb-4 px-20" />
                </div>
                   
                </form>
        </div>
    );
};

export default Update;