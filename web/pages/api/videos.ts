import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function getVideos(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const channelURL =
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3DUCPayYKB8-812GDZdHmfNk3g";

  await axios
    .get(channelURL)
    .then(function (response) {
      res.send(response.data.items);
    })
    .catch(function (error) {
      console.log(error);
    });
}
