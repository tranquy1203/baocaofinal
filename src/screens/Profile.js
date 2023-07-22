import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { View, Text, StatusBar, Image, TouchableOpacity } from "react-native";

export default function Profile({ navigation }) {
    const [user, setuser] = useState(null);
    const getUserData = async () => {
        let curUser = await AsyncStorage.getItem("curUser");
        curUser = JSON.parse(curUser);
        setuser(curUser);
    };
    const logOut = async () => {
        await AsyncStorage.removeItem("curUser");
        navigation.reset({
            index: 0,
            routes: [{ name: "Login" }],
        });
    };
    useEffect(() => {
        getUserData(user);
    }, []);
    return (
        <View
            style={{
                backgroundColor: "#fff",
                flex: 1,
                width: "100%",
                paddingTop: StatusBar.currentHeight + 30,
                paddingHorizontal: 12,
            }}>
            <View style={{ flexDirection: 'column', alignItems: "center" }}>
                <Image
                    style={{
                        height: 120,
                        width: 120,
                        borderRadius: 100,
                    }}
                    source={{ uri: "https://i.pravatar.cc/300" }}
                />
                <Text
                    style={{
                        fontSize: 24,
                        fontWeight: "bold",
                    }}
                >
                    {user && user.name}
                </Text>
                <Text
                    style={{
                        fontSize: 12,
                    }}
                >
                    {user && user.email}
                </Text>
                <View
                    style={{
                        flexDirection: "row",
                        marginTop: 20,
                        paddingBottom: 12,
                        borderBottomColor: "gray",
                        borderBottomWidth: 1,
                    }}
                >
                    <Text
                        style={{
                            fontWeight: "bold",
                            fontSize: 20,
                            flex: 1,
                            textAlign: "center",
                        }}
                    >
                        {"Đang Giao"}
                    </Text>
                    <Text
                        style={{
                            fontWeight: "bold",
                            fontSize: 20,
                            flex: 1,
                            textAlign: "center",
                        }}
                    >
                        {"Đã Giao"}
                    </Text>
                    <Text
                        style={{
                            fontWeight: "bold",
                            fontSize: 20,
                            flex: 1,
                            textAlign: "center",
                        }}
                    >
                        {"Đã Hủy"}
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                    }}>
                    <Text
                        style={{
                            color: "#2FDBBC",
                            fontSize: 25,
                            flex: 1,
                            textAlign: "center",
                        }}
                    >
                        {"00"}
                    </Text>
                    <Text
                        style={{
                            color: "#2FDBBC",
                            fontSize: 25,
                            flex: 1,
                            textAlign: "center",
                        }}
                    >
                        {"00"}
                    </Text>
                    <Text
                        style={{
                            color: "#2FDBBC",
                            fontSize: 25,
                            flex: 1,
                            textAlign: "center",
                        }}
                    >
                        {"00"}
                    </Text>
                </View>
            </View>
            <View>
                <View style={{ 
                                            flexDirection: 'row', 
                                        backgroundColor: '#F4F1F9', 
                                        //justifyContent: 'center',   
                                        padding: 15, 
                                        //borderRadius: 20, 
                                        justifyContent: 'space-between',
                                        marginVertical:20 
                                        }} 
                                        onPress={() => navigation.goBack()}>
                    <Text style={{
                                color: "#000",
                                fontSize: 16,
                                fontWeight: "bold",
                            }}>Notification</Text>
                </View>
                <View style={{ 
                                            flexDirection: 'row', 
                                        backgroundColor: '#F4F1F9', 
                                        //justifyContent: 'center', 
                                        padding: 15, 
                                        //borderRadius: 20, 
                                        justifyContent: 'space-between',
                                        marginVertical:-15,
                                        marginBottom:20
                                        }} >
                    <Text style={{
                                color: "#000",
                                fontSize: 16,
                                fontWeight: "bold",
                            }}>Purchase Order</Text>
                </View>
                <View style={{ 
                                            flexDirection: 'row', 
                                        backgroundColor: '#F4F1F9', 
                                        //justifyContent: 'center', 
                                        padding: 15, 
                                        //borderRadius: 20, 
                                        justifyContent: 'space-between',
                                        marginVertical:-15
                                        }} 
                                        onPress={() => navigation.goBack()}>
                    <Text style={{
                                color: "#000",
                                fontSize: 16,
                                fontWeight: "bold",
                            }}>WishList</Text>
                </View>
            </View>   
            <TouchableOpacity style={{ 
                                        flexDirection: 'row', 
                                       backgroundColor: '#5EA33A', 
                                       justifyContent: 'center', 
                                       padding: 15, 
                                       borderRadius: 20, 
                                       marginVertical:50 
                                    }} 
                              onPress={logOut}>
                               
                <Text style={{
                            color: "#eee",
                            fontSize: 16,
                            fontWeight: "bold",
                        }}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
}
