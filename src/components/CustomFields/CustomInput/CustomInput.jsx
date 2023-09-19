'use client'
import React from 'react'
import Style from "./CustomInput.module.css";
import { OutlinedInput } from '@mui/material';
import classNames from 'classnames';

const CustomInput = ({
    id = '',
    name = '',
    onChange,
    value = '',
    defaultValue,
    label = '',
    placeholder = '',
    type = 'text',
    isMultiline = false,
    maxRows = 2,
    params = [],
    classes,
    labelClass,
    labelAddon,
    startAdornment,
    rounded,
    size = 'default',
    rows,
}) => {

    const inputClass = classNames(Style.input, {
        [Style.small_input]: size === 'small',
        [Style.default_input]: size === 'default'
    })

    const handleChange = (e) => {
        if (onChange) {
            onChange(e, ...params)
        }
    }

    return (
        <div className={Style.container}>
            {label !== '' &&
                <label htmlFor={id} className={`${Style.label} ${labelClass}`}>{label} &nbsp; {labelAddon}</label>
            }
            <OutlinedInput
                type={type}
                name={name}
                id={id}
                placeholder={placeholder}
                className={`${inputClass} ${classes}`}
                onChange={handleChange}
                value={value}
                defaultValue={defaultValue}
                multiline={isMultiline}
                maxRows={maxRows}
                startAdornment={startAdornment}
                rows={rows}
            />
        </div>
    )
}

export default CustomInput