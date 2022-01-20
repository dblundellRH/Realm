function resourceIsNearZero(value) {
    return (parseInt(value) - 15) <= 0;
}

function resourceIsNearMax(value) {
    return (parseInt(value) + 15) >= 100;
}

export default function anyResourceIsNearFatal(realm) {
    const { securityStatus, wealthStatus, foodStatus } = realm;

    return resourceIsNearZero(securityStatus)
        || resourceIsNearMax(securityStatus)
        || resourceIsNearZero(wealthStatus)
        || resourceIsNearMax(wealthStatus)
        || resourceIsNearZero(foodStatus)
        || resourceIsNearMax(foodStatus)
}

export { resourceIsNearZero, resourceIsNearMax }