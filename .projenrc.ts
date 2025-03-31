import { WranglerProject } from './projenrc/wrangler';

const project = new WranglerProject({
  defaultReleaseBranch: 'main',
  name: 'farmfest.bigbohne.de',
  projenrcTs: true,

  depsUpgrade: false,
  buildWorkflow: false,
  release: false
});

project.addDeps('primeflex', 'primeicons')

project.synth();