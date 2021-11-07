# Forta Agent: AAVE - Price Oracle

## Description

Forta Agent use to determine if Price Oracle was used in transaction.

## Supported Chains

- Ethereum

## Alerts

- FORTA-AAVE_PO
  - Fired when a getPriceOracle() method is used in a transaction
  - Severity is always set to "medium" (mention any conditions where it could be something else)
  - Type is always set to "suspicious" (mention any conditions where it could be something else)
  - Meta:
    - txHash: transaction hash
    - priceOracleAddress: price orcale address
