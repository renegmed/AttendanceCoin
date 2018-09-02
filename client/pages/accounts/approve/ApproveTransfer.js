import React, {Component} from 'react'

import Layout from '../../../components/containers/Layout'
import ApproveTransferForm from './ApproveTransferForm'

class ApproveTransfer extends Component {
    render() {
        return (
            <Layout>
                <ApproveTransferForm />
            </Layout>
        )
    }
}

export default ApproveTransfer
