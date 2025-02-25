import '../CSS/Navbar.css';
function navbar(){
    return (
      <main>
        <div className="navbar-container">
          <ul className="navbar">
            <li className="logo">Portfolio</li>
            <li className="linav">Home</li>
            <li className="linav">About</li>
            <li className="linav">Experience</li>
            <li className="linav">Education</li>
            <li className="linav">Contact</li>
          </ul>
        </div>
      </main>
    );
}

export default navbar;