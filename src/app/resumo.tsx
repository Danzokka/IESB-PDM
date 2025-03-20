import React from "react";
import { View, Text, ScrollView } from "react-native";
import { items } from "./index";
import Cardapio from "../components/Cardapio";
import { Button } from "../components/ui/button";
import { Link } from "expo-router";

const Resumo = () => {
  return (
    <View className="bg-white w-full min-h-screen h-full flex flex-col items-center gap-4 py-12 px-4">
      <Text className="text-3xl font-bold w-full text-left">
        Resumo da Compra
      </Text>
      <View className="w-full flex flex-col gap-4">
        <Text>
          {items.length} {items.length > 1 ? "itens" : "item"} selecionado
        </Text>
        <ScrollView
          className="flex-grow-0 w-full"
          contentContainerClassName="flex flex-col w-full gap-4 overflow-hidden "
        >
          {items.map((item, index) => (
            <Cardapio props={item} key={index} />
          ))}
        </ScrollView>
      </View>
      <Text className="w-full text-2xl text-left font-bold">
        Total: R$ {items.reduce((acc, item) => acc + item.valor, 0)}
      </Text>
      <Link href="/sign-up" asChild>
        <Button variant="default" className="w-full">
          <Text className="text-white">Finalizar Compra</Text>
        </Button>
      </Link>
    </View>
  );
};

export default Resumo;
