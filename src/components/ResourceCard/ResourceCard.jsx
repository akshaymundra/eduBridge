import CustomButton from "../CustomButton/CustomButton";
import Style from "./ResourceCard.module.css";

const ResourceCard = ({ data }) => {

    // console.log(data);

    return (
        <div className={Style.container}>
            <img src="\assets\card-img.jpg" alt="" />
            <div className={Style.main}>
                <div className={Style.main__inner}>
                    <p className={Style.title}>{data?.title}</p>
                    <p className={Style.subject}>Subject: {data?.subject}</p>
                    <p className={Style.desc}>{data?.description}</p>
                    <p className={Style.sem}>Sem: {data.semester}</p>
                </div>


                <a
                    href={data?.document}
                    target="_blank"
                >
                    <CustomButton
                        variant="contained"
                        color="primary"
                        size="small"
                        style={{ width: '100%' }}
                    >
                        Download
                    </CustomButton>
                </a>
            </div>
        </div>
    )
}

export default ResourceCard