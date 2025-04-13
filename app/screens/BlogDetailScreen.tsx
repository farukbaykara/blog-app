import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import RootStackParamList from '@/types/RootStackParamList';
import { Card, Title, Paragraph, IconButton, Props } from 'react-native-paper';

export default function BlogDetailScreen({route, navigation}: any) {
  //const route = useRoute<RouteProp<RootStackParamList, 'BlogDetailScreen'>>();
  const { blogId } = route.params; // Access the blogId parameter
  //const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const blogList = useSelector((state: RootState) => state.blog.blogList);

  const blog = blogList.find((item) => item.id === blogId);

  if (!blog) {
    return (
      <View style={styles.container}>
        <Title>No Blog Found</Title>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        {/* Larger Touchable Area for Edit Button */}
        <View style={styles.editButtonContainer}>
          <IconButton
            icon="pencil"
            size={20} // Increase icon size for better visibility
            onPress={() => navigation.navigate('EditScreen', { blogId })}
          />
        </View>
        <Card.Content>
          <Title style={styles.title}>{blog.value}</Title>
          <Paragraph style={styles.description}>{blog.description}</Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  card: {
    width: '100%',
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#fff',
    position: 'relative', // Ensure the card is a positioned container
    padding: 10,
  },
  editButtonContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 1, // Ensure the button is above other elements
    borderRadius: 20, // Add some padding for better touchability
    padding: 0, // Increase touchable area
    backgroundColor: 'rgba(0, 0, 0, 0.05)', // Optional: Add a subtle background for better visibility
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginTop: 20,
  },
});