import React from "react";

const Jobs = props => (
  <div>
    {props.city && (
      <div>
        <p>Зарплата: {props.salary}</p>
        <p>Название вакансии: {props.name}</p>
        <p>Ссылка на вакансию на hh.ru: {props.url}</p>
        <p>Город: {props.city}</p>
        <p>Контактный телефон: {props.phone}</p>
      </div>
    )}
    <p>{props.error}</p>
  </div>
);

export default Jobs;
