import React from 'react'
import MenuBar from './components/menu'
import LateralBar from './components/lateralbar'
import Cardtext from './components/card'
import SearchBar from './components/Search'
import NewCard from './components/Newcard'
import 'antd/dist/antd.css'
import { Row, Col, Icon } from 'antd'

export default class App extends React.Component {
  state = {
    info: [],
    fav: []
  }
  AddInfo = (newInfo) =>{
    const info = [...this.state.info, newInfo]
    this.setState({ info })
  }
  clicFav = (infoFav) =>{
    const info = this.state.info.map(c => {
      if(c === infoFav) c.fav = !c.fav
      return c
    })
    this.setState({ info })
  }
  render() {
    const { info } = this.state
    return (
      <div>
        <div className="container">
          <Row>
            <Col span={4} offset={2}>
              <Icon type="amazon" style={{ fontSize: '30px' }} />
            </Col>
            <Col span={15} offset={1}>
              <MenuBar />
            </Col>
          </Row>
          <br />
          <Row>
            <Col span={5}>
              <LateralBar />
            </Col>
            <Col span={15} offset={1}>
              <SearchBar />
              <br />
            </Col>
            {info.map((infoDel, i) =>
              <Col span={10} offset={1} key={i}>
                <Cardtext info={infoDel} clicFav={this.clicFav} />
              </Col>
            )}
          </Row>
          <Row>
            <Col style={{ float: 'right' }}>
              <NewCard save={this.AddInfo}/>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}