import { typescript } from "projen";
import { TypeScriptJsxMode, TypeScriptModuleResolution } from "projen/lib/javascript";
import { TypeScriptProjectOptions } from "projen/lib/typescript";

export interface RemixProjectOptions extends TypeScriptProjectOptions { }

export class RemixProject extends typescript.TypeScriptProject {
    constructor(props?: RemixProjectOptions) {
        super({
            ...props!, tsconfig: {
                ...props?.tsconfig, compilerOptions: {
                    ...props?.tsconfig?.compilerOptions,
                    module: 'es6',
                    jsx: TypeScriptJsxMode.REACT_JSX,
                    noEmit: true,
                    types: ['@remix-run/node', 'vite/client'],
                    skipLibCheck: true,
                    moduleResolution: TypeScriptModuleResolution.BUNDLER,
                    target: 'ES2022'
                }
            },
            tsconfigDev: {
                ...props?.tsconfigDev,
                compilerOptions: {
                    ...props?.tsconfigDev?.compilerOptions,
                    module: 'commonjs'
                }
            },
            srcdir: 'app',
            sampleCode: false
        });

        this.addDeps('@remix-run/node@2',
            '@remix-run/serve@2',
            '@remix-run/react@2',
            'react@^18.0.0',
            'react-dom@^18.0.0',
            'isbot')

        this.addDevDeps('@remix-run/dev@2',
            '@types/react',
            '@types/react-dom')

        this.addTask('dev', {
            exec: 'remix vite:dev'
        })

        this.tasks.tryFind('pre-compile')?.exec('rm -rf ./build')
        this.tasks.tryFind('compile')?.reset('npx remix vite:build')

        this.gitignore.exclude('public/build', 'build')
    }
}