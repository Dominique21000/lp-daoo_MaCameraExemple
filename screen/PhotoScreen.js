import React, { PureComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Button, Image } from 'react-native';


class PhotoScreen extends React.Component{
    constructor(props)
    {
        super(props)        
    }    

    _onPressButton = () => {
        this.props.navigation.navigate('Camera');
    }

    render(){
        //console.log(this.props)
        const { route } = this.props;
        const { photo } = route.params;
        
       
        return(
            <View style={Styles.container}>
                <Text style={Styles.title}>Voici votre photo</Text>
                <Image
                    style={{width: 300, height: 400}}
                    source={{uri:photo}}
                />
                <TouchableOpacity onPress={ this._onPressButton }>
                    <Text style={Styles.reprendre}>Reprendre une photo ?</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const Styles = StyleSheet.create({
    title:{
        fontWeight:"bold",
        fontSize:20,
        alignSelf:"center",
        justifyContent:"center",
        marginBottom:10,
    },
    
    container:{
        flex:1,
        alignSelf:"center",
        justifyContent:"center",
    },

    reprendre:{
        color:'blue',
        alignSelf:"center",
        justifyContent:"center",
        fontWeight:"bold",
        marginTop:10,
    }
})

export default PhotoScreen;