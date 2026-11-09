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
    { name: "Winslow Hall", route: "/hostels/winslow-hall", form: "2 in a room (En-suite)" },
    { name: "Gideon Troopers", route: "/hostels/gideon-troopers", form: "2 in a room (Medical / Classic)" },
    { name: "Samuel Akande Hall", route: "/hostels/samuel-akande-hall", form: "4 in a room (En-suite)" },
    { name: "Bethel Hall", route: "/hostels/bethel-hall", form: "4 in a room (En-suite)" },
  ],
  premium: [
    { name: "Welch Hall", route: "/hostels/welch-hall", form: "4 in a room (Premium)" },
    { name: "Nelson Mandela Hall", route: "/hostels/nelson-mandela", form: "6 in a room (Premium)" },
    { name: "Neal Wilson Hall", route: "/hostels/neal-wilson-hall", form: "6 in a room (Premium)" },
    { name: "Topaz Hall", route: "/hostels/topaz-hall", form: "4-6 in a room (Premium)" },
  ],
  regular: [
    { name: "Gamaliel Hall", route: "/hostels/winslow-hall", form: "Regular Form (Standard)" },
  ],
};

const FEMALE_HOSTELS = {
  classic: [
    { name: "Felicia Adebisi Dada Hall", route: "/hostels/felicia-adebisi-dada-hall", form: "Classic Form (Mama Dada)" },
    { name: "Queen Esther Hall", route: "/hostels/queen-esther-hall", form: "4 in a room (Classic)" },
    { name: "Platinum Hall", route: "/hostels/platinum-hall", form: "4 in a room (Classic)" },
    { name: "Diamond Hall", route: "/hostels/diamond-hall", form: "5 in a room (Classic Modern)" },
  ],
  premium: [
    { name: "Crystal Hall", route: "/hostels/crystal-hall", form: "4-6 in a room (Premium En-suite)" },
    { name: "Sapphire Hall", route: "/hostels/sapphire-hall", form: "4-6 in a room (Premium)" },
  ],
  regular: [
    { name: "White Hall", route: "/hostels/white-hall", form: "Regular Form (Standard)" },
    { name: "Nyberg Hall", route: "/hostels/nyberg-hall", form: "Regular Form (Standard)" },
  ],
};

