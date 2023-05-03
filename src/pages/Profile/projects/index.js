import React,{useState,useEffect} from 'react'
import { Button, Table ,message} from 'antd'
import ProjectForm from './ProjectForm';
import { useDispatch,useSelector } from 'react-redux';
import { setButtonLoading } from '../../../redux/loadersSlice';
import { DeleteProject, GetAllProjects } from '../../../apiCalls/projects';
import { getDateFormat } from '../../../helper/dateFormat';

function Projects() {
  const [projects,setProjects]=useState(false)
  const dispatch=useDispatch()
  const {user}=useSelector((state)=>state.users)
  const [show,setShow]=React.useState(false);
  const [selectedProject,setSelectedProject]=useState(null)
  
  const getData=async()=>{
    try {
      dispatch(setButtonLoading(true));
      const response=await GetAllProjects({owner:user._id})
      console.log('DATA :',response)
      if(response.success){
        setProjects(response.data)
      }else{
        throw new Error(response.error)
      }
      dispatch(setButtonLoading(false))
    } catch (error) {
      message.error(error.message)
      dispatch(setButtonLoading(false))
    }
  }
  

  const onDelete=async(id)=>{
    try {
      dispatch(setButtonLoading(true));
      const response=await DeleteProject(id)
      console.log('DATA :',response)
      if(response.success){
        setProjects(response.data)
        getData()
      }else{
        throw new Error(response.error)
      }
      dispatch(setButtonLoading(false))
    } catch (error) {
      message.error(error.message)
      dispatch(setButtonLoading(false))
    }
  }

  useEffect(()=>{
    getData()
  },[])

  const columns=[
    {
      title:'Name',
      dataIndex:'name'
    },
    {
      title:'Description',
      dataIndex:'description'
    },
    {
      title:'Status',
      dataIndex:'status'
    },
    {
      title:'Created At',
      dataIndex:'createAt',
      render:(text)=>getDateFormat(text)
    },
    {
      title:'Action',
      dataIndex:'action',
      render:(text,record)=>{
        return(
         <div className='flex gap-6'>
           <i className="ri-delete-bin-line"  onClick={()=>onDelete(record._id)}></i>
          <i className="ri-edit-2-line" onClick={()=>{
            setSelectedProject(record)
            setShow(true)
          }}></i>
         </div>
        )
      }
    }
  ]
  return (
    <div>
      <div className='flex justify-end'>
        <Button type="default" onClick={()=>setShow(true)} >
          Create Project
          </Button>
      </div>
          <Table columns={columns} dataSource={projects} className="mt-2"></Table>
      {show && <ProjectForm show={show} setShow={setShow} reloadData={getData}
      project={selectedProject}/>}
    </div>
  )
}

export default Projects
