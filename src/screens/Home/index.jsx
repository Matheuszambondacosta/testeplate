import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import Title from '../../components/Title'
import { useNavigation } from '@react-navigation/native'
import { user } from "../../data/Profile"

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>

      <Title style={styles.text} title={'Home'} />

      <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate("Profile", { user })}>

        <Text style={styles.textButton}>Go to Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate("Category", { user })}>

        <Text style={styles.textButton}>Go to Category</Text>
      </TouchableOpacity>



    </View>
  )
}



