
import toast from "react-hot-toast";
import useAuth from "../../../Hooks/useAuth";
import { Link } from "react-router-dom";


const Register = () => {
    const {createUser} = useAuth()
    const handleSubmit = event =>{
        
event.preventDefault();

const name = event.target.name.value;
const email = event.target.email.value;
const password = event.target.password.value;
console.log(name, email, password, )


// valitaion

if(password.length < 6  ){
    toast.error('Password must at last 6 cheracters');
    return;
}

    
if (password.search(/[A-Z]/) < 0) {
   toast.error("Your password must least one uppercase letter")
   }

   if (password.search(/[!@#\$%\^&\*_]/) < 0) {
    toast.error("Your password must contain at least specialcharters @#\$%\^&\*_ ")
}


// crateUser
createUser(email, password)

.then(res => {
  toast.success('Register Successfully')
})
   
.catch(error => console.log(error))



    };

    
    return (
        <div>
      

        <div>
        <div className="hero min-h-screen bg-base-200">
<div className="hero-content flex-col lg:flex-row-reverse">
<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
  <form onSubmit={handleSubmit} >
  <div className="card-body">
    <div className="form-control">
      <label className="label">
        <span className="label-text">name</span>
      </label>
      <input type="name" name="name" placeholder="name" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" name="email" placeholder="email" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input type="text" name="password" placeholder="password" className="input input-bordered" required />
      
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Photo Url</span>
      </label>
      <input type="photo" name="Photo" placeholder="photo" className="input input-bordered" required />
      
    </div>

    <div className="form-control mt-6">
     <button type="submit" className="btn btn-primary">Register</button>
     <Link className="text-center font-bold mt-2" to='/login'>Please Login</Link>
    </div>
  </div>
  </form>
</div>
</div>
</div>
        </div>
    </div>
    );
};

export default Register;