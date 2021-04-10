const ConsultationReport = (props) =>{
    return(
        <table>
            <thead>
                <tr>
                    <th scope = 'col'>Date</th>
                    <th scope = 'col'>Sujet</th>
                    <th scope = 'col'>Compte rendu</th>
                </tr>
            </thead>
            <tbody>
                {props.reports.map( (item) => 
                <tr>
                    <th>
                        {item.date}
                    </th>
                    <td>
                        {item.title}
                    </td>
                    <td>
                        {item.report}
                    </td>
                </tr>
                    
                )}

            </tbody>
            
        </table>
    );
};

export default ConsultationReport;