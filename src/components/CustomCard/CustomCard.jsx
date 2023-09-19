import Link from "next/link";
import CustomButton from "../CustomButton/CustomButton"
import Style from "./CustomCard.module.css"
import EastIcon from '@mui/icons-material/East';

const CustomCard = ({
    data
}) => {

    return (
        <div className={Style.container}>
            <h4>{data?.name} {' '}<small>({data?.course})</small></h4>
            <Link
                href={`${data?.id}`}
                style={{ width: '100%' }}
            >
                <CustomButton
                    variant="contained"
                    color="primary"
                    size="small"
                    style={{ width: '100%' }}
                >
                    <EastIcon fontSize="small" />
                </CustomButton>
            </Link>
        </div>
    )
}

export default CustomCard