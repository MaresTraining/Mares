import React from 'react';
import StudentHeader from 'components/student/StudentHeader';
import { useOpportunityContext } from 'contexts/OpportunityContext';
import OppDetails from 'components/OppDetails';
const ViewOppDetails = () => {
    const { selectedOpp } = useOpportunityContext();
    if (!selectedOpp) {
        <div>
            <StudentHeader />
        </div>
    }


    return (
        <div>
            <StudentHeader />
            <OppDetails opp={selectedOpp}  />

        </div>
    );
};

export default ViewOppDetails;