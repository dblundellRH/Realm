import resources from "../definitions/resources";
import { resourceIsNearMax, resourceIsNearZero } from "./anyResourceIsNearFatal";


export default function whatResourceIsNearFatal(realm) {
    const { securityStatus, wealthStatus, foodStatus } = realm;

    if (resourceIsNearZero(securityStatus) || resourceIsNearMax(securityStatus)) {
        return {
            slug: resources.SECURITY.slug,
            how: resourceIsNearZero(securityStatus) ? 'near-zero' : 'near-max'
        }
    }

    if (resourceIsNearZero(wealthStatus) || resourceIsNearMax(wealthStatus)) {
        return {
            slug: resources.WEALTH.slug,
            how: resourceIsNearZero(wealthStatus) ? 'near-zero' : 'near-max'
        }
    }

    if (resourceIsNearZero(foodStatus) || resourceIsNearMax(foodStatus)) {
        return {
            slug: resources.FOOD.slug,
            how: resourceIsNearZero(foodStatus) ? 'near-zero' : 'near-max'
        }
    }

    return false;
}
