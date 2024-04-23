import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <Link className='mb-1 lg:mb-0'
            style={{
                background: match ? '#14a800' : 'none',
                fontWeight: match ? '600' : '500',
                borderRadius: '4px',
                marginRight: '4px',
                color: match ? 'white' : 'black',
                // borderBottom: match ? '3px solid #14a800': 'none',
                fontSize: '15px'
            }}
            to={to}
            {...props}
        >
            {children}
        </Link>
    );
};

export default CustomLink;