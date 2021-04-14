import React,{useEffect, useState} from 'react'
import ConsultationReport from './ConsultationReport.jsx';
import axios from 'axios';
import ButtonForm from './buttonForm.jsx';
import './dashboard.css'

function Dashboard() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
const [reports, setReports] = useState([]); 
const url = '/api/v1/all-reports';
const getReports = () => {
    axios
    .get(url)
    .then((response) => setReports(response.data))
    .catch((error) => {console.error(error)});
}
// eslint-disable-next-line react-hooks/rules-of-hooks
useEffect(() => {
    getReports();
},[]);


    return(
        <section>
            <ButtonForm />
            <ConsultationReport reports = {reports}/>
        </section>
    );
}
export default Dashboard;