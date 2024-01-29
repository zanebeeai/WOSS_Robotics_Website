import { NextApiRequest, NextApiResponse } from "next";
import { fetchData } from "@/lib/fetchData";

export default async function provincialsData2019(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { type } = req.query;

  return fetchData(res, "ONCMP2", "2018", type);
}
