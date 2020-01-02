export class ServiceFactory {
  protected log(message: string) {
    const name = this.constructor.name;
    console.log(`${name}: ${message}`);
  }
}
