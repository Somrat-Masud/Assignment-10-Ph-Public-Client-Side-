import Swal from 'sweetalert2'
const AddProducts = () => {
        const handleSubmit = event => {
            event.preventDefault();
            const form = event.target;
            const name = form.name.value;
            // const brand  = form.brand.value;
            const ChoiceYourType = form.ChoiceYourType.value;
            const Price = form.Price.value;
            const description = form.description.value;
            const Rating = form.Rating.value;
            const Image = form.Image.value;
           

            const newBrands = { name , ChoiceYourType, Price, description,Rating, Image, }
            console.log(newBrands);
    
            // send data to the server
            fetch('https://assignment-10-backend-server-m8smqtcbq-somrat-masuds-projects.vercel.app/brands', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newBrands)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.insertedId){
                        Swal.fire({
                            title: 'Success!',
                            text: 'Added Successfully',
                            icon: 'success',
                            confirmButtonText: 'Added'
                          })
                    }
                })
        }
    
    
        return (
            <div className="bg-[#F4F3F0] p-24">
                <h2 className="text-3xl font-extrabold justify-center text-center">Add Products</h2>
                <form onSubmit={handleSubmit}>
               <div className='w-[550px] mx-auto'>
               <div className="mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-bold text-xl">Image</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="Image" placeholder="Image URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className=" mb-8">
                        <div className="form-control md:w-full">
                            <label className="label">
                                <span className="label-text font-bold text-xl"> Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
          
                    <div className=" mb-8">
                        <div className="form-control md:w-full">
                            <label className="label">
                                <span className="label-text font-bold text-xl">Brand Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="brand " placeholder="Brand Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="form-control md:w-full mb-8 ">
                            <label className="label">
                                <span className="label-text font-bold text-xl">Choice Your Type</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="ChoiceYourType" placeholder="Choice Your Brand" className="input input-bordered w-full" />
                            </label>
                     </div>
                    <div className=" mb-8">
                        <div className="form-control md:w-full">
                            <label className="label">
                                <span className="label-text font-bold text-xl">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="Price" placeholder="Price" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="form-control md:w-full mb-8">
                            <label className="label">
                                <span className="label-text font-bold text-xl ">Short description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="description" placeholder="description" className="input input-bordered w-full" />
                            </label>
                     </div>
                     <div className="form-control md:w-full mb-8">
                            <label className="label">
                                <span className="label-text font-bold text-xl">Rating</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="Rating" placeholder="Rating" className="input input-bordered w-full" />
                            </label>
                     </div>
                     <input type="submit" value="Add button" className="btn btn-primary w-full" />
               </div>
                  
                 
                </form>
            </div>
        );
    };
    
    export default AddProducts;