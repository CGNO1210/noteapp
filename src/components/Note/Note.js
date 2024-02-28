import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { styles } from './Note.styles'

const Note = ({ handleEdit, item, deleteNote }) => {
    const navigateDetailNote = () => {
        handleEdit(item)
    }
    const handleDeleteNote = (id) => {
        deleteNote(id)
    }
    return (
        <TouchableOpacity
            style={styles.container}
            onLongPress={() => {
                handleDeleteNote(item.id)
            }}
            onPress={navigateDetailNote}>
            <Text
                style={styles.title}
                numberOfLines={1}
                ellipsizeMode="tail">{item.title}</Text>
            <Text
                style={styles.content}
                numberOfLines={2}
                ellipsizeMode="tail">{item.content}</Text>
            <Text
                style={styles.time}>{item.time}</Text>
        </TouchableOpacity>
    )
}

export default Note