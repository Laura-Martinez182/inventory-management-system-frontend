import PropTypes from 'prop-types';
import SideMenu from "./SideMenu/SideMenu";

const PageTemplate = ({ children }) => {
    return (
        <div >
            <SideMenu/>
            <main className="h-auto w-auto ml-52">
                {children}
            </main>
        </div>
    );
}

PageTemplate.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PageTemplate;