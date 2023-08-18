import React, { useState } from "react"
import InputComponent from "../Common/InputComponent"
import Buttons from "../Common/Buttons";
import SelectComponent from "../Common/SelectComponent";
import RadioComponent from "../Common/RadioComponent";
import CheckBoxComponent from "../Common/CheckBoxComponent";
import Datepickers from '../Common/Datepickers';
import { FaUserCircle } from 'react-icons/fa';


const DynamicInput = () => {

    const [inputValues, setInputValues] = useState('');

    const [selectValues, setSelectValues] = useState('');

    const [radioSelect, setRadioSelect] = useState(null);

    const [isChecked, setIsChecked] = useState(false);


    // InputField
    const handleInputChange = (e) => {
        console.log(e, "jj")
        setInputValues(e.target.value)
    }

    //Button
    const handleButtonClick = () => {
        console.log(inputValues, "inputss")
    }

    //select
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ]

    const handleSelectValue = (selectValues) => {
        setSelectValues(selectValues)
    }

    //radio

    const handleRadioSelect = (value) => {
        setRadioSelect(value)
        console.log(value, "radio")
    }

    //checkbox
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    //datepicker
    const [startDate, setStartDate] = useState(null);

    const handleDateChange = (date) => {
        setStartDate(date);
    };

    return (
        <>
            <div className="forms_fields">
                <div>
                    <SelectComponent
                        options={options}
                        value={selectValues}
                        onChange={handleSelectValue}
                        placeholder="Select an Option"
                    />
                    <p>Choose the Select values :  {selectValues ? selectValues.label : 'None'} </p>
                </div>

                <div>
                    <CheckBoxComponent
                        label="Check me!"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    />
                    <p>Checkbox is {isChecked ? 'checked' : 'unchecked'}</p>
                </div>

                <div>
                    <Datepickers selectedDate={startDate} onChange={handleDateChange} />
                    <p>Selected Date: {startDate ? startDate.toLocaleDateString() : 'None'}</p>
                </div>

                <div>
                    <RadioComponent options={options}
                        radioSelect={radioSelect}
                        onChange={handleRadioSelect} />
                    <p>Selected option: {radioSelect ? radioSelect : 'None'}</p>
                </div>

                <div>
                    <InputComponent
                        type="text"
                        value={inputValues}
                        onChange={handleInputChange}
                        placeholder="FullName"
                        icon={<FaUserCircle size={30} />}
                    />
                </div>
                <div>
                    <Buttons
                        type="button"
                        label="Submit"
                        onClick={handleButtonClick} />
                    <p>The Value is: {inputValues} </p>
                </div>



            </div>
        </>
    )
}

export default DynamicInput






























