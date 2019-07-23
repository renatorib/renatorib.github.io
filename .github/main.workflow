workflow "Deploy Workflow" {
  on = "push"
  resolves = ["nuxt/actions-yarn@master"]
}

action "Install" {
  uses = "nuxt/actions-yarn@master"
  args = "install"
}

action "Lint" {
  uses = "nuxt/actions-yarn@master"
  needs = ["Install"]
  args = "lint"
}

action "Build" {
  uses = "nuxt/actions-yarn@master"
  needs = ["Lint"]
  args = "build"
}

action "Export" {
  uses = "nuxt/actions-yarn@master"
  needs = ["Build"]
  args = "export"
}

action "nuxt/actions-yarn@master" {
  uses = "nuxt/actions-yarn@master"
  needs = ["Export"]
  args = "deploy"
}
