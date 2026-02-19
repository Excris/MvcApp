import { } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { ScrollView } from 'react-native-gesture-handler';

import HeaderBar from '../components/HeaderBar';

//criar a const BANNER_IMAGE = 'rota para chamar a imagem '


export default function DetailsView({navigation}) {
    return (
        <SafeAreaView>
            <HeaderBar navigation={navigation}/>
            <ScrollView>
                <View Styles ={Styles.bannerContainer}>
                    <Image source={require(BANNER_IMAGE)}
                    resizomode ='contain'
                    Styles={Styles.bannerImagem}/>
                </View>
                <Image 
                />
                
            </ScrollView>
        </SafeAreaView>
    )
}

const Styles = StyleSheet.create({
    bannerContainer:{
height: 10
    },
    bannerImagem:{
        with: '100%',
        height: '100%',
    }
})