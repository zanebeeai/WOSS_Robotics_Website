import { NextApiRequest, NextApiResponse } from "next";
import { fetchData } from "@/lib/fetchData";

export default async function mcmasterData2017(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return fetchData(res, "ONHAM", "2017");
}
