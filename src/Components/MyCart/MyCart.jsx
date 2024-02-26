import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
// import Swal from "sweetalert2";

const MyCart = () => {
    const users = useLoaderData()
    const [updateUser, setUpdateUser] = useState(users)
    console.log(users)
    const handleDelete = (_id) => {
    console.log(_id)


Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
}).then((result) => {
    if (result.isConfirmed) {

        fetch(`https://assignment-10-backend-server-8xp4nnup5-somrat-masuds-projects.vercel.app/brands/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    const filterData = updateUser.filter(item => item._id !== _id)
                    setUpdateUser(filterData)
                    Swal.fire(
                        'Deleted!',
                        'Your Data has been deleted.',
                        'success'
                    )
                    // const remaining = coffees.filter(cof => cof._id !== _id);
                    // setCoffees(remaining);
                }
            })

    }
})
    }
 
    return (
        <div>
            {/* Slider */}
            <div className="carousel w-full ">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/fxgYq3L/9-99157-toyota-car-png-transparent-images-red-toyota-vios.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/m8BWm5t/images-1.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/t3YpMTD/4-2-toyota-car-png-image.png" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/fxgYq3L/9-99157-toyota-car-png-transparent-images-red-toyota-vios.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
<div>
    {/* 4 pik show */}
    
</div>
<h1 className="text-4xl font-semibold text-center">Choice your Car </h1>
            {/* <h1>{updateUser.length}</h1> */}
            <div className="grid grid-cols-2 gap-4 py-28" >
           
                {
                    updateUser.map((user) => 
                    <div key={user._id}>
                        <div>
                        <div className="">
                           <div className="card h-[550px]  bg-base-100 shadow-xl">
                            <figure><img className="w-[400px]" src={user.Image} alt="Shoes" /></figure>
                            <div className="card-body">
                             <h2 className="card-title">    
                              <div className="badge badge-secondary text-xl"> Name: {user.name}</div>
                              </h2>
                              <h2 className="text-2xl">Price:{user.Price}</h2>
                              <h2 className="text-2xl">Rating:{user.Rating}</h2>

                              <div className="flex gap-7 rounded"> 
                              <h2 className="text-2xl"> {user.ChoiceYourBrand}</h2>
                              <h2 className="text-2xl">{user.description}</h2>
                              </div>
                              <p>{user.description}</p>
                             <div className="flex space-x-40">
                             <button onClick={()=> handleDelete(user._id)} type="submit" className="btn btn-primary px-20">Delete</button>
                              <Link to={`/brands/${user._id}`}>
                              <button type="submit" className="btn btn-accent px-20">Update</button>
                              </Link>
                             </div>
                            </div>
                            </div>
                         </div>
                        </div>
            
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default MyCart;