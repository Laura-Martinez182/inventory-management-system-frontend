import PropTypes from 'prop-types';
import NavBar from '../navigation/NavBar';

const PageTemplate = ({ children }) => {
    return (
        <div >
            <NavBar/>
            <main className="p-20">
                {children}
            </main>
        </div>
    );
}

PageTemplate.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PageTemplate;