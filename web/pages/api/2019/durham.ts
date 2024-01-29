import { NextApiRequest, NextApiResponse } from "next";
import { fetchData } from "@/lib/fetchData";

export default async function durhamData2019(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return fetchData(res, "ONOSH", "2019");
}
