import {
    Finding,
    HandleTransaction,
    TransactionEvent,
    FindingSeverity,
    FindingType,
    getJsonRpcUrl
} from 'forta-agent'
import Web3 from 'web3';
import { AbiItem } from 'web3-utils'
import abiItems from './abi-items.json';
import { GET_FALLBACK_ORACLE, LANDING_POOL_ADDRESS } from './constants';


const web3 = new Web3(getJsonRpcUrl());

const handleTransaction: HandleTransaction = async (txEvent: TransactionEvent) => {
    const findings: Finding[] = [];

    const contract = new web3.eth.Contract(abiItems as AbiItem[], LANDING_POOL_ADDRESS);
    const priceOracleAddress = await contract.methods.getPriceOracle().call();
    const fallbackOracleCalls = txEvent.filterFunction(GET_FALLBACK_ORACLE, priceOracleAddress);

    if (fallbackOracleCalls) {
        findings.push(Finding.fromObject({
            name: 'GetFallbackOracle Function Call Alert',
            description: `GetFallbackOracle() function was called. Address: ${priceOracleAddress}`,
            alertId: 'AAVE_PO',
            severity: FindingSeverity.Medium,
            type: FindingType.Suspicious,
            metadata: {
                'txHash': txEvent.hash,
                'priceOracleAddress': priceOracleAddress,
            }
        }))
    }

    return findings
}

export default {
    handleTransaction,
}
