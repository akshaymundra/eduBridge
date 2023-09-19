'use client'
import Heading from "../Texts/Heading/Heading";
import Style from "./Hero.module.css";
import CustomButton from "../CustomButton/CustomButton";


const Hero = () => {

    const scrollToId = () => {
        const element = document.getElementById('department-section')
        element.scrollIntoView();
    }

    return (
        <div className={Style.container}>
            <div className={Style.main}>
                <Heading style={{ color: 'var(--light)' }} heading="Welcome to EduBridge - Your Gateway to Academic Excellence!" />
                <p className={Style.desc}>
                    At EduBridge, we're committed to helping you excel in your academic journey. Explore a wealth of meticulously organized study materials, notes, and example papers tailored to your university's departments, years, and subjects. Your success is our priority, and we're here to make your learning experience seamless and stress-free.
                </p>
                <div>
                    <CustomButton
                        color="secondary"
                        variant="contained"
                        size="large"
                        onClick={scrollToId}
                    >
                        Get Started
                    </CustomButton>
                </div>
            </div>

            <div className={Style.hero_img_container}>
                <img src="\assets\hero.svg" alt="Hero" />
            </div>
        </div>
    )
}

export default Hero