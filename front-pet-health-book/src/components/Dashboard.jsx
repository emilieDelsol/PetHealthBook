import React,{useEffect, useState} from 'react'
import ConsultationReport from './ConsultationReport.jsx';
import axios from 'axios';

const Dashboard = () =>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
const [reports, setReports] = useState([]); 
const url = 'http://localhost:5000/api/v1/all-reports';
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
            <ConsultationReport reports = {reports}/>
        </section>
    );
}

export default Dashboard;
