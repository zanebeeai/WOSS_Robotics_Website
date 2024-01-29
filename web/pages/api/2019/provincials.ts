import { NextApiRequest, NextApiResponse } from "next";
import { fetchData } from "@/lib/fetchData";

export default async function provincialsData2019(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return fetchData(res, "ONCMP2", "2019");
}
