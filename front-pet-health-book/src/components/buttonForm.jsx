import React,{useState} from 'react';
import ReportForm from './ReportForm';
import ButtonPetHealthBook from './buttonPetHealthBook';

export default function ButtonForm() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [disabled, setDisabled] = useState(true);
  
        function handleFormClick() {
            setDisabled(!disabled);}
            return(
                <div>
                    <ButtonPetHealthBook type="submit" onClick={handleFormClick} value={"Ajouter un compte-rendu"}/>
                    <div hidden={disabled}>

                        <ReportForm />
                    </div>
                </div>
            )
}