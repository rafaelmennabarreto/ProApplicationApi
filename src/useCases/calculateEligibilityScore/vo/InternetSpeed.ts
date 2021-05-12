export default class InternetSpeed {
  private _downloadSpeed: number;
  private _uploadSpeed: number;

  constructor(downloadSpeed: number, uploadSpeed: number) {
    this._downloadSpeed = downloadSpeed;
    this._uploadSpeed = uploadSpeed;
  }

  get score() {
    return (
      this.CalculateScore(this._downloadSpeed) +
      this.CalculateScore(this._uploadSpeed)
    );
  }

  private CalculateScore(speed: number) {
    if (speed > 50) return 1;

    return -1;
  }
}
