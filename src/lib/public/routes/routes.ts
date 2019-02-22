interface route {
  url: string
  path: string
  method: string
  type: string
}

const routes: route[] = [
  {url: "/", path: "./portal", method: "join", type: "get"}
]

export default routes