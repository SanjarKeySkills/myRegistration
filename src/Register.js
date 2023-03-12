import { useState } from "react";

const Register = () => {
    const [id, idchange] = useState("");
    const [name, namechange] = useState("");
    const [password, passwordchange] = useState("");
    const [email, emailchange] = useState("");
    const [phone, phonechange] = useState("");
    const [country, countrychange] = useState("");
    const [address, addresschange] = useState("");
    const [gender, genderchange] = useState("");

    const handlesubmit = (e) => {
        e.preventDefault();
        let regobj = {
            id,
            name,
            password,
            email,
            phone,
            country,
            address,
            gender,
        };
        console.log(regobj);
    };
    return (
        <div>
            <div>
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>
                        <div className="card">
                            <div className="card-header">
                                <h1>User registration</h1>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label>
                                                User Name
                                                <span className="errmsg">
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                value={id}
                                                onChange={(e) =>
                                                    idchange(e.target.value)
                                                }
                                                className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label>
                                                Password
                                                <span className="errmsg">
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                value={password}
                                                onChange={(e) =>
                                                    passwordchange(
                                                        e.target.value
                                                    )
                                                }
                                                type="password"
                                                className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label>
                                                Full name
                                                <span className="errmsg">
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                value={name}
                                                onChange={(e) =>
                                                    namechange(e.target.value)
                                                }
                                                className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label>
                                                Email
                                                <span className="errmsg">
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                value={email}
                                                onChange={(e) =>
                                                    emailchange(e.target.value)
                                                }
                                                className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label>
                                                Phone number
                                                <span className="errmsg">
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                value={phone}
                                                onChange={(e) =>
                                                    phonechange(e.target.value)
                                                }
                                                className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label>
                                                Country
                                                <span className="errmsg">
                                                    *
                                                </span>
                                            </label>
                                            <select
                                                value={country}
                                                onChange={(e) =>
                                                    countrychange(
                                                        e.target.value
                                                    )
                                                }
                                                className="form-control">
                                                <option value="kyrgyz">
                                                    Kyrgyzstan
                                                </option>
                                                <option value="uzbek">
                                                    Uzbekistan
                                                </option>
                                                <option value="ukraine">
                                                    Ukraine
                                                </option>
                                                <option value="singapore">
                                                    Singapore
                                                </option>
                                            </select>
                                            <input
                                                value={id}
                                                className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>
                                                Address
                                                <span className="errmsg">
                                                    *
                                                </span>
                                            </label>
                                            <textarea
                                                value={address}
                                                onChange={(e) =>
                                                    addresschange(
                                                        e.target.value
                                                    )
                                                }
                                                name=""
                                                id=""
                                                cols="30"
                                                rows="3"
                                                className="form-control"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label>Gender</label>
                                            <br />
                                            <br />
                                            <input
                                                type="radio"
                                                checked={gender === "male"}
                                                onChange={(e) =>
                                                    genderchange(e.target.value)
                                                }
                                                name="gender"
                                                value="male"
                                                className="app-check"></input>
                                            <label>Male</label>
                                            <input
                                                type="radio"
                                                checked={gender === "female"}
                                                onChange={(e) =>
                                                    genderchange(e.target.value)
                                                }
                                                name="gender"
                                                value="female"
                                                className="app-check"></input>
                                            <label>Female</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <button
                                    type="submit"
                                    className="btn btn-primary">
                                    Register
                                </button>
                                <a
                                    href="invoiceplus.kg"
                                    className="btn btn-danger">
                                    Back
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
