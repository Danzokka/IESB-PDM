import { StyleSheet, Text, View } from 'react-native'
import Cardapio from './Cardapio'
import React from 'react'

interface CategoriaProps {
  category: string
  items: {
    nome: string
    imagem: string
    descricao: string
    valor: number
  }[]
}

export default function Categoria({ category, items }: CategoriaProps) {
  return (
    <View className='w-full flex flex-col gap-4'>
      <Text className='text-xl font-semibold'>{category}</Text>
      <View className='border border-gray-100' />
      {items.map((item) => (
        <Cardapio props={item} key={item.nome} />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({})