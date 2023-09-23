'use client'
import ProtectedLayout from '@/components/ProtectedLayout/ProtectedLayout';
import Style from './page.module.css';
import { useEffect, useState } from 'react';
import getDocument from '@/firebase/firestore/getData';
import { collections } from '@/utils/constant';
import Heading from '@/components/Texts/Heading/Heading';
import CustomTable from '@/components/CustomTable/CustomTable';
import TableRow from '@/components/CustomTable/TableRow/TableRow';
import TableColumn from '@/components/CustomTable/TableColumn/TableColumn';
import { IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';
import deleteDocument from '@/firebase/firestore/deleteData';


const page = () => {
  const [data, setData] = useState(null);
  const [departmentList, setDepartmentList] = useState(null);
  const [error, setError] = useState(null)

  async function init() {
    const { result, error } = await getDocument(collections.REQUESTS);
    const { result: departments, error: departmentError } = await getDocument(collections.DEPARTMENTS);
    if (error || departmentError) {
      setError(error.message || departmentError.message)
      return
    }
    setData(result);
    setDepartmentList(departments)
  }
  useEffect(() => {
    init();
  }, [])

  const getDepartment = (id) => {
    if (departmentList) {
      const department = departmentList.filter(item => item.id === id)[0]?.name;
      console.log(department)
      return department
    }
    return ''
  }

  const handleDelete = async (id) => {
    await deleteDocument(collections.REQUESTS, id)
  }


  return (
    <ProtectedLayout>
      <div className={Style.container}>
        <Heading heading='User Request' />

        <div className={Style.main}>
          <CustomTable
            firstSmall={true}
            tableHeaders={['#', 'Name', 'Department', 'Title', 'Subject', 'Description', 'Semester', 'Action']}
          >
            {data?.map((item, index) => (
              <TableRow firstSmall key={indexedDB}>
                <TableColumn>{index + 1}</TableColumn>
                <TableColumn>{item?.fullName}</TableColumn>
                <TableColumn>{getDepartment(item.departmentId)}</TableColumn>
                <TableColumn>{item?.title}</TableColumn>
                <TableColumn>{item?.subject}</TableColumn>
                <TableColumn>{item?.description}</TableColumn>
                <TableColumn>{item?.semester}</TableColumn>
                <TableColumn>
                  <IconButton
                    size='small'
                    onClick={() => handleDelete(item?.id)}
                  >
                    <Delete fontSize='small' />
                  </IconButton>
                </TableColumn>
              </TableRow>
            ))}
          </CustomTable>
        </div>
      </div>
    </ProtectedLayout>
  )
}

export default page