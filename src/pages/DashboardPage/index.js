import {Image, View, Text, TouchableOpacity} from 'react-native'
import styles from './styles'
import { Link } from '@react-navigation/native';

export default function DashboardPage(){
    return (
        <View style={styles.container}>
            <Text style={styles.txt}>Reciclópium</Text>
            <Image source={require('../../../assets/logo.png')} style={styles.logo}/>
            <View style={styles.secretLinks}>
                <Link to={{screen: 'LoginPage'}}>Clique aqui! </Link>
            </View>
        </View>
    )
}
