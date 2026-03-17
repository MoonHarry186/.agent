// src/features/hello/hello.service.ts

export class HelloService {
  constructor() {}

  public getGreeting(name: string): string {
    return `Xin chào thân ái, ${name}!`;
  }
}

// Export a singleton instance or simple factory for DI
export const helloService = new HelloService();
