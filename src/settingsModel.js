export default class SettingsModel {
  constructor(formData) {
    this.airspeed = formData.airspeed;
    this.alpha = formData.alpha;
    this.altitude = formData.altitude;
    this.beta = formData.beta;
    this.density = formData.density;
    this.mach = formData.mach;
    this.rate_P = formData.rate_P;
    this.rate_Q = formData.rate_Q;
    this.rate_R = formData.rate_R;
    this.selectedFile = formData.selectedFile;
  }

  // Prepares the model for backend.
  parseToJson() {
    return {
      stateTemplate: {
        airspeed: this.airspeed,
        alpha: this.alpha,
        altitude: this.altitude,
        beta: this.beta,
        density: this.density,
        mach: this.mach,
        rate_P: this.rate_P,
        rate_Q: this.rate_Q,
        rate_R: this.rate_R,
        aircraft: this.selectedFile,
      },
    };
  }

  // Prepares the model for frontend.
  parseToState() {
    return {
      airspeed: this.airspeed,
      alpha: this.alpha,
      altitude: this.altitude,
      beta: this.beta,
      density: this.density,
      mach: this.mach,
      rate_P: this.rate_P,
      rate_Q: this.rate_Q,
      rate_R: this.rate_R,
      aircraft: this.selectedFile,
    };
  }
}