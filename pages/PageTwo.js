import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { Header } from 'react-native-elements'


const PageTwo = ({ navigation }) => {
    const BackBtn = ({ stm }) => {
        return (
            <TouchableOpacity onPress={stm}>
                <Text >Back</Text>
            </TouchableOpacity>
        );
    }

    return (
        <>
            <Header
                leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
                centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                // rightComponent={{ icon: 'home', color: '#fff' }}
                rightComponent={<BackBtn stm={() => navigation.navigate('Page One')} />}
            />
        </>
    )
}

export default PageTwo
