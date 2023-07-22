import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView, ImageBackground, Dimensions, ToastAndroid } from 'react-native';
const SPACING = 10;
const { height } = Dimensions.get("window");
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

export default function ProductDetail({ route, navigation }) {
    const { item } = route.params;
    const [amount, setAmount] = useState(1);

    const addToCart = async () => {
        let cartData = await AsyncStorage.getItem("cartData");
        if (cartData) {
            cartData = JSON.parse(cartData);
            cartData.push({
                id: item.id,
                name: item.name,
                image: item.image,
                price: item.price,
                cate: item.cate,
                amount: amount,
            });
            ToastAndroid.show(
                'Item Added Successfully to cart',
                ToastAndroid.SHORT,
            );
        } else {
            cartData = [];
            cartData.push({
                id: item.id,
                name: item.name,
                image: item.image,
                price: item.price,
                cate: item.cate,
                amount: amount,
            });
            ToastAndroid.show(
                'Item Added Successfully to cart',
                ToastAndroid.SHORT,
            );
        }
        AsyncStorage.setItem("cartData", JSON.stringify(cartData));
    };

    return (
        <>
            <ScrollView>
                <View>
                    <ImageBackground
                        style={{
                            padding: SPACING * 2,
                            height:height/ 2.5,
                            paddingTop: SPACING * 4,
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                        resizeMode="contain"
                        source={item.image}
                    >
                        <TouchableOpacity
                            style={{
                                height: SPACING * 4.5,
                                width: SPACING * 4.5,
                                backgroundColor: '#fff',
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: SPACING * 2.5,
                            }}
                            onPress={() => navigation.goBack()}
                        >
                            <Ionicons
                                name="arrow-back"
                                size={SPACING * 2.5}
                                color='#000'
                            />
                        </TouchableOpacity>
                    </ImageBackground>
                    <View
                        style={{
                            padding: SPACING * 2,
                            paddingTop: SPACING * 3,
                            marginTop: -SPACING *1,
                            borderTopLeftRadius: SPACING * 2,
                            borderTopRightRadius: SPACING * 2,
                            backgroundColor: '#fff',
                        }}>
                        <View
                            style={{
                                flexDirection: "row",
                                marginBottom: SPACING * 3,
                                alignItems: "center",
                            }}>
                            <View style={{ width: "70%" }}>
                                <Text
                                    style={{
                                        fontSize: SPACING * 2.5,
                                        color: '#000',
                                        fontWeight: "600",
                                       
                                    }}
                                >
                                    {item.name}
                                </Text>
                            </View>
                            
                        </View >
                        <View >
                            <Text style={{
                                        fontSize: SPACING * 2,
                                           
                                    }}>
                                {item.cate}</Text>
                        </View>
                        <View>
                            <Text>
                                {item.description}
                            </Text>
                        </View>
                        
                    </View>
                </View>
            </ScrollView>
            <SafeAreaView>
                <View style={{ 
                    
                    justifyContent: 'space-between', 
                    alignItems: 'center' 
                    }}>
                    <View style={{ flexDirection: 'row', 
                          justifyContent: 'space-between', 
                        alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => setAmount(prev => prev + 1)}>
                            <Ionicons name='add-circle' size={SPACING * 4}></Ionicons>
                        </TouchableOpacity>
                        <Text style={{ width: 20, alignSelf: 'center' }}>{amount}</Text>
                        <TouchableOpacity onPress={() => setAmount(prev => {
                            if (prev == 1) {
                                return 1;
                            }
                            else {
                                return prev - 1
                            }})}>
                            <Ionicons name='remove-circle' size={SPACING * 4}></Ionicons>
                        </TouchableOpacity>
                </View>
                
                </View>
                    <View style={{ padding: SPACING * 2, 
                        flexDirection: 'row', 
                        justifyContent: 'space-between', 
                        alignItems: 'center' }}>
                        <Text style={{
                            marginRight: 10,
                            borderWidth: 2,
                            borderColor: '#000',
                            padding: SPACING,
                            borderRadius: SPACING,}}>
                            ${item.price}
                        </Text>
                    <TouchableOpacity
                        style={{
                            padding: SPACING * 2,
                            backgroundColor: '#000',
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: SPACING * 2,
                            flex: 1
                        }}
                        onPress={addToCart}>
                        <Text
                            style={{
                                fontSize: SPACING * 2,
                                color: '#fff',
                                fontWeight: "700",
                            }}>
                            Add to cart
                        </Text>
                    </TouchableOpacity>
                </View>
                
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});