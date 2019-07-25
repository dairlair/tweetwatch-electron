import React, { Component } from 'react';
import Button from 'antd/es/button';
import { observer, inject } from 'mobx-react';
import { IObjectStore } from '../stores/ObjectStore';
import { ObjectModel } from '../models';

@inject('objectStore')
@observer
class Objects extends Component<{objectStore?: IObjectStore}> {
  render() {
    const {objects} = this.props.objectStore!;
    return (
      <div>
          <Button onClick={this.addObject}>Add object</Button>
          {objects.map((object: ObjectModel, key) =>
              <div key={key}>
                #{object.id} - {object.title}
              </div>
          )}
      </div>
    );
  }

  private addObject = () => {
    const {addObject} = this.props.objectStore!;
    addObject({title: "Object #" + (new Date()).getMilliseconds()})
  }
}

export default Objects;