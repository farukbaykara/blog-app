import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import RootStackParamList from '@/types/RootStackParamList';
import { useDispatch } from 'react-redux';
import { setBlog } from '@/redux/blogSlice';
import { IconSymbol } from '@/components/ui/IconSymbol';
import BlogPostForm from '@/components/blog/BlogPostForm';
// Import your context

export default function CreateScreen() {

  //Const null blog
  const initialValues = {
    id: '',
    value: '',
    description: '',
  };

  return (
    <BlogPostForm initialValues={initialValues}/>
  );
}

const styles = StyleSheet.create({});