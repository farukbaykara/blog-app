import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import RootStackParamList from '@/app/RootStackParamList';
import { useDispatch } from 'react-redux';
import { setBlog } from '@/redux/blogSlice';
import { Button } from 'react-native-paper';
import { v4 as uuidv4 } from 'uuid';
import { Blog } from '../../redux/blogSlice';


export default function BlogPostForm(props: {initialValues: Blog}) {
  
  
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const dispatch = useDispatch();
  const [blogTitle, setBlogTitle] = useState(props.initialValues.value || '');
  const [blogDescription, setBlogDescription] = useState(props.initialValues.description || '');


  const handleAddBlog = () => {
    if (blogTitle.trim()) {
      dispatch(setBlog({ id: uuidv4().toString(), value: blogTitle, description: blogDescription }));
      navigation.navigate('index')
    }
  };


  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter blog title"
        value={blogTitle}
        onChangeText={setBlogTitle}
      />
      <TextInput
        style={styles.inputDescription}
        placeholder="Enter blog description"
        value={blogDescription}
        onChangeText={setBlogDescription}
        multiline={true} // Enable multiline input
        textAlignVertical="top" // Ensure text starts at the top
      />
      <Button mode="contained" onPress={handleAddBlog} style={styles.saveButton}>
        Add Blog
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    marginBottom: 20,
  },
  saveButton: {
    width: '100%',
    padding: 10,
    backgroundColor: 'black',
    borderRadius: 5,
  },
  inputDescription: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    marginBottom: 20,
    height: 200,
  }
});