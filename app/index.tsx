import { Button } from "@/components/Button";
import { Text, View, Alert, TouchableOpacity } from "react-native";

export default function Index() {
  const showAlert = () => {
    Alert.alert("Oi", "Olá, tudo bem?");
  };

  return (
    <View className="bg-white w-full h-full flex flex-col justify-center items-center gap-8">
      <Text className="text-2xl font-bold text-yellow-600">UE</Text>
      <TouchableOpacity
        onPress={showAlert}
        className="flex gap-4 border border-black px-2 py-4 rounded-3xl hover:border-red-600"
      >
        <Text className="text-black">Clique aqui</Text>
      </TouchableOpacity>
    </View>
  );
}
