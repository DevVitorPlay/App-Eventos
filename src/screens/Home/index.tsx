import React from 'react';
import { Alert, FlatList,  Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';

export function Home() {
    const participants = [
        "vitor",
        "ViniJR",
        "Neymar",
        "Messi",
        "CR7",
        "Mbappe",
        "Halland",
        "De Paul",
        "David Villa"

    ]

    function handleParticipanteAdd() {
        if (participants.includes("vitor")) {
            return Alert.alert("Participate Existe", "Já existe um participante na lista com esse nome.")
        }
    }
    function handleParticipanteRemove(name: string) {
        Alert.alert("Remover", `Remover participante ${name}?`,[
            {
                text: 'Sim',
                onPress: () => Alert.alert("Deletado!")
            },
            {
                text: 'Não',
                style:'cancel'
            }
        ]);
        
    }
    return (
        <View style={styles.container}>
            <Text style={styles.nomeEvento}>
                Nome do evento
            </Text>
            <Text style={styles.textoEvento}>
                18 de novembro de 2023
            </Text>
            <View style={styles.form}>
                <TextInput
                    placeholder='Nome do participante'
                    placeholderTextColor="#6B6B6B"
                    style={styles.input} />
                <TouchableOpacity style={styles.button} onPress={handleParticipanteAdd}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>
        <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({item}) =>(
            <Participant 
                    key={item}
                    name={item} 
                    onRemove={() => handleParticipanteRemove(item)}/>
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
            <Text style={styles.listEmpty}>
                Niguém chegou no evento ainda? Adicione participantes a sua lista de presença
            </Text>
        )}
        />
        
         
     
           
        </View>
    );
}