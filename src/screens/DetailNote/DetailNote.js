import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react'
import { styles } from './DetailNote.styles'

const DetailNote = ({ navigation, route }) => {
    const [title, setTitle] = useState(route.params.item.title || '')
    const [content, setContent] = useState(route.params.item.content || '')
    const [time, setTime] = useState(route.params.item.time || '')
    const goBack = () => {
        navigation.goBack()
    }
    const deleteNote = () => {
        route.params.deleteNote(route.params.item.id)
        navigation.goBack()
    }
    const updateNote = () => {
        if (!route.params.isEdit) {
            route.params.addNote({
                title,
                content,
            })
        } else {
            route.params.updateNote({
                title,
                content,
                id: route.params.item.id
            })
        }
        navigation.goBack()
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={goBack}>
                    <Text>Back</Text>
                </TouchableOpacity>
                <View style={styles.option}>
                    {route.params.isEdit && <TouchableOpacity
                        onPress={deleteNote}>
                        <Text>Xóa</Text>
                    </TouchableOpacity>}
                    <TouchableOpacity
                        onPress={updateNote}>
                        <Text>Lưu</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.title}>
                <TextInput
                    onChangeText={(value) => setTitle(value)}
                    value={title}
                    placeholder='Tiêu đề'
                    style={styles.titleText} />
            </View>
            <Text style={{
                marginBottom: 20
            }}>{time}</Text>
            <View style={styles.content}>
                <TextInput
                    onChangeText={(value) => setContent(value)}
                    value={content}
                    placeholder='Nội dung'
                    multiline={true}
                    numberOfLines={4} // Số dòng bạn muốn hiển thị ban đầu
                    style={{
                        padding: 10, // Thêm padding để TextInput trông đẹp hơn
                        width: '100%',
                        fontSize: 16
                    }}
                />
            </View>
        </View>

    )
}

export default DetailNote