import { View, Text, TouchableOpacity, FlatList, ScrollView, Alert } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react'
import { styles } from './Home.styles';
import { Ionicons } from '@expo/vector-icons';
import Note from '../../components/Note/Note';
import AsyncStorage from '@react-native-async-storage/async-storage';
const data = [
    {
        title: 'first note',
        content: 'This is the first note.',
        time: '27 tháng 2 16:47 5 kí tự'
    },
    {
        title: '2 note',
        content: 'This is the 2 note.',
        time: '27 tháng 2 16:47 5 kí tự'
    },
    {
        title: '3 note',
        content: 'This is the 3 note.',
        time: '27 tháng 2 16:47 5 kí tự'
    },
    {
        title: '4 note',
        content: 'This is the 4 note.',
        time: '27 tháng 2 16:47 5 kí tự'
    },
    {
        title: '4 note',
        content: 'This is the 4 note.',
        time: '27 tháng 2 16:47 5 kí tự'
    },
    {
        title: '4 note',
        content: 'This is the 4 note.',
        time: '27 tháng 2 16:47 5 kí tự'
    },
    {
        title: '4 note',
        content: 'This is the 4 note.',
        time: '27 tháng 2 16:47 5 kí tự'
    },
    {
        title: '4 note',
        content: 'This is the 4 note.',
        time: '27 tháng 2 16:47 5 kí tự'
    },
    {
        title: '4 note',
        content: 'This is the 4 note.',
        time: '27 tháng 2 16:47 5 kí tự'
    },
    {
        title: '4 note',
        content: 'This is the 4 note.',
        time: '27 tháng 2 16:47 5 kí tự'
    },
    {
        title: '4 note',
        content: 'This is the 4 note.',
        time: '27 tháng 2 16:47 5 kí tự'
    },
    {
        title: '4 note',
        content: 'This is the 4 note.',
        time: '27 tháng 2 16:47 5 kí tự'
    },
    {
        title: '4 note',
        content: 'This is the 4 note.',
        time: '27 tháng 2 16:47 5 kí tự'
    },
    {
        title: '4 note',
        content: 'This is the 4 note.',
        time: '27 tháng 2 16:47 5 kí tự'
    },
    {
        title: '4 note',
        content: 'This is the 4 note.',
        time: '27 tháng 2 16:47 5 kí tự'
    },
    {
        title: '4 note',
        content: 'This is the 4 note.',
        time: '27 tháng 2 16:47 5 kí tự'
    },
    {
        title: '4 note',
        content: 'This is the 4 note.',
        time: '27 tháng 2 16:47 5 kí tự'
    },
    {
        title: '4 note',
        content: 'This is the 4 note.',
        time: '27 tháng 2 16:47 5 kí tự'
    },
    {
        title: '4 note',
        content: 'This is the 4 note.',
        time: '27 tháng 2 16:47 5 kí tự'
    },
    {
        title: '4 note',
        content: 'This is the 4 note.',
        time: '27 tháng 2 16:47 5 kí tự'
    },
    {
        title: '4 note',
        content: 'This is the 4 note.',
        time: '27 tháng 2 16:47 5 kí tự'
    },
    {
        title: '4 note',
        content: 'This is the 4 note.',
        time: '27 tháng 2 16:47 5 kí tự'
    },
    {
        title: '4 note',
        content: 'This is the 4 note.',
        time: '27 tháng 2 16:47 5 kí tự'
    },
    {
        title: '4 note',
        content: 'This is the 4 note.',
        time: '27 tháng 2 16:47 5 kí tự'
    },
    {
        title: '4 note',
        content: 'This is the 4 note.',
        time: '27 tháng 2 16:47 5 kí tự'
    },
    {
        title: '4 note',
        content: 'This is the 4 note.',
        time: '27 tháng 2 16:47 5 kí tự'
    },
    {
        title: '4 note',
        content: 'This is the 4 note.',
        time: '27 tháng 2 16:47 5 kí tự'
    },
    {
        title: '4 note',
        content: 'This is the 4 note.',
        time: '27 tháng 2 16:47 5 kí tự'
    },
    {
        title: '4 note',
        content: 'This is the 4 note.',
        time: '27 tháng 2 16:47 5 kí tự'
    },
    {
        title: '4 note',
        content: 'This is the 4 note.',
        time: '27 tháng 2 16:47 5 kí tự'
    },
    {
        title: '4 note',
        content: 'This is the 4 note.',
        time: '27 tháng 2 16:47 5 kí tự'
    },
    {
        title: '4 note',
        content: 'This is the 4 note.',
        time: '27 tháng 2 16:47 5 kí tự'
    },
    {
        title: '4 note',
        content: 'This is the 4 note.',
        time: '27 tháng 2 16:47 5 kí tự'
    },
    {
        title: '4 note',
        content: 'This is the 4 note.',
        time: '27 tháng 2 16:47 5 kí tự'
    },
    {
        title: '4 note',
        content: 'This is the 4 note.',
        time: '27 tháng 2 16:47 5 kí tự'
    },
]

