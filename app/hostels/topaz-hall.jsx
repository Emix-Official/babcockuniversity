import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  Pressable,
  Linking,
} from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");
const IMAGE_WIDTH = Math.min(width - 48, 400);

const hostelImage = require("../../assets/halls/topaz_hall.png");

export default function TopazHall() {
  const mapQuery = "Topaz Hall Babcock University Ilishan-Remo Ogun State Nigeria";

  const openGoogleMaps = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;
    Linking.openURL(url);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <Link href="/" asChild>
          <Pressable style={styles.backBtn}>
            <Text style={styles.backBtnText}>‹ Back to Hostels</Text>
          </Pressable>
        </Link>

        <Text style={styles.name}>Topaz Hall</Text>
        <View style={styles.badgeRow}>
          <View style={[styles.badge, styles.genderBadge]}>
            <Text style={styles.badgeText}>Male Residence</Text>
          </View>
          <View style={[styles.badge, styles.tierBadge]}>
            <Text style={styles.tierBadgeText}>Premium Tier</Text>
          </View>
          <View style={[styles.badge, styles.capacityBadge]}>
            <Text style={styles.capacityBadgeText}>4-6 per Room</Text>
          </View>
        </View>

        <View style={styles.imageCard}>
          <Image source={hostelImage} style={styles.image} resizeMode="cover" />
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.sectionTitle}>About This Hall</Text>
          <Text style={styles.description}>
            Topaz Hall is a contemporary male residential hall at Babcock University designed with modern aesthetics and practical communal layouts. Offering 4 to 6 student room configurations, it features internal en-suite bathrooms, tile finishing, study desks, and an attentive residential support team.
          </Text>

          <View style={styles.featureGrid}>
            <View style={styles.featureItem}>
              <Text style={styles.featureLabel}>Room Capacity</Text>
              <Text style={styles.featureValue}>4-6 Students per Room</Text>
            </View>
            <View style={styles.featureItem}>
              <Text style={styles.featureLabel}>Restroom Facilities</Text>
              <Text style={styles.featureValue}>Internal En-suite</Text>
            </View>
            <View style={styles.featureItem}>
              <Text style={styles.featureLabel}>Living Standards</Text>
              <Text style={styles.featureValue}>Premium Tile Finish</Text>
            </View>
            <View style={styles.featureItem}>
              <Text style={styles.featureLabel}>Hall Supervision</Text>
              <Text style={styles.featureValue}>Resident Administrator</Text>
            </View>
          </View>
        </View>

        <View style={styles.mapCard}>
          <Text style={styles.sectionTitle}>Campus Location</Text>
          <Text style={styles.locationText}>
            Topaz Hall, Babcock University, Ilishan-Remo, Ogun State, Nigeria
          </Text>
          <Text style={styles.locationSub}>
            Situated within the modern residential sector of the main university campus.
          </Text>
          <Pressable style={styles.mapButton} onPress={openGoogleMaps}>
            <Text style={styles.mapButtonText}>View on Google Maps</Text>
          </Pressable>
        </View>

        <Link href="/" asChild>
          <Pressable style={styles.bottomBackBtn}>
            <Text style={styles.bottomBackText}>Back to All Hostels</Text>
          </Pressable>
        </Link>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#F7F9FC" },
  scroll: { alignItems: "center", paddingVertical: 24, paddingHorizontal: 20 },
  backBtn: { alignSelf: "flex-start", marginBottom: 16, paddingVertical: 6, paddingHorizontal: 4 },
  backBtnText: { fontFamily: "Outfit-Medium", fontSize: 14, color: "#003366" },
  name: { fontFamily: "Outfit-Bold", fontSize: 26, color: "#003366", textAlign: "center", marginBottom: 8 },
  badgeRow: { flexDirection: "row", gap: 8, marginBottom: 20, flexWrap: "wrap", justifyContent: "center" },
  badge: { paddingHorizontal: 12, paddingVertical: 4, borderRadius: 12 },
  genderBadge: { backgroundColor: "#E2E8F0" },
  badgeText: { fontFamily: "Outfit-Medium", fontSize: 12, color: "#1A202C" },
  tierBadge: { backgroundColor: "#003366" },
  tierBadgeText: { fontFamily: "Outfit-SemiBold", fontSize: 12, color: "#FFD700" },
  capacityBadge: { backgroundColor: "#FEF3C7" },
  capacityBadgeText: { fontFamily: "Outfit-Medium", fontSize: 12, color: "#92400E" },
  imageCard: { width: IMAGE_WIDTH, height: IMAGE_WIDTH * 0.72, borderRadius: 16, overflow: "hidden", backgroundColor: "#E2E8F0", marginBottom: 20, shadowColor: "#000", shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.1, shadowRadius: 8, elevation: 4 },
  image: { width: "100%", height: "100%" },
  infoCard: { width: "100%", maxWidth: 440, backgroundColor: "#FFFFFF", borderRadius: 16, padding: 20, marginBottom: 16, borderWidth: 1, borderColor: "#E2E8F0", shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 6, elevation: 2 },
  sectionTitle: { fontFamily: "Outfit-Bold", fontSize: 18, color: "#003366", marginBottom: 10 },
  description: { fontFamily: "Outfit-Regular", fontSize: 14, color: "#4A5568", lineHeight: 22, marginBottom: 18 },
  featureGrid: { flexDirection: "row", flexWrap: "wrap", gap: 12 },
  featureItem: { width: "47%", backgroundColor: "#F8FAFC", borderRadius: 10, padding: 12, borderWidth: 1, borderColor: "#EDF2F7" },
  featureLabel: { fontFamily: "Outfit-Regular", fontSize: 11, color: "#718096", marginBottom: 4 },
  featureValue: { fontFamily: "Outfit-SemiBold", fontSize: 13, color: "#1A202C" },
  mapCard: { width: "100%", maxWidth: 440, backgroundColor: "#FFFFFF", borderRadius: 16, padding: 20, marginBottom: 24, borderWidth: 1, borderColor: "#E2E8F0", shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 6, elevation: 2 },
  locationText: { fontFamily: "Outfit-SemiBold", fontSize: 14, color: "#2D3748", marginBottom: 4 },
  locationSub: { fontFamily: "Outfit-Regular", fontSize: 12, color: "#718096", marginBottom: 16 },
  mapButton: { backgroundColor: "#003366", borderRadius: 12, paddingVertical: 12, alignItems: "center", justifyContent: "center" },
  mapButtonText: { fontFamily: "Outfit-SemiBold", fontSize: 14, color: "#FFD700" },
  bottomBackBtn: { paddingVertical: 12, paddingHorizontal: 20 },
  bottomBackText: { fontFamily: "Outfit-Medium", fontSize: 14, color: "#003366", textDecorationLine: "underline" },
});
