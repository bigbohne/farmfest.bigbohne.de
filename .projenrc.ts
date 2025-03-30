import { RemixProject } from './projenrc/remix';

const project = new RemixProject({
  defaultReleaseBranch: 'main',
  name: 'farmfest.bigbohne.de',
  projenrcTs: true,

  depsUpgrade: false,
  buildWorkflow: false,
  release: false
});

project.addDeps('@remix-run/cloudflare')
project.addDevDeps('wrangler')

project.addTask('deploy').exec("npx wrangler deploy")

project.synth();