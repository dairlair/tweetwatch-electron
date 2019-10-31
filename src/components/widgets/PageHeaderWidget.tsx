import React, {Component} from 'react'
import { PageHeader, Button } from 'antd';
import { RouteComponentProps, withRouter  } from "react-router-dom";

interface Props extends RouteComponentProps {
  title: string
  subTitle?: string
  path?: string
  label?: string
}

class PageHeaderWidget extends Component<Props> {

  private handleSubmit = () => {
    if (this.props.path) {
      this.props.history.replace(this.props.path)
    }
  }

  render() {
    return (
      <PageHeader title={this.props.title} subTitle={this.props.subTitle} extra={[
          this.props.label ? (
            <Button key="1" type="primary" onClick={this.handleSubmit}>{this.props.label}</Button>
          ) : ''
        ]} style={{paddingTop: 0, paddingLeft: 0, paddingRight: 0}}> 
      </PageHeader>
    )
  }
}

export default withRouter(PageHeaderWidget)

