import React from 'react';
import {SafeAreaView, View} from 'react-native';
import Title from "../../components/Title";

const Home = () => {
    return (
        <SafeAreaView>
            <View>
                <Title text={"Where do"} />
                <Title text={"you want to go?"} bold />
            </View>
        </SafeAreaView>
    );
};


export default Home;