import React, { PureComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';

// page d'accueil
class AccueilScreen extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={ styles.container }>
            <Text style={ styles.mess_accueil}>Accueil</Text>
            
    
            <Button
                title="Camera ;)"
                onPress={() => this.props.navigation.navigate('Camera')}
            />
        </View>

        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
    },

    mess_accueil:{
        margin: 10,
         
    }
});

export default AccueilScreen;