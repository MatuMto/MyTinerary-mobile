import React from 'react'
import { StyleSheet, Text } from 'react-native'

const itineraries = (props)=>{
    console.log(props.route.params.nombre)

    return (
        <>
            <Text>Itineraries Component</Text>
            <Text>{props.route.params.nombre}</Text>
            {/* En realidad tendria que recibir el id y mostrar las cosas por medio del id */}
        </>
    )
}

const styles = StyleSheet.create({

})

export default itineraries