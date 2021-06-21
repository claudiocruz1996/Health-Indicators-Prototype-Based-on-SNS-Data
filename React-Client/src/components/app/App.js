import Layout from "../layout/Layout"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}))

function App() {
  const classes = useStyles()
  return (
    <div>
      <Layout />
    </div>
  )
}

export default App
