import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import UserContext from '../Context/UserContext';

function Navbar() {
    const userdata = useContext(UserContext);
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">

                <h2>Student-Teacher Details</h2>
                <div>
                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">{userdata.username}</span>
                    <img className="img-profile rounded-circle" style={{ width: 30 }}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBmkq_M7TrkMDuRF682kID53FC5pfaHQJZuw&usqp=CAU" />
                    <Link className="btn btn-outline-danger btn-sm" to="/">Logout</Link>
                </div>

            </div>
        </nav>

    )
}

export default Navbar