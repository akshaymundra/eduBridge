'use client'
import Style from "./SearchQuery.module.css";
import CustomSelect from "../CustomFields/CustomSelect/CustomSelect";
import { useState } from "react";
import { MenuItem, TextField } from "@mui/material";
import CustomButton from "../CustomButton/CustomButton";

const dummyList = [
    { name: '1', value: '1' },
    { name: '2', value: '2' },
    { name: '3', value: '3' },
    { name: '4', value: '4' }
]

const semList = [1, 2, 3, 4, 5, 6, 7, 8]


const SearchQuery = ({
    search,
    setSearch,
    sem,
    setSem
}) => {

    const handleClear = () => {
        setSearch('')
        setSem('')
    }

    return (
        <div className={Style.main}>
            <TextField
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search you subject..."
                label='Search'
                size="small"
            />

            <TextField
                select
                label="Sem"
                onChange={(e) => setSem(e.target.value)}
                value={sem}
                size="small"
                style={{ minWidth: '100px' }}
            >
                {semList?.map(val => (
                    <MenuItem key={val} value={val}>{val}</MenuItem>
                ))}

            </TextField>

            <CustomButton
                color="primary"
                variant="underline"
                onClick={handleClear}
            >
                Clear Filter
            </CustomButton>

        </div>
    )
}


export default SearchQuery