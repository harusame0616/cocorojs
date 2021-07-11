class CustomError extends Error {
  constructor(e) {
    super(e);
    this.name = new.target.name;
  }
}
