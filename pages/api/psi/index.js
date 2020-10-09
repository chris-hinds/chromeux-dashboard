import axios from "axios";
import fixtureData from "../fixtures/mundoPsi.json";

const DEVICE = "PHONE";
const METRICS = [
  "first_contentful_paint",
  "first_input_delay",
  "largest_contentful_paint",
  "cumulative_layout_shift",
];

export default async (req, res) => {
  const {
    query: { url },
  } = req;

  const REQUEST_CONFIG = {
    params: {
      url: url,
      key: process.env.PSI_API_KEY,
    },
  };

  try {
    console.log(req.query);
    const psiResponse = await axios.get(
      process.env.PSI_API_BASE_ENDPOINT,
      REQUEST_CONFIG
    );

    const { data, status } = psiResponse;

    // TODO: This logic is rubbish, rework it
    if (status != 200 || data.name === "Error") {
      res.status(404).send({ error: "No PSI data was found for this URL" });
    }

    // Set cache control header
    res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate");
    res.status(200).json(data);
  } catch (error) {
    res.status(404).send({ error: "No PSI data was found for this URL" });
  }
};
