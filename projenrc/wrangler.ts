import { RemixProject, RemixProjectOptions } from "./remix";

export interface WranglerProjectOptions extends RemixProjectOptions {}

export class WranglerProject extends RemixProject {
    constructor(props: WranglerProjectOptions) {
        super(props);

        this.addDeps('@remix-run/cloudflare')
        this.addDevDeps('wrangler')
        
        const deployTask = this.addTask('deploy')
        deployTask.spawn(this.tasks.tryFind("build")!)
        deployTask.exec("npx wrangler deploy")
    }
}