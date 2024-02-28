import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    add: {
        position: "absolute",
        bottom: 15,
        right: 15
    },
    scrollView: {
        flex: 1
    },
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
        justifyContent: 'space-evenly',
        paddingVertical: 15
    }
})