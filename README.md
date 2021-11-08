# Forta Agent: AAVE - Price Oracle

## Description

Forta Agent use to determine if Fallback Price Oracle was used in transaction.

## Supported Chains

- Ethereum

## Alerts

- FORTA-AAVE_PO
  - Fired when a getFallbackOracle() method is used in a transaction
  - Severity is always set to "medium"
  - Type is always set to "suspicious"
  - Meta:
    - txHash: transaction hash
    - priceOracleAddress: price oracle address

##Test Data
The agent can be tested with the following transactions:

0xad0d342ad4c23846060414570c1fd8050ab04498b608e182a1d7d6ae95e97336
0xb486ae4f2b3fab73d07d8bdbdb98348088deff05076c505fe82647aecaa403ec
0x9ca258dc2a134d9a9d2f322827d47e5e66d925ecab3f7bdcef7d9c1030415a96
