import { COLORS, FONT_SIZE } from "../../constants/theme";


export const styles = {
    container: {
        flex: 1,
        paddingLeft: 40,
        paddingRight: 40,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.white
    },

    scrollView:{
        width: "100%"
    },
    form: {
        width: "100%",
        marginBottom: 20
    },
    formGroup:{
        width: "100%",
        marginTop: 25,
        marginBottom: 40
    },
    footer: {
        width: "100%",
        height: 60,
        position: "absolute",
        bottom: 0,
        padding: 15,
    },
    footerText: {
        textAlign: "center",
        color: COLORS.dark_gray,
        fontSize: FONT_SIZE.md
    }

}