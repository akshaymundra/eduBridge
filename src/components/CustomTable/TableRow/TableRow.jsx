import React, { Children } from 'react'
import Style from "./TableRow.module.css";
import PropTypes from "prop-types";


const TableRow = ({
    children,
    firstSmall = true,
    lastSmall = true,
}) => {

    const childrenCount = Children.count(children);

    let gridStyles;
    if (firstSmall && lastSmall) {
        gridStyles = {
            gridTemplateColumns: `var(--table-first) repeat(${childrenCount - 2}, 1fr) var(--table-last)`
        }
    }
    else if (firstSmall) {
        gridStyles = {
            gridTemplateColumns: `var(--table-first) repeat(${childrenCount - 1}, 1fr)`
        }
    }
    else if (lastSmall) {
        gridStyles = {
            gridTemplateColumns: `repeat(${childrenCount - 1}, 1fr) var(--table-last)`
        }
    }
    else {
        gridStyles = {
            gridTemplateColumns: `repeat(${childrenCount}, 1fr)`
        }
    }

    return (
        <div
            className={`${Style.container} ${firstSmall && Style.fist_left}`} style={gridStyles}
        >
            {children}
        </div>
    )
}

TableRow.propTypes = {
    firstSmall: PropTypes.bool,
    lastSmall: PropTypes.bool,
}

export default TableRow