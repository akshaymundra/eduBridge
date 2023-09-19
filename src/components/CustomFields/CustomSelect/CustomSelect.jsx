'use client'
import React from 'react'
import Style from "./CustomSelect.module.css";
import { FormControl, MenuItem, Select } from '@mui/material'
import classNames from 'classnames';

const CustomSelect = ({
    name = '',
    onChange,
    value = '',
    defaultValue,
    label = '',
    placeholder = '',
    selectList = [],
    params = [],
    variant = 'filled',
    rounded = false,
    style,
}) => {

    const inputClass = classNames(Style.input, {
        [Style.outlined]: variant === 'outlined',
        [Style.filled]: variant === 'filled',
        [Style.rounded]: rounded,
    })


    return (
        <div className={Style.container} {...style}>
            {label &&
                <span className={Style.label}>{label}</span>
            }

            <FormControl fullWidth variant='outlined' className={inputClass}>

                <Select
                    onChange={(e) => onChange(e, ...params)}
                    value={value}
                    name={name}
                    placeholder={placeholder}
                >
                    {selectList.map((item, idx) => (
                        <MenuItem key={idx} value={item.value}>{item.name}</MenuItem>
                    ))}
                </Select>
            </FormControl>

        </div>
    )
}

export default CustomSelect