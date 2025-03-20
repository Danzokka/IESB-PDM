import Cardapio from "@/src/components/Cardapio";
import { Link } from "expo-router";
import { Text, View, ScrollView } from "react-native";

export const items = [
  {
    nome: "Café",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1200px-A_small_cup_of_coffee.JPG",
    descricao: "Café preto",
    valor: 2.50,
  },
  {
    nome: "Pão de queijo",
    imagem:
      "https://amopaocaseiro.com.br/wp-content/uploads/2022/08/yt-069_pao-de-queijo_receita-840x560.jpg",
    descricao: "Pão de queijo mineiro",
    valor: 3.50,
  },
  {
    nome: "Bolo",
    imagem:
      "https://www.estadao.com.br/resizer/v2/FIVYQFU6J5ND3PYRA6XQHR4NW4.jpg?quality=80&auth=04a93b8f4c288302da64fd8a96da7bb7cc11dff70430e4ba66587218d5b6011f&width=720&height=503&focal=0,0",
    descricao: "Bolo de cenoura",
    valor: 4.50,
  },
];

export default function Index() {
  return (
    <View className="bg-white w-full h-screen flex flex-col justify-center items-center gap-8 py-12 px-4">
      <Text className="text-3xl font-bold w-full text-left">Cardápio</Text>
      <ScrollView
        className="flex flex-col w-full "
        style={{ display: "flex", flexDirection: "column", gap: 12 }}
        contentContainerClassName="flex flex-col w-full gap-4 overflow-hidden"
      >
        {items.map((item, index) => (
          <Link href="/resumo" key={index}>
            <Cardapio props={item} />
          </Link>
        ))}
      </ScrollView>
    </View>
  );
}
