import React from 'react'
import ReactDOM from 'react-dom'
import Nav from '../Nav'
import renderer from 'react-test-renderer'

it("renders without crashing",()=>{
    const div = document.createElement("div")
    ReactDOM.render(<Nav></Nav>,div)
})


it("matches navbar snapshot", ()=>{
    const navtree = renderer.create(<Nav/>).toJSON();
    expect(navtree).toMatchSnapshot();
})