import './HeaderSection.css'
import '../responsive.css'
import logo from '../../assets/HeaderComponent/Logo.png'
import profile from '../../assets/HeaderComponent/profile.png'
import search from '../../assets/HeaderComponent/search.png'
import shop from '../../assets/HeaderComponent/shop.png'
import Vector from '../../assets/HeaderComponent/Vector.png'
import '../../font/font.css'

function HeaderSection(){
    
    return(
        <div className="row">
        <div className="col-2 headerLogo header">
            <img src={logo} alt="" className="logo" />
        </div>
        <div className="col-3 headerSearch header">
            <div className="searchBar">
                <div className="searchIcon">
                    <img src={search} alt="" id="searchPng" />
                    <input 
                        type="text" 
                        placeholder="Search" 
                        id="searchInput" 
                        style={{ border: 0, backgroundColor: 'transparent', fontFamily: "'SF Pro Display', sans-serif", color: '#656565', fontSize: '14px', width: '200px', height: '30px', position: 'absolute', marginLeft: '10px' }} 
                    />
                </div>
            </div>
        </div>
        <div className="col-2 headerNav header">
            <div className="navbar">
                <a href="" className="navTexts">Home</a>
                <a href="" className="navTexts">About</a>
            </div>
        </div>
        <div className="col-2 headerNav header">
            <div className="navbar">
                <a href="" className="navTexts">Contact Us</a>
                <a href="" className="navTexts">Blog</a>
            </div>
        </div>
        <div className="col-3 headerIcons header">
            <div className="iconBar">
                <a href="" className="icons">
                    <img src={Vector} alt="" className="iconImages" />
                </a>
                <a href="" className="icons">
                    <img src={shop} alt="" className="iconImages" />
                </a>
                <a href="" className="icons">
                    <img src={profile} alt="" className="iconImages" />
                </a>
            </div>
        </div>
    </div>
    )
}
export default HeaderSection