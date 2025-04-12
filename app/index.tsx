import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed/ThemedText';
import { ThemedView } from '@/components/themed/ThemedView';
import { SafeAreaView } from '@/components/ui/SafeAreaView';

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <ThemedView style={styles.content}>
                <ThemedText style={styles.title}>Welcome to Your App</ThemedText>
                <ThemedText style={styles.description}>
                    Start building your amazing app by editing app/index.tsx
                </ThemedText>
            </ThemedView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
    },
});
