import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const MALE_HOSTELS = {
  classic: [
    {
      name: "Winslow Hall",
      route: "/hostels/winslow-hall",
      form: "2 in a room • En-suite",
      tier: "Classic",
      image: require("../assets/halls/winslow_hall.jpeg"),
    },
    {
      name: "Gideon Troopers",
      route: "/hostels/gideon-troopers",
      form: "2 in a room • Medical",
      tier: "Classic",
      image: require("../assets/halls/gideon_troopers_hall.jpeg"),
    },
    {
      name: "Samuel Akande Hall",
      route: "/hostels/samuel-akande-hall",
      form: "4 in a room • En-suite",
      tier: "Classic",
      image: require("../assets/halls/samuel-akande_hall.png"),
    },
    {
      name: "Bethel Hall",
      route: "/hostels/bethel-hall",
      form: "4 in a room • En-suite",
      tier: "Classic",
      image: require("../assets/halls/bethel_splendor_hall.jpeg"),
    },
  ],
  premium: [
    {
      name: "Welch Hall",
      route: "/hostels/welch-hall",
      form: "4 in a room • Premium",
      tier: "Premium",
      image: require("../assets/halls/welch_hall.png"),
    },
    {
      name: "Nelson Mandela Hall",
      route: "/hostels/nelson-mandela",
      form: "6 in a room • Premium",
      tier: "Premium",
      image: require("../assets/halls/nelson-mandela_hall.jpeg"),
    },
    {
      name: "Neal Wilson Hall",
      route: "/hostels/neal-wilson-hall",
      form: "6 in a room • Premium",
      tier: "Premium",
      image: require("../assets/halls/neal-wilson_hall.png"),
    },
    {
      name: "Topaz Hall",
      route: "/hostels/topaz-hall",
      form: "4-6 in a room • Premium",
      tier: "Premium",
      image: require("../assets/halls/topaz_hall.png"),
    },
  ],
  regular: [
    {
      name: "Gamaliel Hall",
      route: "/hostels/winslow-hall",
      form: "Regular Form • Standard",
      tier: "Regular",
      image: require("../assets/halls/winslow_hall.jpeg"),
    },
  ],
};

const FEMALE_HOSTELS = {
  classic: [
    {
      name: "Felicia Adebisi Dada Hall",
      route: "/hostels/felicia-adebisi-dada-hall",
      form: "Mama Dada • En-suite",
      tier: "Classic",
      image: require("../assets/halls/felicia_Adebisi.jpg"),
    },
    {
      name: "Queen Esther Hall",
      route: "/hostels/queen-esther-hall",
      form: "4 in a room • Classic",
      tier: "Classic",
      image: require("../assets/halls/queen-esther_hall.jpeg"),
    },
    {
      name: "Platinum Hall",
      route: "/hostels/platinum-hall",
      form: "4 in a room • Classic",
      tier: "Classic",
      image: require("../assets/halls/platnium_hall.jpeg"),
    },
    {
      name: "Diamond Hall",
      route: "/hostels/diamond-hall",
      form: "5 in a room • Modern",
      tier: "Classic",
      image: require("../assets/halls/diamond_hall.png"),
    },
  ],
  premium: [
    {
      name: "Crystal Hall",
      route: "/hostels/crystal-hall",
      form: "4-6 in a room • Premium",
      tier: "Premium",
      image: require("../assets/halls/crystal_hall.png"),
    },
    {
      name: "Sapphire Hall",
      route: "/hostels/sapphire-hall",
      form: "4-6 in a room • Premium",
      tier: "Premium",
      image: require("../assets/halls/sapphire_hall.png"),
    },
  ],
  regular: [
    {
      name: "White Hall",
      route: "/hostels/white-hall",
      form: "Regular Form • Standard",
      tier: "Regular",
      image: require("../assets/halls/white_hall.jpeg"),
    },
    {
      name: "Nyberg Hall",
      route: "/hostels/nyberg-hall",
      form: "Regular Form • Standard",
      tier: "Regular",
      image: require("../assets/halls/nyberg_hall.jpeg"),
    },
  ],
};

