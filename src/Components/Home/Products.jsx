

const Products = () => {
  
 
    return (

        <div className="grid grid-cols-3">     
      
        <div className="card  mt-4  w-[300px] h-[300px]  bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
            <img  src="https://i.ibb.co/NS8pDMB/caed7.png" alt="Shoes" className="rounded-xl w-[250px]" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title text-xl font-semibold"> Brand Name:Tesla</h2>  
        </div>
        </div>

        <div className="card w-[300px] h-[300px] bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
            <img src="https://i.ibb.co/XV8XCLM/cardimg1.png" alt="Shoes" className="rounded-xl w-[250px]" />
        </figure>
        <div className="card-body mt-4  items-center text-center">
            <h2 className="card-title text-xl font-semibold"> Brand Name:BMW</h2>  
        </div>
        </div>

        <div className="card mt-4  w-[300px] h-[300px] bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
            <img src="https://i.ibb.co/X51StWj/card6.png" alt="Shoes" className="rounded-xl w-[250px]" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title text-xl font-semibold"> Brand Name:BERTONE</h2>  
        </div>
        </div>
        <div className="card  mt-4  w-[300px] h-[300px] bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
            <img src="https://i.ibb.co/gRqPsQ6/cardimg4.png" alt="Shoes" className="rounded-xl w-[250px]" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title text-xl font-semibold"> Brand Name:ASTONE MERTIN</h2>  
        </div>
        </div>
        <div className="card w-[300px] mt-4  h-[300px] bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
            <img src="https://i.ibb.co/yhF0J2c/5ec3e1ee58550c0004427739.png" alt="Shoes" className="rounded-xl w-[250px]" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title text-xl font-semibold"> Brand Name:TOYOTA</h2>  
        </div>
        </div>
        <div className="card w-[300px] mt-4 h-[300px] bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
            <img src="https://i.ibb.co/SJYVCtH/cardimg2.png" alt="Shoes" className="rounded-xl w-[250px]" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title text-xl font-semibold"> Brand Name:AMG</h2>  
        </div>
        </div>
    </div>
    );
};

export default Products;