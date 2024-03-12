import UserContext from './UserContext'
import { useState } from 'react'

// import PropTypes from 'prop-types';

const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

// ContextProvider.propTypes = {
//     children: PropTypes.node.isRequired,
// };

export default ContextProvider;