export default function HomeScreen() {
  const [selectedGender, setSelectedGender] = useState(null); // null, 'male', or 'female'
  const [activeTier, setActiveTier] = useState("all"); // 'all', 'classic', 'premium', 'regular'

  const currentData = selectedGender === "male" ? MALE_HOSTELS : FEMALE_HOSTELS;

  const renderHostelCard = (hostel) => (
    <Link key={hostel.name + hostel.route} href={hostel.route} asChild>
      <Pressable style={({ pressed }) => [styles.hallCard, pressed && styles.hallCardPressed]}>
        <Image source={hostel.image} style={styles.hallThumbnail} resizeMode="cover" />
        <View style={styles.hallDetails}>
          <Text style={styles.hallName} numberOfLines={1}>{hostel.name}</Text>
          <View style={styles.hallBadgeRow}>
            <View style={styles.tierPill}>
              <Text style={styles.tierPillText}>{hostel.tier}</Text>
            </View>
            <Text style={styles.hallFormText} numberOfLines={1}>{hostel.form}</Text>
          </View>
        </View>
        <View style={styles.arrowCircle}>
          <Text style={styles.arrowChevron}>›</Text>
        </View>
      </Pressable>
    </Link>
  );

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        {/* Header with crest */}
        <Image
          source={require("../assets/hostels/crest.png")}
          style={styles.crest}
          resizeMode="contain"
        />

        <Text style={styles.title}>Babcock University</Text>
        <Text style={styles.subtitle}>Student Hostels Directory</Text>
        <View style={styles.groupBadge}>
          <Text style={styles.groupBadgeText}>GROUP 3</Text>
        </View>

        <View style={styles.divider} />

        {/* Landing selection: Male vs Female */}
        {!selectedGender ? (
          <View style={styles.selectionSection}>
            <Text style={styles.promptText}>Select Accommodation Category</Text>

            {/* Male Hostels Button - Border colors completely removed */}
            <Pressable
              style={({ pressed }) => [
                styles.categoryCard,
                pressed && styles.cardPressed,
              ]}
              onPress={() => {
                setSelectedGender("male");
                setActiveTier("all");
              }}
            >
              <View style={styles.cardHeaderRow}>
                <View>
                  <Text style={styles.categoryTitle}>Male Hostels</Text>
                  <Text style={styles.categorySubLabel}>8 Halls of Residence</Text>
                </View>
                <View style={styles.cardIconCircle}>
                  <Text style={styles.arrowIcon}>›</Text>
                </View>
              </View>
              <Text style={styles.categoryDescription}>
                Winslow, Gideon Troopers, Samuel Akande, Bethel, Welch, Nelson Mandela, Neal Wilson, Topaz
              </Text>
              <View style={styles.tierTagsRow}>
                <View style={styles.tagBadge}><Text style={styles.tagText}>Classic</Text></View>
                <View style={styles.tagBadge}><Text style={styles.tagText}>Premium</Text></View>
                <View style={styles.tagBadge}><Text style={styles.tagText}>Regular</Text></View>
              </View>
            </Pressable>

            {/* Female Hostels Button - Border colors completely removed */}
            <Pressable
              style={({ pressed }) => [
                styles.categoryCard,
                pressed && styles.cardPressed,
              ]}
              onPress={() => {
                setSelectedGender("female");
                setActiveTier("all");
              }}
            >
              <View style={styles.cardHeaderRow}>
                <View>
                  <Text style={styles.categoryTitle}>Female Hostels</Text>
                  <Text style={styles.categorySubLabel}>8 Halls of Residence</Text>
                </View>
                <View style={styles.cardIconCircle}>
                  <Text style={styles.arrowIcon}>›</Text>
                </View>
              </View>
              <Text style={styles.categoryDescription}>
                Felicia Adebisi Dada, Queen Esther, Platinum, Diamond, Crystal, Sapphire, White, Nyberg
              </Text>
              <View style={styles.tierTagsRow}>
                <View style={styles.tagBadge}><Text style={styles.tagText}>Classic</Text></View>
                <View style={styles.tagBadge}><Text style={styles.tagText}>Premium</Text></View>
                <View style={styles.tagBadge}><Text style={styles.tagText}>Regular</Text></View>
              </View>
            </Pressable>
          </View>
        ) : (
          /* Hostels List View for chosen gender */
          <View style={styles.listSection}>
            {/* Top switcher row */}
            <View style={styles.switchRow}>
              <Pressable
                style={styles.backSwitchBtn}
                onPress={() => setSelectedGender(null)}
              >
                <Text style={styles.backSwitchText}>‹ Back to Categories</Text>
              </Pressable>

              <View style={styles.genderToggleGroup}>
                <Pressable
                  style={[
                    styles.toggleBtn,
                    selectedGender === "male" && styles.toggleBtnActive,
                  ]}
                  onPress={() => setSelectedGender("male")}
                >
                  <Text
                    style={[
                      styles.toggleBtnText,
                      selectedGender === "male" && styles.toggleBtnTextActive,
                    ]}
                  >
                    Males
                  </Text>
                </Pressable>
                <Pressable
                  style={[
                    styles.toggleBtn,
                    selectedGender === "female" && styles.toggleBtnActive,
                  ]}
                  onPress={() => setSelectedGender("female")}
                >
                  <Text
                    style={[
                      styles.toggleBtnText,
                      selectedGender === "female" && styles.toggleBtnTextActive,
                    ]}
                  >
                    Females
                  </Text>
                </Pressable>
              </View>
            </View>

            {/* Three option filters: Classic, Premium, Regular */}
            <View style={styles.tierFilterRow}>
              <Pressable
                style={[styles.filterChip, activeTier === "all" && styles.filterChipActive]}
                onPress={() => setActiveTier("all")}
              >
                <Text style={[styles.filterChipText, activeTier === "all" && styles.filterChipTextActive]}>
                  All Halls
                </Text>
              </Pressable>
              <Pressable
                style={[styles.filterChip, activeTier === "classic" && styles.filterChipActive]}
                onPress={() => setActiveTier("classic")}
              >
                <Text style={[styles.filterChipText, activeTier === "classic" && styles.filterChipTextActive]}>
                  Classic
                </Text>
              </Pressable>
              <Pressable
                style={[styles.filterChip, activeTier === "premium" && styles.filterChipActive]}
                onPress={() => setActiveTier("premium")}
              >
                <Text style={[styles.filterChipText, activeTier === "premium" && styles.filterChipTextActive]}>
                  Premium
                </Text>
              </Pressable>
              <Pressable
                style={[styles.filterChip, activeTier === "regular" && styles.filterChipActive]}
                onPress={() => setActiveTier("regular")}
              >
                <Text style={[styles.filterChipText, activeTier === "regular" && styles.filterChipTextActive]}>
                  Regular
                </Text>
              </Pressable>
            </View>

            {/* Classic Tier */}
            {(activeTier === "all" || activeTier === "classic") && currentData.classic?.length > 0 && (
              <View style={styles.tierGroup}>
                <View style={styles.tierHeader}>
                  <Text style={styles.tierHeading}>Classic Halls</Text>
                  <Text style={styles.tierSub}>En-suite bathrooms • Single beds • 2-4 per room</Text>
                </View>
                {currentData.classic.map(renderHostelCard)}
              </View>
            )}

            {/* Premium Tier */}
            {(activeTier === "all" || activeTier === "premium") && currentData.premium?.length > 0 && (
              <View style={styles.tierGroup}>
                <View style={styles.tierHeader}>
                  <Text style={styles.tierHeading}>Premium Halls</Text>
                  <Text style={styles.tierSub}>En-suite bathrooms • Double bunks • 4-6 per room</Text>
                </View>
                {currentData.premium.map(renderHostelCard)}
              </View>
            )}

            {/* Regular Tier */}
            {(activeTier === "all" || activeTier === "regular") && currentData.regular?.length > 0 && (
              <View style={styles.tierGroup}>
                <View style={styles.tierHeader}>
                  <Text style={styles.tierHeading}>Regular Halls</Text>
                  <Text style={styles.tierSub}>Standard layout • Community amenities</Text>
                </View>
                {currentData.regular.map(renderHostelCard)}
              </View>
            )}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#F1F5F9",
  },
  scroll: {
    alignItems: "center",
    paddingVertical: 28,
    paddingHorizontal: 20,
  },
  crest: {
    width: 76,
    height: 76,
    marginBottom: 10,
  },
  title: {
    fontFamily: "Outfit-Bold",
    fontSize: 24,
    color: "#003366",
    textAlign: "center",
  },
  subtitle: {
    fontFamily: "Outfit-Medium",
    fontSize: 14,
    color: "#64748B",
    marginTop: 2,
    textAlign: "center",
  },
  groupBadge: {
    backgroundColor: "#FEF3C7",
    paddingHorizontal: 12,
    paddingVertical: 3,
    borderRadius: 12,
    marginTop: 6,
  },
  groupBadgeText: {
    fontFamily: "Outfit-Bold",
    fontSize: 11,
    color: "#B45309",
    letterSpacing: 0.8,
  },
  divider: {
    width: 48,
    height: 3,
    backgroundColor: "#FFD700",
    borderRadius: 2,
    marginVertical: 18,
  },

  /* Landing selection: Clean cards with NO colored borders */
  selectionSection: {
    width: "100%",
    maxWidth: 420,
    marginTop: 4,
  },
  promptText: {
    fontFamily: "Outfit-SemiBold",
    fontSize: 15,
    color: "#334155",
    textAlign: "center",
    marginBottom: 16,
  },
  categoryCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 22,
    marginBottom: 16,
    shadowColor: "#0F172A",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 3,
  },
  cardPressed: {
    transform: [{ scale: 0.985 }],
    backgroundColor: "#F8FAFC",
  },
  cardHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  categoryTitle: {
    fontFamily: "Outfit-Bold",
    fontSize: 21,
    color: "#003366",
  },
  categorySubLabel: {
    fontFamily: "Outfit-Regular",
    fontSize: 12,
    color: "#64748B",
    marginTop: 2,
  },
  cardIconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#F1F5F9",
    alignItems: "center",
    justifyContent: "center",
  },
  arrowIcon: {
    fontFamily: "Outfit-Bold",
    fontSize: 20,
    color: "#003366",
    marginTop: -2,
  },
  categoryDescription: {
    fontFamily: "Outfit-Regular",
    fontSize: 13,
    color: "#64748B",
    lineHeight: 19,
    marginBottom: 16,
  },
  tierTagsRow: {
    flexDirection: "row",
    gap: 8,
  },
  tagBadge: {
    backgroundColor: "#F1F5F9",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 10,
  },
  tagText: {
    fontFamily: "Outfit-Medium",
    fontSize: 12,
    color: "#334155",
  },

  /* List View: Upgraded Individual Hall Cards */
  listSection: {
    width: "100%",
    maxWidth: 440,
  },
  switchRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  backSwitchBtn: {
    paddingVertical: 6,
    paddingHorizontal: 4,
  },
  backSwitchText: {
    fontFamily: "Outfit-SemiBold",
    fontSize: 13,
    color: "#003366",
  },
  genderToggleGroup: {
    flexDirection: "row",
    backgroundColor: "#E2E8F0",
    borderRadius: 20,
    padding: 3,
  },
  toggleBtn: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 16,
  },
  toggleBtnActive: {
    backgroundColor: "#003366",
  },
  toggleBtnText: {
    fontFamily: "Outfit-Medium",
    fontSize: 13,
    color: "#475569",
  },
  toggleBtnTextActive: {
    color: "#FFFFFF",
  },

  /* Tier filter chips */
  tierFilterRow: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 20,
    justifyContent: "center",
  },
  filterChip: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },
  filterChipActive: {
    backgroundColor: "#003366",
  },
  filterChipText: {
    fontFamily: "Outfit-Medium",
    fontSize: 12,
    color: "#475569",
  },
  filterChipTextActive: {
    color: "#FFD700",
    fontFamily: "Outfit-SemiBold",
  },

  /* Tier Groups */
  tierGroup: {
    marginBottom: 24,
  },
  tierHeader: {
    marginBottom: 12,
    paddingHorizontal: 4,
  },
  tierHeading: {
    fontFamily: "Outfit-Bold",
    fontSize: 16,
    color: "#003366",
  },
  tierSub: {
    fontFamily: "Outfit-Regular",
    fontSize: 12,
    color: "#64748B",
    marginTop: 2,
  },

  /* Enhanced Individual Hall Selection Cards with Real Image Thumbnails */
  hallCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#0F172A",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  hallCardPressed: {
    backgroundColor: "#F8FAFC",
    transform: [{ scale: 0.985 }],
  },
  hallThumbnail: {
    width: 60,
    height: 60,
    borderRadius: 12,
    backgroundColor: "#E2E8F0",
  },
  hallDetails: {
    flex: 1,
    marginLeft: 14,
    justifyContent: "center",
  },
  hallName: {
    fontFamily: "Outfit-Bold",
    fontSize: 16,
    color: "#0F172A",
    marginBottom: 4,
  },
  hallBadgeRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  tierPill: {
    backgroundColor: "#F1F5F9",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  tierPillText: {
    fontFamily: "Outfit-SemiBold",
    fontSize: 11,
    color: "#003366",
  },
  hallFormText: {
    fontFamily: "Outfit-Regular",
    fontSize: 12,
    color: "#64748B",
    flexShrink: 1,
  },
  arrowCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#F1F5F9",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
  },
  arrowChevron: {
    fontFamily: "Outfit-Bold",
    fontSize: 18,
    color: "#003366",
    marginTop: -2,
  },
});
