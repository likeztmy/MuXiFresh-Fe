import React, { useState } from "react";
import './index.less';
import A_listInfo from "../A_listInfo";

const ManageLists: React.FC = () => {

  const data = [
    { name: "小强" }]
  const dat = {
    name: "小强",
    grade: "大一",
    school: "计算机学院",
    group: "前端组",
    sheet: "https://www.baidu.com/",
    work: "https://www.baidu.com/",
    id: "666"
  }

  return (
    <div>
      <div className="lists_header">
        <div className="lists_headers" style={{ width: '1.4rem' }}>姓名</div>
        <div className="lists_headers" style={{ width: '1.36rem' }}>年级</div>
        <div className="lists_headers" style={{ width: '1.58rem' }}>学院</div>
        <div className="lists_headers" style={{ width: '1.36rem' }}>组别</div>
        <div className="lists_headers" style={{ width: '1.4rem' }}>报名表</div>
        <div className="lists_headers" style={{ width: '1.36rem' }}>作业</div>
        <div className="lists_headers" style={{ width: '3rem' }}>操作</div>
      </div>
      <div className="manage_info">
        {data.map((data) => {
          return <div>
            <A_listInfo id={dat.id} name={dat.name} grade={dat.grade} school={dat.school} group={dat.group} sheet={dat.sheet} work={dat.work} />
            <A_listInfo id={dat.id} name={dat.name} grade={dat.grade} school={dat.school} group={dat.group} sheet={dat.sheet} work={dat.work} />
          </div>
        })
        }
        {/* <A_listInfo name={dat.name} /> */}
      </div>
    </div>
  )
}

export default ManageLists