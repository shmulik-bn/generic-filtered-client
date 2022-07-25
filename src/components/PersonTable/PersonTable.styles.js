import { makeStyles } from "@mui/styles";

export const usePersonTableStyle = makeStyles(() =>({
    
    table: {
        boxShadow: "1px",
        fontSize: "3em",
    },
    headerRow: {
        backgroundColor: "rgb(65,105,225)",
        boxShadow: "0px 1px",
    }
}))