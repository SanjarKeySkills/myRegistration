const Register = () => {
    return (
        <div>
            <div>
                <div className="offset-lg-3 col-lg-6">
                    <form className="container">
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
                                            <input className="form-control"></input>
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
                                                type="password"
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
                                                type="password"
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
                                                type="password"
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
                                            <select className="form-control">
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
                                                type="password"
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
                                                name=""
                                                id=""
                                                cols="30"
                                                rows="10"
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
                                                name="gender"
                                                value="male"
                                                className="app-check"></input>
                                            <label>Male</label>
                                            <input
                                                type="radio"
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
                                <a href="#" className="btn btn-danger">
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
