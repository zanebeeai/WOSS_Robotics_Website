import { NextApiRequest, NextApiResponse } from "next";
import { fetchData } from "@/lib/fetchData";

export default async function worldsData2016(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return fetchData(res, "HOPPER", "2016");
}
