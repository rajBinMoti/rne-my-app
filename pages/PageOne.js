import React from 'react'
import { View, Text } from 'react-native'

import { Button } from 'react-native-elements';

const PageOne = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Page One</Text>
            <Button
                title="Page Two"
                onPress={() => navigation.navigate('Page Two')}
                icon={{
                    name: "chevron-forward-outline",
                    type: 'ionicon',
                    size: 15,
                    color: "white"
                }}

            />
        </View>
    )
}

export default PageOne
