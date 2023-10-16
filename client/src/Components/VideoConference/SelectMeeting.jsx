import React, { useState , useCallback } from 'react';
import './SelectMeeting.css'
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Footer from '../Home/components/Footer';

const SelectMeeting = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const navigate = useNavigate()
    const options = [
            { value: 'vocational', label: 'Mentor - Vocational Training' },
            { value: 'financial', label: 'Mentor - Financial Management' },
            { value: 'mental_health', label: 'Mentor - Mental Health' },
            { value: 'spiritual', label: 'Mentor - Spiritual Content' },
            { value: 'legal', label: 'Mentor - Legal Education' },
            { value: 'civic', label: 'Mentor - Civic Education' },
            { value: 'family', label: 'Mentor - Family and Relationship' },
    ];

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
    };

    return (
    <>    
      <NavBar />  
        <div className='Video_container'>
            <div className="Video_Form_Container">
                <div>Select Mentor</div>
                <Select
                    value={selectedOption}
                    onChange={handleChange}
                    options={options}
                    className='selectOptions'
                />
                <button onClick={()=> navigate(`/videoconference/${selectedOption.value}`)} className='nav_btn_login gobtn'>Go to Join Meet</button>
            </div>
        </div>
      <Footer />  
    </>   
    );
};

export default SelectMeeting;
