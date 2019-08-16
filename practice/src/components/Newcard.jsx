import React, { Component } from 'react'
import { Button, Modal, Form, Input, Icon } from 'antd';

export default class NewCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            save: this.props.AddInfo,
            visible: false
        }
    }
    showModal = () => { this.setState({ visible: true }) }
    handleCancel = () => { this.setState({ visible: false }) }
    handleCreate = () => {
        const { form } = this.formRef.props;
        form.validateFields((err, values) => {
            if (err) {
                return
            }
            console.log('Received values of form: ', values)
            form.resetFields()
            this.setState({ visible: false })
        })
    }
    saveFormRef = formRef => { 
        this.formRef = formRef
        const card = {Day: formRef.Date, City1: formRef.Origin, City2: formRef.Destiny, Price: formRef.Price, fav: false}
        this.state.save(card)
    }
    render() {
        return (
            <div>
                <Button type="link" onClick={this.showModal}><Icon type="plus" style={{ fontSize: '30px' }} /></Button>
                <CollectionCreateForm
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                />
            </div>
        )
    }
}

const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
    class extends React.Component {
        render() {
            const { visible, onCancel, onCreate, form } = this.props
            const { getFieldDecorator } = form
            return (
                <Modal
                    visible={visible}
                    title="Create a new collection"
                    okText="Create"
                    onCancel={onCancel}
                    onOk={onCreate}
                >
                    <Form layout="vertical">
                        <Form.Item label="Date and Time">
                            {getFieldDecorator('Date', {
                                rules: [{ required: true, message: 'Requiered Field' }],
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item label="City Origin">
                            {getFieldDecorator('Origin', {
                                rules: [{ required: true, message: 'Requiered Field' }],
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item label="City Destiny">
                            {getFieldDecorator('Destiny', {
                                rules: [{ required: true, message: 'Requiered Field' }],
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item label="Price">
                            {getFieldDecorator('Price', {
                                rules: [{ required: true, message: 'Requiered Field' }],
                            })(<Input />)}
                        </Form.Item>
                    </Form>
                </Modal>
            )
        }
    }
)