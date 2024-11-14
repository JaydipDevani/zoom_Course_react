import React from 'react';
import { Home } from '@mui/icons-material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Zoom_Header from './Zoom_Header';
import Zoom_Footer from './Zoom_Footer';

// images
import fashion_img1 from '../Images/fashion_img1.jpg';
import fashion_img2 from '../Images/fashion_img2.jpg';
import fashion_img3 from '../Images/fashion_img3.jpg';
import fashion_img4 from '../Images/fashion_img_4.jpg';
import fashion_img5 from '../Images/fashion_img_5.jpg';
import fashion_img6 from '../Images/fashion_img_6.jpg';
import fashion_img7 from '../Images/fashion_img_7.jpg';
import fashion_img8 from '../Images/fashion_img_8.jpg';
import fashion_img9 from '../Images/fashion_img_9.jpg';


const FAQ_ITEMS = [
    { question: "How long is Lorem Ipsum?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident." },
    { question: "What is a Lorem Ipsum generator?", answer: "Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summer!" },
    { question: "Minim veniam quis enim?", answer: "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { question: "Ut enim ad minim veniam quis nostrud?", answer: "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    { question: "who is thought to have scrambled parts of Cicero?", answer: "The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content." },
    { question: "What is the use of Lorem Ipsum?", answer: "In publishing and graphic design, lorem ipsum is a filler text commonly used to demonstrate the graphic elements of a document or visual presentation." },
    { question: "How do I generate Lorem Ipsum in Word?", answer: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book" },
    { question: "What is Lorem Ipsum in HTML?", answer: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { question: "How do I get Lorem Ipsum text in Sublime Text?", answer: "An extension for Sublime Text 2 and 3! It allows you to Insert Lorem Ipsum in the editor via menu items or keyboard shortcut. Select how much text you want from the menu item in Lorem Ipsum or on the right click menu in Lorem Ipsum to add Lorem Ipsum text." },
    { question: "Lorem Ipsum generator?", answer: "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
];

const Zoom_FAQ = () => {
    const [expanded, setExpanded] = React.useState(false);
    const handleExpansion = () => setExpanded(prev => !prev);

    const renderFAQ = () => (
        FAQ_ITEMS.map((item, index) => (
            <Accordion key={index}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel${index}-content`} id={`panel${index}-header`}>
                    <Typography sx={{ fontWeight: "500" }}>{`${index + 1}. ${item.question}`}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{ color: "#666" }}>{item.answer}</Typography>
                </AccordionDetails>
            </Accordion>
        ))
    );

    return (
        <div>
            <div className="">
                <Zoom_Header />
            </div>
            <div className='pb-5'>
            <div className="container-fluid">
                <div className="breadcrumb-container" style={{ height: '140px' }}>
                    <div className="py-5 text-center d-flex align-items-center justify-content-center">
                        <ul className='list-unstyled d-flex align-items-center justify-content-center'>
                            <li><Home /></li>
                            <li className="ms-2 text-black">| FAQ</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="container d-flex flex-column align-items-center">
                <p className="mb-0 h4 fw-bold mb-3 text-center">FAQ</p>
                <div className='w-75'>
                    {renderFAQ()}
                </div>
            </div>
            </div>
            <div className="container-fluid">
                <Zoom_Footer />
            </div>
        </div>
    );
};

export default Zoom_FAQ;
