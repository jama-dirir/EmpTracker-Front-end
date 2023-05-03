const {apiRequest} =require('.')

const CreateProject=async(project)=>apiRequest('post','/api/projects/create-project',project)
const GetAllProjects=async(filters)=>apiRequest('post','/api/projects/get-all-projects',filters)
const EditProject=async(project)=>apiRequest('post','/api/projects/edit-project',project)
const DeleteProject=async(id)=>apiRequest('post','/api/projects/delete-project',{_id:id})

module.exports={
    CreateProject,
    GetAllProjects,
    EditProject,
    DeleteProject
}