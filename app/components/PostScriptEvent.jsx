import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import FACTIONS, { FACTION_NAMES } from '../definitions/factions';
import anyResourceIsNearFatal, { resourceIsNearZero, resourceIsNearMax } from '../functions/anyResourceIsNearFatal';
import factionConfidenceIsNearFatal from '../functions/factionConfidenceIsNearFatal';
import WARNING_SIGN from '../images/warning-sign.png';
import { useUserProvider } from '../contexts/UserProvider';


function PostScriptEvent({ realm }) {
    const user = useUserProvider();

    const SecurityNearZero = resourceIsNearZero(realm.securityStatus);
    const SecurityNearMax = resourceIsNearMax(realm.securityStatus);
    const WealthNearZero = resourceIsNearZero(realm.wealthStatus);
    const WealthNearMax = resourceIsNearMax(realm.wealthStatus);
    const FoodNearZero = resourceIsNearZero(realm.foodStatus);
    const FoodNearMax = resourceIsNearMax(realm.foodStatus);

    return (
        <If condition={anyResourceIsNearFatal(realm) || factionConfidenceIsNearFatal(realm)}>
            <Container>
                <strong>PostScript</strong>
                <If condition={anyResourceIsNearFatal(realm)}>
                    <If condition={SecurityNearZero || SecurityNearMax}>
                        <span>
                            <WarningSign />
                            <strong>{getFactionFullName(FACTION_NAMES.ROYALISTS)}</strong>
                            { SecurityNearZero
                                ? ` are up in arms about the state of our military. If the situation continues they may try to overthrow you.`
                                : SecurityNearMax
                                    ? ` are emboldened. They could be preparing to restore the Prince to the throne.`
                                    : undefined
                            }
                        </span>
                    </If>

                    <If condition={WealthNearZero || WealthNearMax}>
                        <span>
                            <WarningSign />
                            <strong>{getFactionFullName(FACTION_NAMES.GUILDS)}</strong>
                            { WealthNearZero
                                ? ` are furious with your economic decisions. They are close to withdrawing all their support.`
                                : WealthNearMax
                                    ? ` are extremely wealthy. There are rumours of mercenary companies being hired for a coup.`
                                    : undefined
                            }
                        </span>
                    </If>

                    <If condition={FoodNearZero || FoodNearMax}>
                        <span>
                            <WarningSign />
                            <strong>{getFactionFullName(FACTION_NAMES.COMMONS)}</strong>
                            {FoodNearZero
                                ? ` are starving. If we do not provide enough food they will overthrow you.`
                                : FoodNearMax
                                    ? ` are becoming too strong. There are whispers of a second revolution.`
                                    : undefined
                            }
                        </span>
                    </If>
                </If>

                <If condition={factionConfidenceIsNearFatal(realm)}>
                    <span>
                        <WarningSign />
                        <strong>{user.getFactionDetails().fullname}</strong>
                        { factionConfidenceIsNearFatal(realm.factionConfidence)
                            ? `  are losing patience with your decisions. You need to show them some support, and soon.`
                            : resourceIsNearMax(realm.foodStatus)
                                ? ` are nearly in complete control of the realm. In the corridors of power, plotters seek your downfall.`
                                : undefined
                        }
                    </span>
                </If>
            </Container>
        </If>
    )
}

PostScriptEvent.propTypes = {
    realm: PropTypes.object.isRequired,
}

const WarningSign = () => <img src={WARNING_SIGN} alt="!" height="26" width="11.15" className="warning-sign" />;

const Container = styled.div`
    span {
        display: block;

        &.hide {
            display: none;
        }

        + span {
            margin-top: 1rem;
        }
    }

    .warning-sign {
        float: left;
        margin-right: 0.5rem;
    }
`

function getFactionFullName(factionSlug) {
    return FACTIONS[factionSlug].fullname
}

export default PostScriptEvent;