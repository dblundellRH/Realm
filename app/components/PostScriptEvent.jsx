import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import FACTIONS, { FACTION_NAMES } from '../definitions/factions';
import anyResourceIsNearFatal, { resourceIsNearZero, resourceIsNearMax } from '../functions/anyResourceIsNearFatal';
import factionConfidenceIsNearFatal from '../functions/factionConfidenceIsNearFatal';


function PostScriptEvent({ realm }) {
    return (
        <If condition={anyResourceIsNearFatal(realm) || factionConfidenceIsNearFatal(realm)}>
            <Container>
                <strong>PostScript</strong>
                <If condition={anyResourceIsNearFatal(realm)}>
                    <span>
                        { resourceIsNearZero(realm.securityStatus)
                            ? `!!! ${getFactionFullName(FACTION_NAMES.ROYALISTS)} are up in arms about the state of our military. If the situation continues they may try to overthrow you.`
                            : resourceIsNearMax(realm.securityStatus)
                                ? `!!! ${getFactionFullName(FACTION_NAMES.ROYALISTS)} are emboldened. They could be preparing to restore the Prince to the throne.`
                                : undefined
                        }
                    </span>

                    <span>
                        { resourceIsNearZero(realm.wealthStatus)
                            ? `!!! ${getFactionFullName(FACTION_NAMES.GUILDS)} are furious with your economic decisions. They are close to withdrawing all their support.`
                            : resourceIsNearMax(realm.wealthStatus)
                                ? `!!! ${getFactionFullName(FACTION_NAMES.GUILDS)} are extremely wealthy. There are rumours of mercenary companies being hired for a coup.`
                                : undefined
                        }
                    </span>

                    <span>
                        { resourceIsNearZero(realm.foodStatus)
                            ? `!!! ${getFactionFullName(FACTION_NAMES.COMMONS)} are starving. If we do not provide enough food they will overthrow you.`
                            : resourceIsNearMax(realm.foodStatus)
                                ? `!!! ${getFactionFullName(FACTION_NAMES.COMMONS)} are becoming too strong. There are whispers of a second revolution.`
                                : undefined
                        }
                    </span>
                </If>

                <If condition={factionConfidenceIsNearFatal(realm)}>
                    <span>
                        { factionConfidenceIsNearFatal(realm.factionConfidence)
                            ? `!!! ${getFactionFullName(FACTION_NAMES.COMMONS)} are losing patience with your decisions. You need to show them some support, and soon.`
                            : resourceIsNearMax(realm.foodStatus)
                                ? `!!! ${getFactionFullName(FACTION_NAMES.COMMONS)} are nearly in complete control of the realm. In the corridors of power, plotters seek your downfall.`
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
`

function getFactionFullName(factionSlug) {
    return FACTIONS[factionSlug].fullname
}

export default PostScriptEvent;