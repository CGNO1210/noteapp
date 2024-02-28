import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 24,
        backgroundColor: '#fff',
        paddingLeft: 15
    },
    header: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '20%'
    },
    title: {
        height: 60,
        justifyContent: 'center'
    },
    titleText: {
        backgroundColor: 'white',
        height: 36,
        paddingHorizontal: 15,
        fontSize: 16
    },
    content: {
        flex: 1,
    },
    contentText: {
        backgroundColor: 'blue'
    }
})