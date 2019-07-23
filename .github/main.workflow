workflow "New workflow" {
  on = "push"
  resolves = ["Deploy"]
}

action "Deploy" {
  uses = "nuxt/actions-yarn@master"
  args = "full-deploy"
}
