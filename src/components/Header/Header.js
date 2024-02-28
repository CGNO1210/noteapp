import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './Header.styles'

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Header</Text>
        </View>
    )
}

export default Header