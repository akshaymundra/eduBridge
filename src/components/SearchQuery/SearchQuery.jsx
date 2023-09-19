'use client'
import Style from "./SearchQuery.module.css";
import CustomSelect from "../CustomFields/CustomSelect/CustomSelect";
import { useState } from "react";
import { MenuItem, TextField } from "@mui/material";

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
            >
                {semList?.map(val => (
                    <MenuItem key={val} value={val}>{val}</MenuItem>
                ))}

            </TextField>

        </div>
    )
}


export default SearchQuery