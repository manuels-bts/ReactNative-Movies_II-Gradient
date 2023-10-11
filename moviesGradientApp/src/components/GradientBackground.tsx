import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { GradientContext } from '../context/GradiantContext';

interface Props {
    children: JSX.Element | JSX.Element[];
}


export const GradientBackground = ({ children }: Props) => {

    const { colors } = useContext(GradientContext)

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: 'cyan'
        }}
        >
            <LinearGradient
                colors={[colors.primary, colors.secondary]}
                style={{ ...StyleSheet.absoluteFillObject }}
                start={{ x: 0.1, y: 0.1 }}
                end={{ x: 0.5, y: 0.7 }}
            />
            {children}
        </SafeAreaView>
    )
}
