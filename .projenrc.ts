import { RemixProject } from './projenrc/remix';

const project = new RemixProject({
  defaultReleaseBranch: 'main',
  name: 'lan.bigbohne.de',
  projenrcTs: true,

  depsUpgrade: false,
  buildWorkflow: false,
  release: false
});

project.synth();