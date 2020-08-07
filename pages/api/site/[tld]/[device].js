import axios from "axios";

const SITE_BASE_URL = "https://www.bbc.com";
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
    query: { tld, device },
  } = req;

  const REQUEST_BODY = {
    formFactor: device,
    metrics: METRICS,
    url: `${SITE_BASE_URL}/${tld}`,
  };

  try {
    const cruxResponse = await axios.post(
      process.env.CRUX_API_BASE_ENDPOINT,
      REQUEST_BODY,
      REQUEST_CONFIG
    );

    const { data, status } = cruxResponse;

    if (status != 200) {
      res.send("error fetch data");
    }

    res.send(data);
  } catch (error) {
    res.send(error);
  }
};
