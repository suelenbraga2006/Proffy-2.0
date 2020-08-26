import React, { useContext } from 'react';
import AuthContext from '../../contexts/auth';

const Dashboard: React.FC = () => {
    const { signOut } = useContext(AuthContext);

    function handleLogout() {
        signOut();
    }

    return (
        <button onClick={handleLogout}>Sign Out</button>
    );
}

export default Dashboard;