export class HelloService {
  public getGreeting(name: string): string {
    return `Xin chào thân ái, ${name}!`;
  }
}

export const helloService = new HelloService();
