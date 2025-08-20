import ReactGA from "react-ga4";

// Get Measurement ID from environment variable
const GA_MEASUREMENT_ID = process.env.REACT_APP_GA_MEASUREMENT_ID || "G-RGC69M3K6Y";

export const initGA = () => {
  if (GA_MEASUREMENT_ID) {
    ReactGA.initialize(GA_MEASUREMENT_ID);
  }
};

export const logPageView = () => {
  if (GA_MEASUREMENT_ID) {
    ReactGA.send("pageview");
  }
};

export const logEvent = (category, action, label = null) => {
  if (GA_MEASUREMENT_ID) {
    ReactGA.event({
      category,
      action,
      label
    });
  }
};

export const logEmailSignup = () => {
  logEvent("User", "Submitted Email", "Landing Page Signup");
}; 