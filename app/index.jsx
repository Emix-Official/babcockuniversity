import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const HOSTELS = [
  { name: "Winslow Hall", route: "/hostels/winslow-hall" },
  { name: "Diamond Hall", route: "/hostels/diamond-hall" },
  { name: "Samuel Akande Hall", route: "/hostels/samuel-akande-hall" },
  { name: "Gideon Troopers", route: "/hostels/gideon-troopers" },
  { name: "White Hall", route: "/hostels/white-hall" },
  { name: "Saphhire Hall", route: "/hostels/sapphire-hall" },
  {
    name: "Felicia Adebisi Dada Hall",
    route: "/hostels/felicia-adebisi-dada-hall",
  },
  { name: "Bethel Hall", route: "/hostels/bethel-hall" },
  { name: "Neal Wilson Hall", route: "/hostels/neal-wilson-hall" },
  { name: "Crystal Hall", route: "/hostels/crystal-hall" },
  { name: "Queen Esther Hall", route: "/hostels/queen-esther-hall" },
  { name: "Nelson Mandela Hall", route: "/hostels/nelson-mandela" },
  { name: "Nyberg Hall", route: "/hostels/nyberg-hall" },
  { name: "Topaz Hall", route: "/hostels/topaz-hall" },
  { name: "Welch Hall", route: "/hostels/welch-hall" },
  { name: "Platinum Hall", route: "/hostels/platinum-hall" },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Crest image — replace assets/hostels/crest.png with the real one */}
        <Image
          source={require("../assets/hostels/crest.png")}
          style={styles.crest}
          resizeMode="contain"
        />

        <Text style={styles.title}>Babcock University</Text>
        <Text style={styles.subtitle}>Student Hostels </Text>
        <Text style={styles.subtitle}>GROUP 3 </Text>

        <View style={styles.line} />

        {/* Simple list of hostel links */}
        {HOSTELS.map((hostel) => (
          <Link key={hostel.route} href={hostel.route} style={styles.link}>
            {hostel.name}
          </Link>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#003366",
  },
  scroll: {
    alignItems: "center",
    paddingVertical: 40,
    paddingHorizontal: 24,
  },
  crest: {
    width: 90,
    height: 90,
    marginBottom: 16,
  },
  title: {
    fontFamily: "Outfit-Bold",
    fontSize: 22,
    color: "#FFD700",
    textAlign: "center",
  },
  subtitle: {
    fontFamily: "Outfit-Regular",
    fontSize: 14,
    color: "#B0D0F0",
    marginTop: 4,
    textAlign: "center",
  },
  line: {
    width: 50,
    height: 2,
    backgroundColor: "#FFD700",
    marginVertical: 24,
  },
  link: {
    fontFamily: "Outfit-Medium",
    fontSize: 16,
    color: "#FFD700",
    textAlign: "center",
    paddingVertical: 10,
    textDecorationLine: "underline",
  },
});
