import { FlatList, SafeAreaView, Text } from 'react-native'

export default function cesta(props){
    const renderItem = ({item}) => {
    <Text>{item}</Text>
    }
    return(
        <SafeAreaView>
            <FlatList 
            data={props.dados}
            renderItem={({item}) => <Text>[item]</Text>}
            keyExtractor={item => item}
            />
        </SafeAreaView>
    )
}