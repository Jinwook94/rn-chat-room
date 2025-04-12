import { SafeAreaView as DefaultSafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

import { ThemedViewProps, ThemedView } from '@/components/themed/ThemedView';

export function SafeAreaView({ style, ...props }: ThemedViewProps) {
    return (
        <DefaultSafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
            <ThemedView style={[styles.innerContainer, style]} {...props} />
        </DefaultSafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
    },
});
