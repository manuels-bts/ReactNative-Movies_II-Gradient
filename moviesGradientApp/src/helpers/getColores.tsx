
import { getColors } from 'react-native-image-colors'


export const getImageColors = async (url: string) => {

    const colores = await getColors(url, {});

    let primary;
    let secondary;

    if (colores.platform === 'android') {
        primary = colores.dominant
        secondary = colores.average
    } else if (colores.platform == 'ios') {
        primary = colores.primary
        secondary = colores.secondary
    } else {
        primary = colores.dominant
        secondary = colores.vibrant
    }

    return [primary, secondary]
}