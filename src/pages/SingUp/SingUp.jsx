import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const SingUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const handleSingUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUserProfile(result.user, name)
        console.log(user);
      })
      .catch((error) => console.log(error));

  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="mr-12 w-1/2">
          <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center">Login now!</h1>
            <form onSubmit={handleSingUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input type="text" name="name" placeholder="Enter Your Name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <input type="email" name="email" placeholder="Enter Your Email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Password</span>
                </label>
                <input type="password" name="password" placeholder="Enter Your Password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input type="submit" className="btn btn-primary" value="Sing Up" />
              </div>
            </form>
            <p className="my-4 text-center">
              Already have an account?
              <Link className="text-orange-600 font-bold" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
