import React,{useEffect, useState} from 'react'
import ConsultationReport from './ConsultationReport.jsx';
import axios from 'axios';

const Dashboard = () =>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
const [reports, setReports] = useState([]); 
const url = [
    {
    'date':'10/04/2021',
    'title':'Vaccin',
    'report':'prochain vaccin dans 1 an'
    },
    {
        'date':'10/04/2021',
        'title':'vermifuge',
        'report':'prochain vaccin dans 6 mois'
    },
    {
        'date':'10/04/2021',
        'title':'Achat Croquette',
        'report':'Croquette Royal Canin pour un chien Royal !'
    }];
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
