// Analytics for Telemetry

// import analytics from '';
// Firebase
// Sentry
// App Center

class Analytics {
  // Track a custom event
  static trackEvent(eventName, params = {}) {
    //analytics().logEvent(eventName, params);
    console.log(eventName, params);
  }

  // Track screen views
  static trackScreenView(screenName) {
    //analytics().setCurrentScreen(screenName, screenName);
    console.log(screenName)
  }
}

export default Analytics;
