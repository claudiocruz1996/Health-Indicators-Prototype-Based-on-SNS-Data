import Layout from "../layout/Layout"
import Global from "./Global"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}))

function App() {
  const classes = useStyles()
  return (
    <Global>
      <Layout />
    </Global>
  )
}

export default App
