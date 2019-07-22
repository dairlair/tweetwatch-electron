import React, { Component } from 'react';
import Button from 'antd/es/button';
import { observer, inject } from 'mobx-react';
import { IObjectStore } from '../stores/ObjectStore';
import { ObjectModel } from '../models';

interface ObjectsProps {
  objectStore?: IObjectStore
}

@inject('objectStore')
@observer
class Objects extends Component<ObjectsProps> {
  render() {
    const {objects} = this.props.objectStore!;
    return (
      <div>
          <Button onClick={this.clickHandler}>Add object</Button>
          {objects.map((object: ObjectModel, key) =>
              <div key={key}>
                #{object.id} - {object.title}
              </div>
          )}
      </div>
    );
  }

  private clickHandler = () =>{
    const {addObject} = this.props.objectStore!;
    addObject({title: "Object" + (new Date()).getMilliseconds()})
  }
}

export default Objects;