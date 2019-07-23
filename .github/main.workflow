workflow "New workflow" {
  on = "push"
  resolves = ["nuxt/actions-yarn@master"]
}

action "nuxt/actions-yarn@master" {
  uses = "nuxt/actions-yarn@master"
  args = "full-deploy"
}
