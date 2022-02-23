export default function factionConfidenceIsNearFatal(realm) {
    const confidence = parseInt(realm.factionConfidence);

    // console.log(confidence, confidence - 15, confidence -15 <= 0);

    return confidence - 15 <= 0
}