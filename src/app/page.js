'use client'
import Layout from "@/components/Layout/Layout";
import Style from "./page.module.css";
import Hero from "@/components/Hero/Hero";
import DepartmentList from "@/components/DepartmentList/DepartmentList";
import SectionHeading from "@/components/Texts/SectionHeading/SectionHeading";

export default function Home() {


  return (
    <Layout>
      <div className={Style.container}>
        <Hero />
        <div className={'section'} id="department-section">
          <div className={'section-heading'}>
            <SectionHeading heading="Departments" />
          </div>
          <DepartmentList />
        </div>
      </div>
    </Layout>
  )
}
