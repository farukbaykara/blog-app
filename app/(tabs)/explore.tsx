import { StyleSheet, FlatList } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TabTwoScreen() {
  const blogList = useSelector((state: RootState) => state.blog.blogList);

  return (
    <SafeAreaView>
      <FlatList
        data={blogList}
        renderItem={({ item }) => (
          <ThemedView style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
            <ThemedText>id: {item.id} value: {item.value}</ThemedText>
          </ThemedView>
        )}
        keyExtractor={(item) => item.id} // Ensure unique keys
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
});
