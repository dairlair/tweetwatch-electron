import React, {Component} from 'react'
import { Empty, Button } from 'antd';
import { RouteComponentProps, withRouter  } from "react-router-dom";

interface Props extends RouteComponentProps {
    description: string
    path: string
    label: string
}

class EmptyWidget extends Component<Props> {

  private handleSubmit = () => {
    this.props.history.replace(this.props.path)
  }

  render() {
    const {label, description} = this.props 
    return (
      <div>
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} imageStyle={{height: 60}} description={description}>
          <Button type="primary" onClick={this.handleSubmit}>{label}</Button>
        </Empty>
      </div>
    )
  }
}

export default withRouter(EmptyWidget)
