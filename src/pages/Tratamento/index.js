import {Image, Text, View} from 'react-native'
import styles from './styles'

export default function DashboardPage(){
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/simbolo2.png')} style={styles.logo}/>
            <Text style={styles.txt}>Seu lixo será recolido!</Text>
        </View>
    )
}
