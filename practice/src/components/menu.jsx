import React from 'react';

function Menu() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="nav nav-pills nav-fill" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="pills-home-tab" href="#pills-home" role="tab" aria-selected="true">Home</a>
                        </li>
                        <li class="nav-item">
                            <a className="nav-link" id="pills-profile-tab" href="#pills-profile" role="tab" aria-selected="false">Profile</a>
                        </li>
                        <li class="nav-item">
                            <a className="nav-link" id="pills-contact-tab" href="#pills-contact" role="tab" aria-selected="false">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
export default Menu;