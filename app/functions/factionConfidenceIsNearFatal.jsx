export default function factionConfidenceIsNearFatal(realm) {
    const confidence = parseInt(realm.factionConfidence);

    return confidence - 15 <= 0
}