export default function HomeScreen() {
  const [selectedGender, setSelectedGender] = useState(null); // null, 'male', or 'female'
  const [activeTier, setActiveTier] = useState("all"); // 'all', 'classic', 'premium', 'regular'

  const currentData = selectedGender === "male" ? MALE_HOSTELS : FEMALE_HOSTELS;

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
        <Text style={styles.groupBadge}>GROUP 3</Text>

        <View style={styles.divider} />

        {/* Landing selection: Male vs Female */}
        {!selectedGender ? (
          <View style={styles.selectionSection}>
            <Text style={styles.promptText}>Select Accommodation Category</Text>

            <Pressable
              style={({ pressed }) => [
                styles.categoryCard,
                styles.maleCard,
                pressed && styles.cardPressed,
              ]}
              onPress={() => {
                setSelectedGender("male");
                setActiveTier("all");
              }}
            >
              <View style={styles.cardHeaderRow}>
                <Text style={styles.categoryTitle}>Male Hostels</Text>
                <Text style={styles.arrowIcon}>›</Text>
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

            <Pressable
              style={({ pressed }) => [
                styles.categoryCard,
                styles.femaleCard,
                pressed && styles.cardPressed,
              ]}
              onPress={() => {
                setSelectedGender("female");
                setActiveTier("all");
              }}
            >
              <View style={styles.cardHeaderRow}>
                <Text style={styles.categoryTitle}>Female Hostels</Text>
                <Text style={styles.arrowIcon}>›</Text>
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
                <Text style={styles.backSwitchText}>‹ All Categories</Text>
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
                  All Options
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
                {currentData.classic.map((hostel) => (
                  <Link key={hostel.route} href={hostel.route} asChild>
                    <Pressable style={({ pressed }) => [styles.hostelItem, pressed && styles.itemPressed]}>
                      <View style={styles.hostelItemInfo}>
                        <Text style={styles.hostelItemName}>{hostel.name}</Text>
                        <Text style={styles.hostelItemForm}>{hostel.form}</Text>
                      </View>
                      <Text style={styles.itemArrow}>›</Text>
                    </Pressable>
                  </Link>
                ))}
              </View>
            )}

            {/* Premium Tier */}
            {(activeTier === "all" || activeTier === "premium") && currentData.premium?.length > 0 && (
              <View style={styles.tierGroup}>
                <View style={styles.tierHeader}>
                  <Text style={styles.tierHeading}>Premium Halls</Text>
                  <Text style={styles.tierSub}>En-suite bathrooms • Double bunks • 4-6 per room</Text>
                </View>
                {currentData.premium.map((hostel) => (
                  <Link key={hostel.route} href={hostel.route} asChild>
                    <Pressable style={({ pressed }) => [styles.hostelItem, pressed && styles.itemPressed]}>
                      <View style={styles.hostelItemInfo}>
                        <Text style={styles.hostelItemName}>{hostel.name}</Text>
                        <Text style={styles.hostelItemForm}>{hostel.form}</Text>
                      </View>
                      <Text style={styles.itemArrow}>›</Text>
                    </Pressable>
                  </Link>
                ))}
              </View>
            )}

            {/* Regular Tier */}
            {(activeTier === "all" || activeTier === "regular") && currentData.regular?.length > 0 && (
              <View style={styles.tierGroup}>
                <View style={styles.tierHeader}>
                  <Text style={styles.tierHeading}>Regular Halls</Text>
                  <Text style={styles.tierSub}>Standard layout • Community amenities • Budget-friendly</Text>
                </View>
                {currentData.regular.map((hostel) => (
                  <Link key={hostel.route} href={hostel.route} asChild>
                    <Pressable style={({ pressed }) => [styles.hostelItem, pressed && styles.itemPressed]}>
                      <View style={styles.hostelItemInfo}>
                        <Text style={styles.hostelItemName}>{hostel.name}</Text>
                        <Text style={styles.hostelItemForm}>{hostel.form}</Text>
                      </View>
                      <Text style={styles.itemArrow}>›</Text>
                    </Pressable>
                  </Link>
                ))}
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
    backgroundColor: "#F7F9FC",
  },
  scroll: {
    alignItems: "center",
    paddingVertical: 32,
    paddingHorizontal: 20,
  },
  crest: {
    width: 80,
    height: 80,
    marginBottom: 12,
  },
  title: {
    fontFamily: "Outfit-Bold",
    fontSize: 24,
    color: "#003366",
    textAlign: "center",
  },
  subtitle: {
    fontFamily: "Outfit-Medium",
    fontSize: 15,
    color: "#4A5568",
    marginTop: 2,
    textAlign: "center",
  },
  groupBadge: {
    fontFamily: "Outfit-Bold",
    fontSize: 12,
    color: "#B78103",
    backgroundColor: "#FEF3C7",
    paddingHorizontal: 12,
    paddingVertical: 3,
    borderRadius: 12,
    marginTop: 6,
    letterSpacing: 0.8,
  },
  divider: {
    width: 60,
    height: 3,
    backgroundColor: "#FFD700",
    borderRadius: 2,
    marginVertical: 20,
  },

  /* Landing selection */
  selectionSection: {
    width: "100%",
    maxWidth: 420,
    marginTop: 8,
  },
  promptText: {
    fontFamily: "Outfit-SemiBold",
    fontSize: 16,
    color: "#1A202C",
    textAlign: "center",
    marginBottom: 18,
  },
  categoryCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    shadowColor: "#003366",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  maleCard: {
    borderLeftWidth: 6,
    borderLeftColor: "#003366",
  },
  femaleCard: {
    borderLeftWidth: 6,
    borderLeftColor: "#B78103",
  },
  cardPressed: {
    transform: [{ scale: 0.98 }],
    backgroundColor: "#F8FAFC",
  },
  cardHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  categoryTitle: {
    fontFamily: "Outfit-Bold",
    fontSize: 20,
    color: "#003366",
  },
  arrowIcon: {
    fontFamily: "Outfit-Bold",
    fontSize: 24,
    color: "#003366",
  },
  categoryDescription: {
    fontFamily: "Outfit-Regular",
    fontSize: 13,
    color: "#718096",
    lineHeight: 18,
    marginBottom: 14,
  },
  tierTagsRow: {
    flexDirection: "row",
    gap: 8,
  },
  tagBadge: {
    backgroundColor: "#EDF2F7",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  tagText: {
    fontFamily: "Outfit-Medium",
    fontSize: 12,
    color: "#2D3748",
  },

  /* List View */
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
    paddingHorizontal: 8,
  },
  backSwitchText: {
    fontFamily: "Outfit-Medium",
    fontSize: 14,
    color: "#003366",
  },
  genderToggleGroup: {
    flexDirection: "row",
    backgroundColor: "#EDF2F7",
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
    color: "#4A5568",
  },
  toggleBtnTextActive: {
    color: "#FFFFFF",
  },

  /* Tier filter chips */
  tierFilterRow: {
    flexDirection: "row",
    gap: 6,
    marginBottom: 20,
    justifyContent: "center",
  },
  filterChip: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  filterChipActive: {
    backgroundColor: "#003366",
    borderColor: "#003366",
  },
  filterChipText: {
    fontFamily: "Outfit-Medium",
    fontSize: 12,
    color: "#4A5568",
  },
  filterChipTextActive: {
    color: "#FFD700",
  },

  /* Tier Groups */
  tierGroup: {
    marginBottom: 22,
  },
  tierHeader: {
    marginBottom: 10,
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
    color: "#718096",
    marginTop: 2,
  },
  hostelItem: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 3,
    elevation: 1,
  },
  itemPressed: {
    backgroundColor: "#F1F5F9",
    transform: [{ scale: 0.99 }],
  },
  hostelItemInfo: {
    flex: 1,
  },
  hostelItemName: {
    fontFamily: "Outfit-SemiBold",
    fontSize: 15,
    color: "#1A202C",
  },
  hostelItemForm: {
    fontFamily: "Outfit-Regular",
    fontSize: 12,
    color: "#718096",
    marginTop: 2,
  },
  itemArrow: {
    fontFamily: "Outfit-Bold",
    fontSize: 18,
    color: "#003366",
    marginLeft: 12,
  },
});
