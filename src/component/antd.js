import React from 'react'
import {Table, Modal,Input} from 'antd'
import 'antd/dist/antd.css'
import store from '../store'
import CartManage from '../action'
import './antd.scss'

export default class CustomTable extends React.Component{
    constructor(props){
        super(props);
        this.state={
            align:'center',
            visible:true,
            columns:[
                {
                    title:'id',
                    dataIndex:'id',
                    key:'id'
                },
                {
                    title:'产品名',
                    dataIndex:'product',
                    key:'product'
                },
                {
                    title:'数量',
                    dataIndex:'number',
                    key:'number'
                },
                {
                    title:'金额',
                    dataIndex:'money',
                    key:'money'
                },
                {
                    title:'操作',
                    dataIndex:'',
                    key:'x',
                    render:(record)=><div><a href="javascript:void(0);" style={{margin:'0px 5px'}} onClick={this.handleAddTable.bind(this)}>增加</a><a href="javascript:void(0);"  style={{margin:'0px 5px'}} onClick={this.handleDeltel.bind(record)}>删除</a><a href="javascript:void(0);"  style={{margin:'0px 5px'}}>修改</a></div>
                }
            ],
            cart:[
                {
                    id:1,
                    product:'mac笔记本',
                    number:3,
                    money:100
                },
                {
                    id:2,
                    product:'DELL笔记本',
                    number:2,
                    money:50
                }
            ]
        }
    }
    handleAddTable(){
        store.dispatch(new CartManage().AddToCart(3, 'MSI微星笔记本', 1, 30));
        this.setState({
            cart:store.getState()['reducer'].cart
        });
    }
    handleDeltel=(record)=>{
        console.log(record);
    }
    render(){
        return(
            <div style={{width:'60%',margin:'0px auto'}}>
                <Table dataSource={this.state.cart} columns={this.state.columns} align={this.state.align} bordered/>
                <Modal 
                title="添加"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}>
                    <p>
                        <label>id：</label>
                        <Input type="number" placeholder="请输入您的id"/>
                    </p>
                </Modal>
            </div>
        )
    }
} 