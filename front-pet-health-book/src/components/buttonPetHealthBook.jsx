import './buttonPetHealthBook.css'

export default function ButtonPetHealthBook(props){
    return(
        <div className="btnHealthBook" onClick={props.onClick}> <span class="noselect">{props.value}</span><div id="circle"></div></div>

    )
}