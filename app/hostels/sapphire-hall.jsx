import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");
const IMAGE_SIZE = width * 0.7;

// Uncomment the line below once you drop gamaliel-hall.png into assets/hostels/
const hostelImage = require("../../assets/halls/sapphire_hall.png");

export default function SapphireHall() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.name}>Sapphire Hall</Text>

        {hostelImage ? (
          <Image source={hostelImage} style={styles.image} resizeMode="cover" />
        ) : (
          <View style={styles.placeholder}>
            <Text style={styles.placeholderText}>Image Placeholder</Text>
          </View>
        )}

        <Link href="/" style={styles.backLink}>
          Back to All Hostels
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#003366" },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  name: {
    fontFamily: "Outfit-Bold",
    fontSize: 22,
    color: "#FFD700",
    textAlign: "center",
    marginBottom: 24,
  },
  image: { width: IMAGE_SIZE, height: IMAGE_SIZE, borderRadius: 12 },
  placeholder: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#FFD700",
    borderStyle: "dashed",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#002244",
  },
  placeholderText: {
    fontFamily: "Outfit-Regular",
    fontSize: 14,
    color: "#B0D0F0",
  },
  backLink: {
    fontFamily: "Outfit-Medium",
    fontSize: 15,
    color: "#FFD700",
    marginTop: 28,
    textDecorationLine: "underline",
  },
});
