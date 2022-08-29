import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#1e88e5",
            light: "#e3f2fd"
        },
        secondary: {
            main: "#5e35b1",
            lighter: '#ede7f6'
        },
        action: {
            selected: "#5e35b1",
            hover: "#ede7f6",

        }
    },
    shape: {
        borderRadius: 6
    }
});