import PropTypes from "prop-types";

export default function Navbar({children}) {
    return (
        <nav className="flex justify-end pr-4 w-full bg-gray-200 dark:bg-gray-900 py-4">
                {children}
        </nav>
    )
}

Navbar.propTypes = {
    children: PropTypes.element
}