const Home = ({ navigation }) => {
    const [noteTitle, setNoteTitle] = useState('');
    const [noteContent, setNoteContent] = useState('');
    const [notes, setNotes] = useState([]);
    const [selectedNote, setSelectedNote] = useState(null);

    useEffect(() => {
        loadNotes();
    }, []);

    const loadNotes = async () => {
        try {
            const storedNotes = await AsyncStorage.getItem('@notes');
            if (storedNotes !== null) {
                setNotes(JSON.parse(storedNotes));
            }
        } catch (error) {
            console.error('Error loading notes', error);
        }
    };

    const updateNote = async (note) => {
        try {
            const currentTime = new Date().toLocaleString();
            const updatedNotes = notes.map(item =>
                item.id === note.id ? { ...item, title: note.title, content: note.content, time: currentTime } : item
            );
            await AsyncStorage.setItem('@notes', JSON.stringify(updatedNotes));
            setNotes(updatedNotes);
        } catch (error) {
            console.error('Error saving note', error);
        }
    };
    const addNote = async (note) => {
        try {
            const currentTime = new Date().toLocaleString();

            const newNote = { title: note.title, content: note.content, time: currentTime, id: Date.now() };
            const updatedNotes = [...notes, newNote];
            await AsyncStorage.setItem('@notes', JSON.stringify(updatedNotes));
            setNotes(updatedNotes);
        } catch (error) {
            console.error('Error saving note', error);
        }
    };

    const deleteNote = async id => {
        try {
            Alert.alert(
                'Xóa ghi chú',
                'Ghi chú sẽ bị xóa',
                [
                    { text: 'Hủy', },
                    {
                        text: 'Xóa',
                        onPress: async () => {
                            const updatedNotes = notes.filter(note => note.id !== id);
                            await AsyncStorage.setItem('@notes', JSON.stringify(updatedNotes));
                            setNotes(updatedNotes);
                        }
                    }
                ],
                { cancelable: false }
            );


        } catch (error) {
            console.error('Error deleting note', error);
        }
    };

    const handleEdit = (item) => {
        navigation.navigate('Profile', {
            item,
            isEdit: true,
            addNote,
            updateNote,
            deleteNote
        });
    }
    const handleAdd = (item) => {
        navigation.navigate('Profile', {
            item: {
                id: '',
                title: '',
                content: '',
                time: new Date().toLocaleString()
            },
            isEdit: false,
            addNote,
            updateNote,
            deleteNote
        })
    }
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.list}>
                    {notes.map((item, index) => {
                        return (
                            <Note key={index} handleEdit={handleEdit} item={item} deleteNote={deleteNote} />
                        )
                    })}
                </View>
            </ScrollView>
            <TouchableOpacity
                onPress={handleAdd}
                style={styles.add}>
                <Ionicons
                    color={'#FAA300'}
                    size={80}
                    name='add-circle' />
            </TouchableOpacity>
            <StatusBar barStyle="light-content" />
        </View>
    )
}
export default Home