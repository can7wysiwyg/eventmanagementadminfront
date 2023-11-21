import axios from "axios";
import { useState } from "react";

function Login() {
  const [values, setValues] = useState({ adminEmail: "", adminPassword: "" });

  const handleValues = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async(event) => {
    event.preventDefault()

    const res = await axios.post('/admin/login', {...values})
    localStorage.setItem("adminToken", res.data.accesstoken);
    if (res.data.msg) {
     alert(res.data.msg)
    } else {
      window.location.href = "/";
    }

  }

  return (
    <>
      <div className="container  ">
        <div>
          <div className="row justify-content-md-center">
            <div className="col-md-6">
              <form onSubmit={handleSubmit} className="form" style={{ marginTop: "5rem" }}>
                <div>
                  <input
                    className="form-control"
                    type="text"
                    name="adminEmail"
                    value={values.adminEmail}
                    onChange={handleValues}
                    placeholder="your email"
                  />
                </div>

                <div>
                  <input
                    className="form-control"
                    type="password"
                    name="adminPassword"
                    value={values.adminPassword}
                    onChange={handleValues}
                    placeholder="your password"
                  />
                </div>
                <button className="btn btn-secondary">login now</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
