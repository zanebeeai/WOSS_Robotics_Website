import { NextApiRequest, NextApiResponse } from "next";
import { fetchData } from "@/lib/fetchData";

export default async function torontoData2016(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return fetchData(res, "ONTO", "2016");
}
