import React from "react";
import "./jobs.css";

const Jobs = props => (
  <div className="infojob">
    {props.city && (
      <div>
        <p>Зарплата: {props.salary}</p>
        <p>Название вакансии: {props.name}</p>
        <p>Ссылка на вакансию на hh.ru: {props.url}</p>
        <p>Город: {props.city}</p>
        <p>Контактный телефон: {props.phone}</p>
      </div>
    )}
    <p className="error">{props.error}</p>
  </div>
);

export default Jobs;
