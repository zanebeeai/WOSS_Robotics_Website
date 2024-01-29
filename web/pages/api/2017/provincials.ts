import { NextApiRequest, NextApiResponse } from "next";
import { fetchData } from "@/lib/fetchData";

export default async function provincialsData2017(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return fetchData(res, "ONCMP", "2017");
}
