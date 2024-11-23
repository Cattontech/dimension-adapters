import fetchURL from "../../utils/fetchURL"
import { CHAIN } from "../../helpers/chains";
import { FetchOptions } from "../../adapters/types";

const endpoint = "https://datagrab.catton.tech/getVolumeData?"

const fetch = async (options: FetchOptions) => {
    console.log('options', options)
  const startTime = new Date(options.startTimestamp * 1000).toISOString()
  const endTime = new Date(options.endTimestamp * 1000).toISOString()
  const res = await fetchURL(`${endpoint}startTime=${startTime}&endTime=${endTime}`)
  return {
    dailyVolume: parseInt(res['dailyVolume']),
    totalVolume: parseInt(res['totalVolume']),
    timestamp: options.startTimestamp,
  };
};


const adapter: any = {
  version: 2,
  adapter: {
    [CHAIN.TON]: {
      fetch,
      start: '2024-11-22',
    },
  },
};

export default adapter;
