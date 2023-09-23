import React from 'react'
import Style from "./CustomTable.module.css";
import PropTypes from "prop-types";
import { Divider } from '@mui/material';

const CustomTable = ({
    tableHeaders = [],
    firstSmall = true,
    lastSmall = true,
    children
}) => {

    let gridStyles;
    if (firstSmall && lastSmall) {
        gridStyles = {
            gridTemplateColumns: `var(--table-first) repeat(${tableHeaders.length - 2}, 1fr) var(--table-last)`
        }
    }
    else if (firstSmall) {
        gridStyles = {
            gridTemplateColumns: `var(--table-first) repeat(${tableHeaders.length - 1}, 1fr)`
        }
    }
    else if (lastSmall) {
        gridStyles = {
            gridTemplateColumns: `repeat(${tableHeaders.length - 1}, 1fr) var(--table-last)`
        }
    }
    else {
        gridStyles = {
            gridTemplateColumns: `repeat(${tableHeaders.length}, 1fr)`
        }
    }

    return (
        <div className={Style.container}>
            <div className={`${Style.table_header} ${firstSmall && Style.first_left}`} style={gridStyles}>
                {tableHeaders.map((header, index) => (
                    <div key={index}>
                        {header}
                    </div>
                ))}
            </div>
            <Divider style={{ minWidth: '700px' }} />
            <div className={Style.rows_container}>
                {children}
            </div>
        </div>
    )
}

CustomTable.propTypes = {
    tableHeaders: PropTypes.array.isRequired,
    firstSmall: PropTypes.bool,
    lastSmall: PropTypes.bool,
}

export default CustomTable