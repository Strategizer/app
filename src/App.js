import React from "react"
import About from "./Components/About" 
import Error from "./Components/Error"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Contributors from "./Components/Contributors"
import Welcome from "./Components/Welcome"
import { Route, Switch } from "react-router-dom"

function App() {
    return (
        <main>
            <Header />
            <Switch> 
                <Route path="/about" component={About} /> 
                <Route path="/contributors" component={Contributors} /> 
                <Route path="/" component={ Welcome } /> 
                <Route component={Error} />
            </Switch>
            <Footer />
        </main>
    )
}
export default App