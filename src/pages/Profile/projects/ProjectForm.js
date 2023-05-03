import React,{useRef} from 'react';
import { Form, Modal,message } from 'antd'
import Input from 'antd/es/input/Input'
import TextArea from 'antd/es/input/TextArea'
import { useDispatch,useSelector } from 'react-redux';
import { CreateProject, EditProject } from '../../../apiCalls/projects';
import { setLoading } from '../../../redux/loadersSlice';

function projectForm({show,setShow,reloadData,project}){
  const FormRef=useRef(null);
  const dispatch=useDispatch()
  const {user}=useSelector((state)=>state.users)

  const onFinish=async(values)=>{
    try {
      let response=null;
      dispatch(setLoading(false))
      if(project){
        //edit project
        values._id=project._id,
        response=await EditProject(values);
      }else{
        //Create project
        values.owner=user._id;
        values.members=[
          {
            user:user._id,
            role:'owner'
          }
        ]
        response=await CreateProject(values)
      }
      if(response.success){
        message.success(response.message)
        reloadData(),
        setShow(false)
      }else{
        throw new Error(response.error)
      }
      dispatch(setLoading(false))
    } catch (error) {
      message.error(error.message)
      dispatch(setLoading(false))
    }
  }
  return (
    <div>
      <Modal
      title='Add project'
      open={show}
      onCancel={()=>setShow(false)}
      centered
      width={700}
      onOk={()=>{
        FormRef.current.submit()
      }}
      okText="save"
      >
        <Form layout='vertical' ref={FormRef} onFinish={onFinish} initialValues={project}>
          <Form.Item label='project Name' name='name'>
            <Input placeholder='project Name'/> 
          </Form.Item>
          <Form.Item label='project description' name='description'> 
           <TextArea placeholder='description'/>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default projectForm
