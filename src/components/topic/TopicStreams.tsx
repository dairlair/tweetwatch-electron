import React, { Component } from 'react'
import { Topic, Stream } from '../../api-client/src'
import { IStreamStore } from '../../stores/StreamStore'
import { Tag, Input, Icon } from 'antd'
import { observer } from 'mobx-react'


interface Props {
  topic: Topic
  streamStore: IStreamStore
}

interface State {
  inputVisible: boolean
  inputValue: string
}

@observer
class TopicStreams extends Component<Props, State> {

  state: State = {
    inputVisible: false,
    inputValue: '',
  }

  input: any

  deleteStream = (stream: Stream) => {
    console.log('Removed stream', stream.id)
    const {streamStore, topic} = this.props
    streamStore.deleteStream(topic.id, stream.id).then(() => {
      console.log('Stream deleted', stream)
      this.retrieve()
    }, e => {
      console.error('Stream not deleted', e)
    })
  }

  showInput = () => {
    this.setState({ inputVisible: true }, () => this.input.focus())
  }

  handleInputChange = (e: any) => {
    this.setState({ inputValue: e.target ? e.target.value : 'error' })
  }

  createStream = () => {
    const { inputValue } = this.state

    if (inputValue.trim() !== '') {
      const {streamStore, topic} = this.props
      const request = {topicId: topic.id, stream: {track: inputValue}}
      streamStore.createStream(request).then((stream: Stream) => {
        console.log('Stream created', stream)
        this.retrieve()
      }, e => {
        console.error('Stream creation error', e)
      })
    }

    this.setState({
      inputVisible: false,
      inputValue: '',
    })
  }

  saveInputRef = (input: any) => (this.input = input)

  render() {
    const { inputVisible, inputValue } = this.state
    const {streamStore, topic} = this.props
    const streams = streamStore.streamsMap[topic.id]
    return (
      <div>
        {streams && streams.map((stream) => {
          return (
            <Tag key={stream.id} closable onClose={() => this.deleteStream(stream)}>
              {stream.track}
            </Tag>
          )
        })}
        {inputVisible && (
          <Input
            ref={this.saveInputRef}
            type="text"
            size="small"
            style={{ width: 78 }}
            value={inputValue}
            onChange={this.handleInputChange}
            onBlur={this.createStream}
            onPressEnter={this.createStream}
          />
        )}
        {!inputVisible && (
          <Tag onClick={this.showInput} style={{ background: '#fff', borderStyle: 'dashed' }}>
            <Icon type="plus" /> Add query
          </Tag>
        )}
      </div>
    )
  }

  componentDidMount() {
    this.retrieve()
  }

  retrieve() {
    const {streamStore, topic} = this.props
    streamStore.retrieveStreams(topic.id)
  }

}

export default TopicStreams