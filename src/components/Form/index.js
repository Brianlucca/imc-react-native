import React from "react"
import { View, Text, TextInput, Button } from "react-native"
import ResultImc from "./resultImc";

export default function Form() {
    return(
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput  
                placeholder="EX: 1.75" 
                keyboardType="numeric"/>

                <Text>Peso</Text>
                <TextInput
                placeholder="EX: 80.00" 
                keyboardType="numeric"/>
                <Button title="Calcular"/>
            </View>
            {/* <ResultImc  messageResultImc={messageImc} ResultImc={imc}/> */}
        </View>
    );
}