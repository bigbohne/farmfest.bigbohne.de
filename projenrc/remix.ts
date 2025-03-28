import { typescript, TextFile } from 'projen';
import { TypeScriptJsxMode, TypeScriptModuleResolution } from 'projen/lib/javascript';
import { TypeScriptProjectOptions } from 'projen/lib/typescript';

export interface RemixProjectOptions extends TypeScriptProjectOptions { }

export class RemixProject extends typescript.TypeScriptProject {
  constructor(props?: RemixProjectOptions) {
    super({
      ...props!,
      tsconfig: {
        ...props?.tsconfig,
        compilerOptions: {
          ...props?.tsconfig?.compilerOptions,
          module: 'es6',
          jsx: TypeScriptJsxMode.REACT_JSX,
          noEmit: true,
          types: ['@remix-run/node', 'vite/client'],
          skipLibCheck: true,
          moduleResolution: TypeScriptModuleResolution.BUNDLER,
          target: 'ES2022',
        },
      },
      tsconfigDev: {
        ...props?.tsconfigDev,
        compilerOptions: {
          ...props?.tsconfigDev?.compilerOptions,
          module: 'commonjs',
        },
      },
      srcdir: 'app',
      sampleCode: false,
      eslint: false,
    });

    this.addDeps('@remix-run/node@2',
      '@remix-run/serve@2',
      '@remix-run/react@2',
      'react@^18.0.0',
      'react-dom@^18.0.0',
      'isbot');

    this.addDevDeps('@remix-run/dev@2',
      '@types/react',
      '@types/react-dom');

    this.addTask('dev', {
      exec: 'remix vite:dev',
    });

    this.tasks.tryFind('pre-compile')?.exec('rm -rf ./build');
    this.tasks.tryFind('compile')?.reset('npx remix vite:build');
    this.tasks.tryFind('package')?.reset();

    this.gitignore.exclude('public/build', 'build');

    const viteCOnfig = new TextFile(this, 'vite.config.mts');
    viteCOnfig.addLine(`import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import { installGlobals } from "@remix-run/node";

installGlobals();

export default defineConfig({
  plugins: [remix({
    future: {
      v3_fetcherPersist: true,
      v3_lazyRouteDiscovery: true,
      v3_relativeSplatPath: true,
      v3_singleFetch: true,
      v3_throwAbortReason: true
    }
  })],
});`);
  }
}