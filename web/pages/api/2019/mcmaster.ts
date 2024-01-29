import { NextApiRequest, NextApiResponse } from "next";
import { fetchData } from "@/lib/fetchData";

export default async function mcmasterData2019(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { type } = req.query;

  return fetchData(res, "ONHAM", "2019", type);
}
