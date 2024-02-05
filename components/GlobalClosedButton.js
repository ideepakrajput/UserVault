import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import { statusActions } from "../store/slices/status";

function GlobalClosedButton({ globalCount, closeUpCount }) {
    const status = useSelector(store => store.status);
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.button, [status.isGlobal && styles.active]]} onPress={() => dispatch(statusActions.toggleIsGlobal(true))}>
                <Text style={styles.text}>
                    Global {globalCount ? `(${globalCount})` : ``}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, [!status.isGlobal && styles.active]]} onPress={() => dispatch(statusActions.toggleIsGlobal(false))}>
                <Text style={styles.text}>
                    Close Up {closeUpCount ? `(${closeUpCount})` : ``}
                </Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#B7E5E4",
        marginHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 50,
    },
    button: {
        paddingVertical: 8,
        borderRadius: 50,
        width: "48%",
        margin: 4
    },
    active: {
        backgroundColor: "#F3AF8E",
    },
    text: {
        fontSize: 16,
        textAlign: "center",
        fontWeight: "bold",
        color: "#3E6975"
    },
})
export default GlobalClosedButton;