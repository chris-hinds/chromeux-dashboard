import axios from "axios";

const DEVICE = "PHONE";
const METRICS = [
  "first_contentful_paint",
  "first_input_delay",
  "largest_contentful_paint",
  "cumulative_layout_shift",
];

const REQUEST_CONFIG = {
  params: {
    key: process.env.CRUX_API_KEY,
  },
};

export default async (req, res) => {
  const {
    query: { url },
  } = req;

  const REQUEST_BODY = {
    formFactor: DEVICE,
    metrics: METRICS,
    origin: url,
  };

  try {
    const cruxResponse = await axios.post(
      process.env.CRUX_API_BASE_ENDPOINT,
      REQUEST_BODY,
      REQUEST_CONFIG
    );

    const { data, status } = cruxResponse;

    if (status != 200) {
      res.status(404).send({ error: "No CRUX data was found for this URL" });
    }

    res.send(data);
  } catch (error) {
    res.send(error);
  }
};
