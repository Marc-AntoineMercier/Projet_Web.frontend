import { useNavigate, Link } from "react-router-dom"

function Login() {

    const navigate = useNavigate("")
    const submit = (e) => {
        e.preventDefault();
        navigate("/dashboard")
    }

    return (
        <div>
            <form method="post" className="card-body bg-white text-dark rounded m-5 p-3" onSubmit={submit}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className= "form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <Link to={"/register"}>Register</Link>
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login