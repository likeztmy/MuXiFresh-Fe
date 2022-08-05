import React, { useState } from "react";
import J_progress from '../J_progress';
import './Join.less';
import A_audit from "../A_audit";
import ManageLists from "../A_ManageLists";

const Join = () => {

    const [flag, setFlag] = useState('d');


    function Select(e: React.MouseEvent<HTMLDivElement>): any {
        e.preventDefault();
        const div: HTMLDivElement = e.currentTarget;
        setClickedDiv(div.id);
        // alert(window.innerWidth)
        // alert(getComputedStyle(div,null).getPropertyValue('font-size'))
    }

    function setClickedDiv(id: string): void {
        if (id == 'a')
            setFlag('a')
        if (id == 'b')
            setFlag('b')
        if (id == 'c')
            setFlag('c')
        if (id == 'd')
            setFlag('d')
        if (id == 'e')
            setFlag('e')
    }

    return (
        <div className='body'>
            <div className='box'>
                <div className="top">
                    <div className={flag == 'a' ? 'selected' : "title"} id='a' onClick={(event) => Select(event)} >报名表查看</div>
                    <div className={flag == 'b' ? 'selected' : "title"} id='b' onClick={(event) => Select(event)} >进度查询</div>
                    <div className={flag == 'c' ? 'selected' : "title"} id='c' onClick={(event) => Select(event)} >作业</div>
                    <div className={flag == 'd' ? 'selected' : "title"} id='d' onClick={(event) => Select(event)} >审阅</div>
                    <div className={flag == 'e' ? 'selected' : "title"} id='e' onClick={(event) => Select(event)} >作业发布</div>
                </div>
                <div className="box2">
                    <A_audit></A_audit>
                    <ManageLists></ManageLists>
                </div>
            </div>
        </div>
    )
};

export default Join;
