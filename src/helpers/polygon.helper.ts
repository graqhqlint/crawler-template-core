import Axios from "axios";
import { ErrorHelper } from ".";

const host = `https://api-testnet.polygonscan.com`;
const { SM_ADDRESS_MARKETPLACE, WALLET_ADDRESS, POLYGON_API_KEY } = process.env;
class PolygonHelper {
  constructor() {}

  auth = ({ address = WALLET_ADDRESS }: { address?: string }) => {
    return Axios.get(`${host}/api?module=account&action=balance&address=${address}`, {
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.data.result;
      })
      .catch((err) => {
        console.log("error", err);
        throw ErrorHelper.badToken();
      });
  };

  getNfts = ({ address = WALLET_ADDRESS }: { address?: string }) => {
    const url = `${host}/api
        ?module=account
        &action=tokennfttx
        &contractaddress=${SM_ADDRESS_MARKETPLACE}
        &address=${address}
        &page=1
        &offset=100
        &sort=asc
        &apikey=${POLYGON_API_KEY}`;
    console.log("url", url);
    return Axios.get(url, {
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        console.log("res", res.data);
        // this.apikey = res.data.result;
      })
      .catch((err) => {
        console.log("error", err);
        throw ErrorHelper.badToken();
      });
  };
}

export const polygonHelper = new PolygonHelper();
