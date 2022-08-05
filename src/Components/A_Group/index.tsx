import React, { useState } from "react";
import './index.less';

export default function Group() {

  const [isFold, setFold] = useState("");



  return (
    <div className="Group_box">
      <div className={isFold == "product" ? "group_active" : "groups"}>
        <div className="group" onClick={() => setFold("product")}>产品组</div>
        <div className="group_status">已报名</div>
        <div className="group_status">初试过</div>
        <div className="group_status">面试过</div>
      </div>
      <div className={isFold == "android" ? "group_active" : "groups"}>
        <div className="group" onClick={() => setFold("android")}>安卓组</div>
        <div className="group_status">已报名</div>
        <div className="group_status">初试过</div>
        <div className="group_status">面试过</div>
      </div>
      <div className={isFold == "design" ? "group_active" : "groups"}>
        <div className="group" onClick={() => setFold("design")}>设计组</div>
        <div className="group_status">已报名</div>
        <div className="group_status">初试过</div>
        <div className="group_status">面试过</div>
      </div>
      <div className={isFold == "frontend" ? "group_active" : "groups"}>
        <div className="group" onClick={() => setFold("frontend")}>前端组</div>
        <div className="group_status">已报名</div>
        <div className="group_status">初试过</div>
        <div className="group_status">面试过</div>
      </div>
      <div className={isFold == "backend" ? "group_active" : "groups"}>
        <div className="group" onClick={() => setFold("backend")}>后端组</div>
        <div className="group_status">已报名</div>
        <div className="group_status">初试过</div>
        <div className="group_status">面试过</div>
      </div>
    </div>
  )
}

