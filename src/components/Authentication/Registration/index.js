import React, { Component } from 'react';
import {Container,Text,Content,Body,Left,Thumbnail,Row,Grid,Header,DeckSwiper,Footer,Card,CardItem,Icon,View, Button, Input,} from 'native-base';
import {StyleSheet,Image,ProgressBarAndroid} from 'react-native';
import {material} from 'react-native-typography';
import { TouchableOpacity } from 'react-native-gesture-handler';
//import Signup1 from './signup1';
//import Wrapper from './Wrapper';

 const Register =(props)=> {
        this.props=props;
         const item=props.nextPage
        return (
            <Container style={styles.Container}>
                <View>
                    <TouchableOpacity onPress={()=>props.parentProperty.navigation.goBack()}><Text style={styles.navigator}>{'<'}</Text></TouchableOpacity>
                </View>
                <Content>
                <View style={{padding:20,marginTop:0}}>
                    <ProgressBarAndroid
                    color='#FFCE00'
                    styleAttr="Horizontal"
                    indeterminate={false}
                    progress={props.nextPage.progress}
                    />
                </View>
                <View style={{justifyContent:'center',padding:20,marginTop:0}}>
                    <Card style={{ elevation: 1}}>
                    <CardItem style={{justifyContent:'center'}}>
                    <Grid>
                        <Row style={{justifyContent:'center'}}>
                        <Text style={{...material.title,textAlign:'center',marginBottom:5,color:'#339966'}}>{item.header}</Text>
                        </Row>
                        <Row style={{justifyContent:'center'}}>
                           <Text style={{...material.caption}}>{item.subHead} </Text>
                        </Row>
                    </Grid>
                    </CardItem>
                   
                        {this.props.children}
                   
                    <CardItem style={{justifyContent:'center'}}>
                           <Button style={{...styles.regButton,backgroundColor:item.buttonColor}} onPress={()=>props.parentProperty.navigation.navigate(item.nextForm)}>
                            <Text>{item.buttonText}</Text>
                           </Button>
                    </CardItem> 
                </Card>
                </View>
                <View style={styles.footer}>
                 <TouchableOpacity onPress={()=>props.parentProperty.navigation.navigate('Login')}>
                     <Text style={styles.text}>Already have an account? Login</Text>
                </TouchableOpacity>
                </View>
              </Content>
            </Container>
        )
    }

const styles=StyleSheet.create({
    footer:{
        backgroundColor:'#339966',
        height:70,
        justifyContent:'center',
        alignItems:'center'
    },
    Container:{
        backgroundColor:'#339966',
    },
    text:{
        color:'#ffffff'
    },
    navigator:{...material.headline,padding:10,color:'#ffffff'},
    regButton:{
        width:'95%',
        justifyContent:'center',
       
        
    }
})
export default Register