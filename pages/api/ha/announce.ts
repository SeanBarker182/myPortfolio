// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

import fs from "fs";
import path from "path";

const filePath = path.resolve(".", "media/bugs-doorbell.mp3");
const audioBuffer = fs.readFileSync(filePath);

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // get bugs-doorbell.wav from the media folder and deliver it to the client
  res.setHeader("Content-Type", "audio/mp3");
  res.setHeader("Content-Length", audioBuffer.length);
  res.end(audioBuffer);
}
