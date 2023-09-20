import CustomButton from "../CustomButton/CustomButton";
import Style from "./ResourceCard.module.css";

const ResourceCard = ({ data }) => {

    console.log(data);

    return (
        <div className={Style.container}>
            <img src="" alt="" />
            <div className={Style.main}>
                <p className={Style.title}>{data?.title}</p>
                <p className={Style.title}>{data?.subject}</p>
                <p className={Style.desc}>{data?.description}</p>
                <p>Sem: {data.semester}</p>


                <a
                    href={data?.document}
                    target="_blank"
                >
                    <CustomButton
                        variant="contained"
                        color="primary"
                    >
                        Download
                    </CustomButton>
                </a>
            </div>
        </div>
    )
}

export default ResourceCard