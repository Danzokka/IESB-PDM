import React from "react";
import { View, Text, Image } from "react-native";

interface CardapioProps {
  props: {
    nome: string;
    imagem: string;
    descricao: string;
    valor: number;
  };
}

const Cardapio = ({ props }: CardapioProps) => {
  
  return (
    <View className="w-full flex flex-row gap-4 p-4 border border-gray-200 rounded-lg">
      {/* Imagem */}
      <Image source={{ uri: props.imagem }} className="w-24 h-24 rounded-lg" />
      <View className="w-full flex flex-col gap-4">
        {/* Nome */}
        <Text className="text-2xl font-bold text-text">{props.nome}</Text>
        {/* Descrição */}
        <Text className="text-text/75">{props.descricao}</Text>
        {/* Valor */}
        <Text className="font-semibold tracking-wide">
          R$ {props.valor.toFixed(2).replace(".", ",")}
        </Text>
      </View>
    </View>
  );
};

export default Cardapio;
