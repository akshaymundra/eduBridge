'use client'
import React, { useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone';
import Style from "./Uploader.module.css";
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';



const Uploader = ({ name, data, setData }) => {


    const [files, setFiles] = useState([]);
    const {
        isDragActive,
        isDragAccept,
        isDragReject,
        getRootProps,
        getInputProps
    } = useDropzone({
        accept: 'image/*',
        maxFiles: 1,
        multiple: false,
        onDrop: (acceptedFiles) => {
            if ((data[name].length) === 1) { return }
            setData({
                ...data,
                [name]: acceptedFiles.map((file) =>
                    Object.assign(file, {
                        preview: URL.createObjectURL(file)
                    })
                )
            }
            );
        }
    });

    const handleDelete = () => {
        setData({ ...data, [name]: [] })
    }

    const thumbs = data[name].map((file) => (
        <div key={file.name} className={Style.uploaded_file}>
            <span style={{ fontSize: '12px', color: 'gray' }}>{file.name}</span>
            <IconButton onClick={handleDelete} size='small'>
                <DeleteIcon className={Style.file_delte_icon} />
            </IconButton>
        </div>
    ));


    useEffect(
        () => () => {
            data[name].forEach((file) => URL.revokeObjectURL(file.preview));

        },
        [data]
    );


    return (
        <div className={Style.container}>

            <div className={Style.dropZone} {...getRootProps()}>
                <input {...getInputProps()} />
                {
                    isDragActive ?
                        <p>Drop the files here ...</p> :
                        <p>Drag or click to upload file</p>
                }
            </div>

            {thumbs.length > 0 && (
                <div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {thumbs}
                    </div>
                </div>
            )}
        </div>

    )
}

export default Uploader