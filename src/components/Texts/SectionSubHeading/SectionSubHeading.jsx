import Style from "./SectionSubHeading.module.css";

const SectionSubHeading = ({ heading = '' }) => {
    return (
        <h3 className={Style.heading}>
            {heading}
        </h3>
    )
}

export default SectionSubHeading