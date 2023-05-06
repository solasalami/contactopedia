import logo from '../images/react.png';

const Header = () => {  

    return (
        <div className="pt-3 pl-2" style={{borderBottom:"1px solid #777"}}>
            <div className='float-left'>
             <img src={logo} alt="logo" style={{height:"35px",verticalAlign:"top"}}  />
             <span className='h2 pt-4 m-2 text-white-50'>React Course - ContactOPedia</span> 
            </div>
           
        </div>
    );

}

export default Header;