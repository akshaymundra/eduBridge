import Style from "./SectionHeading.module.css";

const SectionHeading = ({ heading = '' }) => {
    return (
        <h2 className={Style.heading}>
            {heading}
        </h2>
    )
}

export default SectionHeading