import './Header.css';

export const Header = () => {
  return (
    <header className="navBarContainer">
      <img className="img-logo" src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png" alt="Netflix Logo" />
      <div className='searchContainer'>
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="Search" />
      </div>
    </header>
  )
}
