import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { Button } from "./ui/button";
import { CardapioItem } from "../data/cardapio";
import { SquarePlus } from "lucide-react-native";
import { useCart } from "../context/Cart";

interface CardapioProps {
  props: CardapioItem;
}

const Cardapio = ({ props }: CardapioProps) => {
  const { addToCart } = useCart();

  const handleButtonPress = () => {
    // Lógica para adicionar ao carrinho
    addToCart(props);
    alert("Item adicionado ao carrinho!");
  };

  return (
    <View className="w-full flex flex-row gap-4 p-4 border border-gray-200 rounded-lg relative">
      {/* Botão de "+" no canto superior direito */}
      <Button
        className="absolute top-2 right-2 rounded-full active:bg-transparent"
        onPress={handleButtonPress}
        hitSlop={20}
        variant={"ghost"}
        size={"icon"}
      >
        <SquarePlus color="red" />
      </Button>

      {/* Imagem */}
      <Image source={{ uri: props.imagem }} className="w-24 h-24 rounded-lg" />
      <View className="w-full flex flex-col gap-4">
        {/* Nome */}
        <Text className="text-2xl font-bold text-text">{props.nome}</Text>
        {/* Descrição */}
        <Text className="text-text/75">{props.descricao}</Text>
        {/* Valor */}
        <Text className="font-semibold tracking-wide text-accent w-1/2">
          R$ {props.valor.toFixed(2).replace(".", ",")}
        </Text>
      </View>
    </View>
  );
};

export default Cardapio;
