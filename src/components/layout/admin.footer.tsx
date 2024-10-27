'use client'
import { Layout } from 'antd';

const AdminFooterbar = () => {
    const { Footer } = Layout;

    return (
        <>
            <Footer style={{ textAlign: 'center' }}>
                huynh ©{new Date().getFullYear()} Created by @huynh
            </Footer>
        </>
    )
}

export default AdminFooterbar;