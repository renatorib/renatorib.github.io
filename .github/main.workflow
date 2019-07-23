workflow "Deploy Workflow" {
  on = "push"
  resolves = ["Deploy"]
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

action "Deploy" {
  uses = "peaceiris/actions-gh-pages@v1.0.1"
  needs = ["Export"]
  args = "deploy"
  env = {
    PUBLISH_DIR = "./out"
    PUBLISH_BRANCH = "master"
  }
  secrets = ["ACTIONS_DEPLOY_KEY"]
}