import React, { Component } from 'react'
import { Text,View,StyleSheet,TextInput,TouchableOpacity} from 'react-native'
import Icon  from 'react-native-vector-icons/FontAwesome5'

export default class Login extends Component {

    constructor(){
        super();
        this.state={
            secure:true
        }
    }
    render() {
        const {secure}=this.state;
        return (
            <View style={style.background}>
                <View style={style.menu}>
                    <View >
                        <Text style={{color:'white',fontWeight:'700',fontSize:20}} >Log In</Text>
                    </View>
                    <View>
                        <Text style={{color:'#9CA5B4'}}>Don't have an account?   
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Register')}><Text style={{textAlign:'center',textDecorationLine:'underline',color:'#03A87C'}}>Sign Up </Text></TouchableOpacity></Text>
                    </View>
                </View>
                <View style={style.form}>
                    <View style={style.form_item}>
                        <Text style={style.form_title}>EMail*</Text>
                        <TextInput style={style.input}></TextInput>
                    </View>
                    <View style={style.form_item}>
                        <Text style={style.form_title}>Password*</Text>
                        <TextInput 
                            secureTextEntry={secure}
                            style={style.input}></TextInput>
                        <TouchableOpacity onPress={()=>this.setState({secure:!secure})} style={style.password_eye}>
                        <Icon name={(secure)?"eye":"eye-slash"} size={25} color={'#9CA5B4'}/>
                        </TouchableOpacity>
                    </View>
                    <View style={style.form_item}>
                        <TouchableOpacity style={[style.form_title,{flexDirection:'row',justifyContent:'flex-end'}]}>
                            <Text style={style.form_title}>Forget your Password ?</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={style.form_item}>
                        <TouchableOpacity style={style.button}>
                            <Text style={style.color_white}>Log in</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={style.form_item}>
                       <View style={{justifyContent:'center',alignItems:'center'}}>
                            <Text style={{color:'#9CA5B4'}}>Don’t have an account ?  <TouchableOpacity onPress={()=>this.props.navigation.navigate('Register')}><Text style={{textAlign:'center',textDecorationLine:'underline',color:'#03A87C'}}>Sign Up </Text></TouchableOpacity></Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const style=StyleSheet.create({
    background:{
        backgroundColor:'#21252B',
        flex:1,
        paddingVertical:30,
        paddingHorizontal:20
    },
    menu:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:40,
        alignItems:'center'
    },
    form:{
        marginTop:50,
    },
    form_item:{
        marginBottom:20,
    },
    input:{
        padding:20,
        marginTop:10,
        borderWidth:1,
        borderColor:'#5E656F',
        borderRadius:5,
        color:'white'

    },
    form_title:{
        color:'#9CA5B4'
    },
    button:{
        padding:15,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#0071DF'
    },
    color_white:{
        color:'white',
        fontWeight:'700'
    },
    password_eye:{
        position:'absolute',
        right:15,
        top:50
    }
})