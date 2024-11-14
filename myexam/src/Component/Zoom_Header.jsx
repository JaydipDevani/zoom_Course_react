import React from 'react';
import Zoom_logo from '../Images/Zoom_logo.png';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Profileman from '@mui/icons-material/PermIdentitySharp';
import Shoppingcart from '@mui/icons-material/ShoppingCartOutlined';
import { Link} from 'react-router-dom';

const Zoom_Header = () => {
    // const Search = styled('div')(({ theme }) => ({
    //     position: 'relative',
    //     marginLeft: 0,
    //     width: '100%',
    //     [theme.breakpoints.up('sm')]: {
    //         marginLeft: theme.spacing(1),
    //         width: 'auto',
    //     },
    // }));

    // const SearchIconWrapper = styled('div')(({ theme }) => ({
    //     padding: theme.spacing(0, 2),
    //     height: '100%',
    //     position: 'absolute',
    //     pointerEvents: 'none',
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // }));

    // const StyledInputBase = styled(InputBase)(({ theme }) => ({
    //     width: '100%',
    //     '& .MuiInputBase-input': {
    //         padding: theme.spacing(1, 1, 1, 0),
    //         paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    //         transition: theme.transitions.create('width'),
    //         [theme.breakpoints.up('sm')]: {
    //             width: '12ch',
    //             '&:focus': {
    //                 width: '20ch',
    //             },
    //         },
    //     },
    // }));

    return (
        // <div>
        //     <div classNameName="container-fluid">
        //         <div classNameName="row bg-dark p-2 text-white">
        //             <div classNameName="col-lg-4 col-md-6 col-sm-12">
        //                 <p classNameName='m-0'>Contact Us : +91 123456789</p>
        //             </div>
        //             <div classNameName="col-lg-4 col-md-6 col-sm-12">
        //                 <p classNameName='m-0'>Free shipping & 30-day return or refund guarantee.</p>
        //             </div>
        //             <div classNameName="col-lg-4 col-md-12 col-sm-12">
        //                 <p classNameName='m-0 d-flex justify-content-end'>Email Us : demoexample@gmail.com</p>
        //             </div>
        //         </div>
        //     </div>
        //     <div classNameName="container-fluid shadow-sm position-sticky">
        //         <div classNameName="row py-4 align-items-center">
        //             <div classNameName="col-3">
        //                 <a href="./Zoom_Home">
        //                     <img src={Zoom_logo} alt="Zoom Logo" style={{ maxWidth: '100%', height: 'auto' }} />
        //                 </a>
        //             </div>
        //             <div classNameName="col-5">
        //                 <ul classNameName='list-unstyled d-flex justify-content-between flex-wrap m-0'>
        //                     {['Fashion', 'Accessories', 'Category', 'Collection', 'Outfits'].map(item => (
        //                         <li key={item}>
        //                             <a href="#" classNameName='text-decoration-none' style={{ color: "#666666" }}>{item}</a>
        //                         </li>
        //                     ))}
        //                 </ul>
        //             </div>
        //             <div classNameName="col-4 d-flex align-items-center justify-content-end">
        //                 <Box sx={{ flexGrow: 1, width: "70%", borderRadius: "30px" }}>
        //                     <AppBar position="static" classNameName='rounded-pill' style={{ boxShadow: "none", backgroundColor: "transparent", border: "1px solid #eee" }}>
        //                         <Search>
        //                             <SearchIconWrapper>
        //                                 <SearchIcon style={{ color: "#a5a5a5" }} />
        //                             </SearchIconWrapper>
        //                             <StyledInputBase
        //                                 sx={{ color: "#666666" }}
        //                                 placeholder="search product"
        //                                 inputProps={{ 'aria-label': 'search product' }}
        //                             />
        //                         </Search>
        //                     </AppBar>
        //                 </Box>
        //                 <div style={{ marginLeft: '10px' }}>
        //                     <Profileman sx={{ fontSize: "30px", color: "#666666" }} />
        //                 </div>
        //                 <div style={{ marginLeft: '10px' }}>
        //                     <Shoppingcart sx={{ fontSize: "30px", color: "#666666" }} />
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <div>
            {/* <div classNameName="container-fluid">
                <div classNameName="row bg-dark p-2 text-white">
                    <div classNameName="col-lg-4 col-md-6 col-sm-12">
                        <p classNameName='m-0'>Contact Us : +91 123456789</p>
                    </div>
                    <div classNameName="col-lg-4 col-md-6 col-sm-12">
                        <p classNameName='m-0'>Free shipping & 30-day return or refund guarantee.</p>
                    </div>
                    <div classNameName="col-lg-4 col-md-12 col-sm-12">
                        <p classNameName='m-0 d-flex justify-content-end'>Email Us : demoexample@gmail.com</p>
                    </div>
                </div>
            </div> */}
            <div className='container-fluid'>
                <div className="row bg-dark p-2 text-white">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <p className='m-0'>Contact Us : +91 123456789</p>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <p className='m-0'>Free shipping & 30-day return or refund guarantee.</p>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 md-justify-end-none">
                        <p className='m-0 d-flex justify-content-end'>Email Us : demoexample@gmail.com</p>
                    </div>
                </div>
            </div>
            <nav className="navbar py-4 navbar-expand-lg bg-white">
                <div className="container-fluid">
                    <Link to="/">
                        <img src={Zoom_logo} alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/fashion-page" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Fashion
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/fashion-page">Shoes</Link></li>
                                    <li><Link className="dropdown-item" to="/fashion-page">Tops</Link></li>
                                    <li><Link className="dropdown-item" to="/fashion-page">Dresses</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/accessories-page">Accessories</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/catagory-page">Category</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/collection-page">Collection</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/outfits-page">Outfits</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input classNameName="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button classNameName="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Zoom_Header;
