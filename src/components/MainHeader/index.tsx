import React, { useContext } from 'react';
import AuthContext from '../../contexts/auth';
import { IoIosPower } from 'react-icons/io';

import './styles.css';

const MainHeader: React.FC = () => {
    let user;
    const userStorage = sessionStorage.length > 0 ? sessionStorage.getItem('@Proffy:user') : localStorage.getItem('@Proffy:user');

    if (userStorage !== null) {
        user = JSON.parse(userStorage);
    }

    const { signOut } = useContext(AuthContext);

    function handleLogout() {
        signOut();
    }

    return (
        <div id="main-header">
            <div className="name-avatar">
                <img src={user.avatar} alt={user.name}/>
                <h3>{user.name} {user.lastname}</h3>
            </div>
            <button onClick={handleLogout}>
                <IoIosPower size={20} />
            </button>
        </div>
    );
}

export default MainHeader;