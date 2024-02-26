
const About = () => {
    return (
        <div >
            <h1 className="text-center text-4xl font-bold mt-6">About Us</h1>
            <div className="flex ">
            <div className="w-[550px] justify-between ml-5 mt-10">
                <h1 className="text-2xl font-extrabold">The About Us page of your website is an essential source of information. <br /></h1>
                <p className="text-xl ">The best deals you everA car is a vehicle that has wheels, carries a small number of passengers, and is moved by an engine or a motor. Cars are also called automobiles or motor vehicles. Trucks and buses are motor vehicles as well. However, trucks and buses are larger than cars, and they carry heavier loads</p>
                <button className="btn btn-secondary mt-5 mb-3">Find Details</button>
            </div>
            <div >
               <div className="flex mt-8 ml-40">
              <div className="">
              <img className="" src="https://i.ibb.co/d6JDFt7/download-2.jpg" alt="" />
              </div>
                <div className="">
                    <h1 className="text-2xl font-bold mt-3">Cross Country Drive</h1>
                    <p className="mt-4 font-bold">A Driver is a professional who drives <br /> clients around in an efficient, safe and timely manner.</p>
                </div>
               </div>
               <div className=" flex ml-40 ">
              <div className="ml-6">
              <img className="" src="https://i.ibb.co/WG8VHJ1/images-2.jpg" alt="" />
              </div>
                <div className="ml-4">
                    <h1 className="text-2xl font-bold mt-3 ">All Inclusive Pricing</h1>
                    <p className="mt-4 font-bold">A Driver is a professional who drives <br /> clients around in an efficient, safe and timely manner.</p>
                </div>
               </div>
               <div className=" flex  ml-40 ">
              <div className="">
              <img className="mb-2" src="https://i.ibb.co/JC57N3z/download-2.png" alt="" />
              </div>
                <div className="">
                    <h1 className="text-2xl font-bold mt-8">No Hidden Charges</h1>
                    <p className="mt-4 font-bold mb-2">A Driver is a professional who drives <br /> clients around in an efficient, safe and timely manner.</p>
                </div>
               </div>
            </div>
        </div>
        </div>
    );
};

export default About;