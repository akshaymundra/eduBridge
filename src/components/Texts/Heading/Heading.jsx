import Style from "./Heading.module.css";

const Heading = ({ heading = '', style }) => {
    return (
        <h1 className={Style.heading} style={{ ...style }}>
            {heading}
        </h1>
    )
}

export default Heading