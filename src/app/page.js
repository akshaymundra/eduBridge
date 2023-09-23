'use client'
import Layout from "@/components/Layout/Layout";
import Style from "./page.module.css";
import Hero from "@/components/Hero/Hero";
import DepartmentList from "@/components/DepartmentList/DepartmentList";
import SectionHeading from "@/components/Texts/SectionHeading/SectionHeading";
import CustomButton from "@/components/CustomButton/CustomButton";
import AniModalWrapper from "@/components/AniModalWrapper/AniModalWrapper";
import RequestPopup from "@/components/RequestPopup/RequestPopup";
import { useState } from "react";

export default function Home() {

  const [openRequest, setOpenRequest] = useState(false);

  return (
    <Layout>
      <div className={Style.container}>
        <Hero />
        <div className={'section'} id="department-section">
          <div className={'section-heading'}>
            <SectionHeading heading="Departments" />
          </div>
          <DepartmentList />
          <div>
            <CustomButton
              color="primary"
              variant="contained"
              onClick={() => setOpenRequest(true)}
            >
              Request Material
            </CustomButton>
          </div>
        </div>
      </div>
      <AniModalWrapper
        onClose={() => setOpenRequest(false)}
        open={openRequest}
      >
        <RequestPopup
          onClose={() => setOpenRequest(false)}
        />
      </AniModalWrapper>
    </Layout>
  )
}
