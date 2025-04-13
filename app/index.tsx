import { Image, StyleSheet, Platform, Text, View, SafeAreaView, Button, FlatList, TouchableOpacity } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { useDispatch, useSelector } from 'react-redux';
import { setBlog, deleteBlog } from '@/redux/blogSlice';
import { RootState } from '@/redux/store';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import RootStackParamList from '@/types/RootStackParamList';



export default function App() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const dispatch = useDispatch();
  const blogList = useSelector((state: RootState) => state.blog.blogList);



  const handleRemove = (id: string) => {
    dispatch(deleteBlog(id)); // Dispatch the remove action with the item's ID
  };


  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          data={blogList}
          renderItem={({ item }) => (
            <TouchableOpacity onPress= {() => navigation.navigate('BlogDetailScreen', {blogId: item.id})}>
              <ThemedView
                style={{
                  padding: 10,
                  borderBottomWidth: 1,
                  borderBottomColor: '#ccc',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <ThemedText>{item.value}</ThemedText>
                <EvilIcons
                  name="trash"
                  size={24}
                  color="black"
                  onPress={() => handleRemove(item.id.toString())}
                />
              </ThemedView>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id} // Ensure unique keys
          contentContainerStyle={{ paddingBottom: 20 }} // Add padding to avoid clipping
        />

      </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Arka plan rengi
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
