import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import RootStackParamList from '../RootStackParamList';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import BlogDetailScreen from './BlogDetailScreen';
import BlogPostForm from '@/components/blog/BlogPostForm';
import { Blog } from '@/redux/blogSlice';

export default function EditScreen({route, navigation}:any) {

  const { blogId } = route.params; // Access the blogId parameter

  const blogList = useSelector((state: RootState) => state.blog.blogList);

  const blog  = blogList.find((item) => item.id === blogId);



  return (

      <BlogPostForm initialValues={blog as Blog} />

  )
}

const styles = StyleSheet.create({})