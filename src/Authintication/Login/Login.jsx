import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
const Login = () => {
    const  {signIn,googleLogin} = useAuth()
    const handleSubmitLogin = event =>{
        
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        
        
        // valitaion
        if(password.length < 6){
            toast.error('Password must at last 6 cheracters');
            return;
        }
          // crateUser
        signIn(email, password)
        .then(res=>  {
            toast.success('login  successfully')
        })
        .catch(error=>{
            toast.error(' worng email or password') 
        })
   };
   const handleSubmitgoogleLogin = (event) =>{
    event()
    .then(res => console.log(res.user))
    .error(error=> console.log(error))
   };

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                  <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmitLogin} >
                    <div className="card-body">
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
                        <div className="form-control mt-6">
                        <button type="submit" name="submit" className="btn btn-primary">Login</button>
                        
                        <Link className="text-center font-bold mt-2" to='/register'>Please Register</Link>
                        </div>
                      
                    </div>
                    </form>
                    <button onClick={()=>handleSubmitgoogleLogin(googleLogin)} className="text-bold text-2xl btn btn-neutral">Google</button>
                    </div>
                </div>
                </div>
           
        </div>
  
    );
};

export default Login;

