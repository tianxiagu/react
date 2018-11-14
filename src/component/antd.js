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
            visible:false,
            isAdd:0,
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
                    render:(record)=><div><a href="javascript:void(0);" style={{margin:'0px 5px'}} onClick={this.handleAddTable.bind(this)}>增加</a><a href="javascript:void(0);"  style={{margin:'0px 5px'}} onClick={()=>this.handleDeltel(record)}>删除</a><a href="javascript:void(0);" onClick={()=>this.handleUpdate(record)}  style={{margin:'0px 5px'}}>修改</a></div>
                }
            ],
            cart:store.getState().reducer.cart,
            carts:{
                product:'',
                number:'',
                money:''
            }
        }
    }
    handleAddTable(){
        this.setState({
            visible:true,
            isAdd:0
        });
    }
    handleDeltel=(record)=>{
        store.dispatch(new CartManage().DelToCart(record.id));
        this.setState({
            cart:store.getState().reducer.cart
        });
    }
    handleCancel=()=>{
        this.setState({
            visible:false
        });
    }
    // 添加
    handleChangePro=(e)=>{
        this.state.carts.product = e.target.value;
        this.setState({
            carts: this.state.carts
        });
    }
    handleChangeNum=(e)=>{
        this.state.carts.number = e.target.value;
        this.setState({
            carts: this.state.carts
        });
    }
    handleChangeMoney=(e)=>{
        this.state.carts.money = e.target.value;
        this.setState({
            carts: this.state.carts
        });
    }
    handleOk=()=>{
        if(this.state.isAdd===0){
            store.dispatch(new CartManage().AddToCart(++this.state.cart[this.state.cart.length - 1]['id'], this.state.carts.product, this.state.carts.number, this.state.carts.money))
        }else{
            console.log(123)
            store.dispatch(new CartManage().UpdToCart(this.state.recordId,this.state.carts.product,this.state.carts.money,this.state.carts.number));
        }
        this.setState({
            cart: store.getState().reducer.cart,
            visible: false
        });
    }
    // 修改
    handleUpdate=(record)=>{
        this.state.carts.product=record.product;
        this.state.carts.money=record.money;
        this.state.carts.number=record.number;
        this.setState({
            recordId:record.id,
            carts:this.state.carts,
            visible:true,
            isAdd:1
        });
    }
    render(){
        return(
            <div style={{width:'60%',margin:'0px auto'}}>
                <Table dataSource={this.state.cart} columns={this.state.columns} align={this.state.align} bordered/>
                <Modal 
                title="添加"
                visible={this.state.visible}
                onOk={this.handleOk}
                cancelText="取消"
                okText="确定"
                onCancel={this.handleCancel}>
                     <p>
                        <label>产品名：</label>
                        <Input type="text" placeholder="请输入您的产品名称" value={this.state.carts.product} onChange={this.handleChangePro.bind(this)}/>
                    </p>
                     <p>
                        <label>数量：</label>
                        <Input type="number" placeholder="请输入您的数量" value={this.state.carts.number} onChange={this.handleChangeNum.bind(this)}/>
                    </p>
                     <p>
                        <label>金额：</label>
                        <Input type="text" placeholder="请输入您的金额" value={this.state.carts.money} onChange={this.handleChangeMoney.bind(this)}/>
                    </p>
                </Modal>
            </div>
        )
    }
} 