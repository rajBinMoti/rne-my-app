import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Header } from 'react-native-elements'
import { Icon } from 'react-native-elements'


const PageTwo = ({ navigation }) => {
    const BackBtn = ({ stm }) => {
        return (
            <TouchableOpacity onPress={stm}>
                <Icon
                    name='sc-telegram'
                    type='evilicon'
                    color='#fff'
                />
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
