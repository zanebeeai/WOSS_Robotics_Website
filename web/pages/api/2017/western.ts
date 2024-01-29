import { NextApiRequest, NextApiResponse } from "next";
import { fetchData } from "@/lib/fetchData";

export default async function westernData2017(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { type } = req.query;

  return fetchData(res, "ONLON", "2017", type);
}
