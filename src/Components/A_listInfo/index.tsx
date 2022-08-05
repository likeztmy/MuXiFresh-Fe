import React, { useState } from "react";
import './index.less';

export default function A_listInfo(props: any) {

  const name = props.name;
  const grade = props.grade;
  const school = props.school;
  const group = props.group;
  const sheet = props.sheet;
  const work = props.work;
  const id = props.id;

  return (
    <div className="info_inf">
      <div className="info_info" style={{ width: '1.4rem' }}>{name}</div>
      <div className="info_info" style={{ width: '1.36rem' }}>{grade}</div>
      <div className="info_info" style={{ width: '1.58rem' }}>{school}</div>
      <div className="info_info" style={{ width: '1.36rem' }}>{group}</div>
      <div className="info_info" style={{ width: '1.4rem' }}>
        <a href={sheet}>点击查看</a></div>
      <div className="info_info" style={{ width: '1.36rem' }}><a href={work}>已批阅</a></div>
      <div className="info_info" style={{ width: '3rem' }}>
        <div className="info_operate">移动分组</div>
        <div className="info_vertical"></div>
        <div className="info_operate">录取</div>
        <div className="info_vertical"></div>
        <div className="info_operate" style={{ color: '#FF471A' }}>删除</div>
      </div>
    </div>
  )
}

