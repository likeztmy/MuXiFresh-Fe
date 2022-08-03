import React, { useState } from "react";
import J_progress from '../J_progress';
import './Join.less';

const Join = () => {

    const [flag, setFlag] = useState('a');


    function Select(e: React.MouseEvent<HTMLDivElement>): any {
        e.preventDefault();
        const div: HTMLDivElement = e.currentTarget;
        setClickedDiv(div.id);
        // alert(window.innerWidth)
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
                {/* 组件  */}
                <J_progress />

            </div>
        </div>
    )
};

export default Join;
