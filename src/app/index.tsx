import Cardapio from "@/src/components/Cardapio/Cardapio";
import { Text, View, ScrollView } from "react-native";

export default function Index() {
  const items = [
    {
      nome: "Café",
      imagem:
        "https://fastly.picsum.photos/id/721/200/300.jpg?hmac=6g_vLTUju_TGWN7cMKTjZgzqps-JjmHIS0KSuFsgVyc",
      descricao: "Café preto",
      valor: 2.5,
    },
    {
      nome: "Pão de queijo",
      imagem: "https://picsum.photos/200/300",
      descricao: "Pão de queijo mineiro",
      valor: 3.5,
    },
    {
      nome: "Bolo",
      imagem: "https://picsum.photos/200/300",
      descricao: "Bolo de cenoura",
      valor: 4.5,
    },
  ];

  return (
    <View className="bg-white w-full h-screen flex flex-col justify-center items-center gap-8 py-12 px-4">
      <Text className="text-2xl font-bold text-yellow-600 w-full text-left">Cardápio</Text>
      <ScrollView
        className="flex flex-col w-full "
        style={{ display: "flex", flexDirection: "column", gap: 12 }}
        contentContainerClassName="flex flex-col w-full gap-4 overflow-hidden"
      >
        {items.map((item, index) => (
          <Cardapio key={index} props={item} />
        ))}
      </ScrollView>
    </View>
  );
}
