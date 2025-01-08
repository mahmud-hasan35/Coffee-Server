import { Link } from "react-router-dom";


export default function Login() {
  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
          <div className="flex justify-between items-center">
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">If you dont have a account please</a>
          </label>
          <Link to={'/register'}>

         Registration
          </Link>

          </div>
        </div>
        <div className="form-control mt-6">
          <Link to={'/register'} className="btn btn-primary">Login</Link>
        </div>
      </form>
    </div>
  </div>
</div>
  )
}

