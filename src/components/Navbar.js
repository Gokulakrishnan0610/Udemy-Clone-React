import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faMagnifyingGlass, faBell, faUser, faBars } from '@fortawesome/free-solid-svg-icons'


function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__s1">
                <h1 className="navbar__s1__title">Udemy</h1>
            </div>
            <div className="navbar__s2">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input type="text" placeholder="Search for anything here. Tech, Business, Art... "></input>
            </div>
            <div className="navbar__s3">
                <p>Courses</p>
                <div className="mylearning">
                    <p>My Learning</p>
                    <div className="mylearning__p">
                        <p>You did not purchase anything yet</p>
                    </div>
                </div>
                <FontAwesomeIcon icon={faCartShopping} />
                <FontAwesomeIcon icon={faBell} />
                <FontAwesomeIcon icon={faUser} />
            </div>
            <div className="navbar__s4">
                <FontAwesomeIcon icon={faBars} />
            </div>
        </div>
    )
}

export default Navbar