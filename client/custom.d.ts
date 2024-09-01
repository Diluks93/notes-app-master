declare namespace NodeJS {
  interface Module {
    hot?: {
      accept(path?: string, callback?: () => void): void;
      accept(
        dependencies: string[],
        callback: (updatedDependencies: string[]) => void,
      ): void;
      dispose(callback: (data: unknown) => void): void;
    };
  }
}
