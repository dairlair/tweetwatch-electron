import React from 'react'
import CreateTopicForm from '../components/CreateTopicForm'
import { PageHeaderWidget } from '../components/widgets'

const CreateTopicPage = () => (
  <div>
    <PageHeaderWidget title="Create topic"></PageHeaderWidget>
    <CreateTopicForm />
  </div>
)

export default CreateTopicPage