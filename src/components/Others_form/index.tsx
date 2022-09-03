//从审阅界面跳转而来，传email参数 查看此人报名表
import React,{useState,useEffect} from 'react';
import { postData } from '../../interface/fetch';
import default_avatar from '../../images/default_avatar.png'
import { useParams,useNavigate } from 'react-router-dom';
import './index.less'

const Others_form:React.FC = ()=> {
    const navigate=useNavigate()
    const back=()=>{
        navigate(-1)
    }

    const {email}=useParams()//拿到 从审阅跳转到查看报名表，携带的email参数

    const [name,setName]=useState('')
    const [student_id,setStudent_id]=useState('')
    const [college,setCollege]=useState('')
    const [major,setMajor]=useState('')
    const [grade,setGrade]=useState('')
    const [gender,setGender]=useState('')
    //const [email,setEmail]=useState('adcd@qq.com')
    const [contact_way,setContact_way]=useState('')
    const [contact_number,setContact_number]=useState('')
    const [group,setGroup]=useState('')
    const [reason,setReason]=useState('')
    const [understand,setUnderstand]=useState('')
    const [self_introduction,setSelf_introduction]=useState('')
    const [if_other_organization,setIf_other_organization]=useState('')
    const [avatar,setAvatar]=useState(default_avatar)

    useEffect(()=>{
        const data={email:email}
        postData('/form/view',data,'POST').then(res=>{
            console.log(res.data)
            setName(res.data.name)
            setStudent_id(res.data.student_id)
            setCollege(res.data.college)
            setMajor(res.data.major)
            setGrade(res.data.grade)
            setGender(res.data.gender)
            //setEmail(res.data.email)
            setContact_way(res.data.contact_way)
            setContact_number(res.data.contact_number)
            setGroup(res.data.group)
            setReason(res.data.reason)
            setUnderstand(res.data.understand)
            setSelf_introduction(res.data.self_introduction)
            setIf_other_organization(res.data.if_other_organization)
            setAvatar(res.data.avatar)
        })
        .catch(error=>console.log(error))
    },[])

    return (   
        <div className="other-container">
            <div className="theme">{name}的简历</div>
            <div className="one1">
                <div className="head">
                    <div className="title">个人信息</div>
                    <div className="highlight"></div>
                </div>
                <div className="body1">
                    <div className="picture"><img src={avatar==''? default_avatar:avatar} alt="" className='avatar'/></div>
                    <div className="detail">
                        <div className="line">姓名：<span className='circle_one'>{name}</span></div>
                        <div className="line">学号：<span className='circle_one'>{student_id}</span></div>
                        <div className="line">学院：<span className='circle_one'>{college}</span></div>
                        <div className="line">专业：<span className='circle_one'>{major}</span></div>
                        <div className="line">年级：<span className='circle_one'>{grade}</span></div>
                        <div className="line">性别：<span className='circle_two'>{gender}</span></div>
                        <div >联系方式：<span className='circle_two'>邮箱</span>
                            <div className="circle_one line_2">{email}</div>
                            {/* QQ 手机号选填 */}
                            <div className="circle_two line">{contact_way}</div> 
                            <div className="circle_one">{contact_number}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="two2">
                <div className="head">
                    <div className="title">报名信息</div>
                    <div className="highlight"></div>
                </div>
                <div className="body2">
                    <div className="other-row"><span> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;心动组别：</span><span className='circle_two'>{group}</span></div>
                    <div className="other-row"><span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;心动理由：</span><span className='circle_three'>{reason}</span></div>
                    <div className="other-row_1"><span>对组别的了解：</span><span className='circle_three'>{understand}</span></div>
                </div>
            </div>
            <div className="three3">
            <div className="head">
                    <div className="title">自述部分</div>
                    <div className="highlight"></div>
            </div>
            <div className="body3">
                <div className="intro"><span>自我介绍：</span><span className='circle_three'>{self_introduction}</span></div>
            </div>
            </div>
            <div className="four4">
                <div className="head">
                    <div className="title">一些小问题</div>
                    <div className="highlight"></div>
                </div>
                <div className="body_1">
                    <div className="qus">你是否有加入/正在加入一些其他组织或担任学生工作？</div>
                    <div className="ans">
                        <span>
                            <span className={if_other_organization=='是'? 'yes' : 'no'}>
                                <span className='inCircle'></span>
                            </span>
                            &nbsp;&nbsp;是
                        </span>
                        <span>
                            <span className={if_other_organization!='是'?'yes':'no'}>
                                <span className='inCircle'></span>
                            </span>
                            &nbsp;&nbsp;否
                        </span>
                    </div>
                </div>
            </div>
            <button className='other-btn' onClick={back}>返回</button>
        </div>
    
    )
}
export default Others_form