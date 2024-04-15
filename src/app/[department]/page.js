'use client'
import Layout from '@/components/Layout/Layout'
import ResourceCard from '@/components/ResourceCard/ResourceCard'
import SearchQuery from '@/components/SearchQuery/SearchQuery'
import SectionHeading from '@/components/Texts/SectionHeading/SectionHeading'
import getDocument from '@/firebase/firestore/getData'
import { collections } from '@/utils/constant'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Style from './page.module.css';

const page = () => {

    const [data, setData] = useState(null);
    const [filteredData, setFilteredData] = useState(null);
    const [departmentData, setDepartmentData] = useState(null)
    const [search, setSearch] = useState('');
    const [sem, setSem] = useState('');

    const { department } = useParams();

    async function init() {
        const { result, error } = await getDocument(collections.RESOURCES, 'departmentId', department);
        const { result: departmentResult, error: departmentError } = await getDocument(collections.DEPARTMENTS)
        if (error || departmentError) {
            console.log(error, departmentError);
            return
        }
        setData(result)
        setDepartmentData(departmentResult.filter(item => item.id === department)[0])
    }

    useEffect(() => {
        init();
    }, [])

    useEffect(() => {
        let newData = data;

        if (search) {
            newData = newData?.filter(item => (
                item.title.toLowerCase().includes(search.trim().toLowerCase()) ||
                item.subject.toLowerCase().includes(search.trim().toLowerCase())
            ))
        }

        if (sem) {
            newData = newData?.filter(item => (
                item.semester == sem
            ))
        }

        setFilteredData(newData)
    }, [sem, search])


    return (
        <Layout>

            <div className="section">
                <div className="section-heading">
                    <SectionHeading heading={departmentData?.name} />
                </div>

                <SearchQuery sem={sem} setSem={setSem} search={search} setSearch={setSearch} />

                <div className={Style.card_container}>
                    {!search && !sem && data?.map((item, index) => (
                        <ResourceCard key={index} data={item} />
                    ))}
                </div>

                {(search || sem) &&
                    <>
                        {filteredData ?
                            <div className={Style.card_container}>
                                {filteredData?.map((item, index) => (
                                    <ResourceCard key={index} data={item} />
                                ))}
                            </div>
                            :
                            <>
                                Empty
                            </>
                        }
                    </>
                }

            </div>


        </Layout>
    )
}

export default page